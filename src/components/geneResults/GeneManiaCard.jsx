import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import GeneManiaLogo from '@/images/logos/gene-mania.svg';
import { ArrowTopRightOnSquareIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import { LinkButton } from '@/components/base/Button';
import { LoadingMessage } from '@/components/base/Loading';
import Cytoscape from 'cytoscape';
import { fetchGeneManiaNetwork, createCytoscape } from '../utilities/geneManiaUtils';

const GeneManiaCard = ({ genes, organism }) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    const isMounted = useRef(false);
    const cyRef = useRef();

    useEffect(() => {
        isMounted.current = true;

        return () => {
            isMounted.current = false;
            if (cyRef.current) {
                // Make sure Cytoscape is destroyed when the component is unmounted
                cyRef.current.destroy();
                cyRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        const edgeColors = [
            { code: 'coexp', color: '#d0b7d5' },
            { code: 'coloc', color: '#a0b3dc' },
            { code: 'gi', color: '#90e190' },
            { code: 'path', color: '#9bd8de' },
            { code: 'pi', color: '#eaa2a2' },
            { code: 'predict', color: '#f6c384' },
            { code: 'spd', color: '#dad4a2' },
            { code: 'spd_attr', color: '#D0D0D0' },
            { code: 'reg', color: '#D0D0D0' },
            { code: 'reg_attr', color: '#D0D0D0' },
            { code: 'user', color: '#f0ec86' },
            { code: 'other', color: '#bbbbbb' },
        ];

        const fetchData = async () => {
            setLoading(true);
            const json = await fetchGeneManiaNetwork(genes.join('\n'), organism.id);
            if (json.error) {
                setError(json.error);
            } else {
                setData(json);
                if (!isMounted.current) {
                    // Do not attempt to create Cytoscape if the component is unmounted!
                    return;
                }
                // -- Create the Cytoscape instance --
                const cy = createCytoscape('genemania-cy');
                cyRef.current = cy;
                // style
                cy.style().selector('node').style({
                    width: 'mapData(score, 0, 1, 20, 60)',
                    height: 'mapData(score, 0, 1, 20, 60)',
                    content: 'data(symbol)',
                    'font-size': 12,
                    'text-valign': 'center',
                    'text-halign': 'center',
                    'background-color': '#666',
                    'text-outline-color': '#666',
                    'text-outline-width': 1.75,
                    color: '#fff',
                    'overlay-padding': 6,
                });
                cy.style().selector('node[?query]').style({
                    'background-color': '#333',
                    'text-outline-color': '#333',
                });
                cy.style().selector('edge').style({
                    'curve-style': 'haystack',
                    'haystack-radius': 0.5,
                    opacity: 0.4,
                    'line-color': '#bbb',
                    width: 'mapData(weight, 0, 1, 1.5, 16)',
                    'overlay-padding': 3,
                });
                edgeColors.forEach((ec) => {
                    cy.style()
                        .selector('edge[group="' + ec.code + '"]')
                        .style({
                            'line-color': ec.color,
                        });
                });
                // nodes
                json.resultGenes.forEach((el) => {
                    const node = {
                        data: {
                            id: el.gene.id,
                            symbol: el.gene.symbol,
                            score: el.score,
                            query: el.queryGene,
                        },
                    };
                    cy.add(node);
                });
                // edges
                let id = 0;
                json.resultNetworkGroups.forEach((ng) => {
                    const netGroup = ng.networkGroup;
                    ng.resultNetworks?.forEach((rn) => {
                        rn.resultInteractions?.forEach((ri) => {
                            const source = ri.fromGene?.gene;
                            const target = ri.toGene?.gene;
                            const weight = ri.interaction?.weight;
                            if (source && target) {
                                const edge = {
                                    group: 'edges',
                                    data: {
                                        id: `e${++id}`,
                                        source: source.id,
                                        target: target.id,
                                        weight: weight,
                                        group: netGroup.code,
                                    },
                                };
                                cy.add(edge);
                            }
                        });
                    });
                });
                // layout
                cy.layout({
                    name: 'fcose',
                    animate: false,
                    idealEdgeLength: 40,
                    nodeOverlap: 30,
                    nodeRepulsion: 100000,
                    padding: 10,
                }).run();
            }
            setLoading(false);
        };
        fetchData();
    }, [genes, organism]);

    const href = `https://genemania.org/search/${organism.id}/${genes.join('/')}`;

    return (
        <div
            className={`w-full lg:w-2/5 p-4 rounded-xl min-h-28 sm:min-h-40 shadow-lg shadow-gray-200 ${
                error ? 'border-double border-4 border-red-100' : 'border border-gray-200'
            }`}
        >
            <div className="flex items-center">
                <GeneManiaLogo className="h-8 w-8" />
                <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start group"
                >
                    <h3 className="ml-4 font-semibold text-gray-900 group-hover:text-complement-500">GeneMANIA</h3>
                    <ArrowTopRightOnSquareIcon className="w-3 h-3 ml-1 mt-0.5 fill-gray-400 group-hover:fill-complement-500" />
                </a>
            </div>
            <div className="w-full mt-4">
                <p className="text-right text-xs text-gray-600 overflow-y-auto">
                    {!loading && !error ? <>{data.resultGenes.length} result genes</> : <>&nbsp;</>}
                </p>
                <div className="relative w-full h-96 mt-2 ring-4 ring-black ring-opacity-5 rounded-lg">
                    <div
                        id="genemania-cy"
                        className="w-full h-96"
                    />
                    {loading && (
                        <LoadingMessage className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    )}
                    {error && (
                        <span className="w-full flex items-start justify-center text-red-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <ExclamationTriangleIcon className="w-5 h-5 mt-0.5" />
                            <span className="ml-2 font-light">
                                {error.message ? error.message : 'Unable to fetch network'}
                            </span>
                        </span>
                    )}
                </div>
            </div>
            <div className="flex w-full justify-center">
                <LinkButton
                    href={href}
                    className="mt-4"
                >
                    Go to GeneMANIA
                </LinkButton>
            </div>
        </div>
    );
};
GeneManiaCard.propTypes = {
    genes: PropTypes.array.isRequired,
    organism: PropTypes.object.isRequired,
};

export default GeneManiaCard;
