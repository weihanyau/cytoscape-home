import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import NDExLogo from '@/images/logos/ndex.svg';
import { ArrowTopRightOnSquareIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import { LinkButton } from '@/components/base/Button';
import { LoadingMessage } from '@/components/base/Loading';
import { NDEx } from '@js4cytoscape/ndex-client';

const ndexClient = new NDEx('https://www.ndexbio.org/v2');

const NDExCard = ({ genes }) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const json = await ndexClient.searchNetworks(genes.join(' '));
            console.log(json);
            if (json.error) {
                setError(json.error);
            } else {
                setData(json);
            }
            setLoading(false);
        };
        fetchData();
    }, [genes]);

    const href = `https://www.ndexbio.org/index.html#/search?searchType=All&searchString=${genes.join(
        '%20',
    )}&searchTermExpansion=false`;

    return (
        <div
            className={`relative w-full lg:w-3/5 p-4 rounded-xl min-h-28 sm:min-h-40 shadow-lg shadow-gray-200 ${
                error ? 'border-double border-4 border-red-100' : 'border border-gray-200'
            }`}
        >
            <div className="flex items-center">
                <NDExLogo className="h-8 w-8" />
                <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start group"
                >
                    <h3 className="ml-4 font-semibold text-gray-900 group-hover:text-complement-500">NDEx</h3>
                    <ArrowTopRightOnSquareIcon className="w-3 h-3 ml-1 mt-0.5 fill-gray-400 group-hover:fill-complement-500" />
                </a>
            </div>
            <p className="mt-4 text-right text-xs text-gray-600 overflow-y-auto">
                {!loading && !error ? (
                    <>
                        {data.networks.length < data.numFound ? 'Top' : ''} {data.networks.length} results
                    </>
                ) : (
                    <>&nbsp;</>
                )}
            </p>
            <div className="mt-2 h-96 overflow-y-auto ring-4 ring-black ring-opacity-5 rounded-lg flow-root">
                {loading && (
                    <LoadingMessage className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                )}
                {error && (
                    <span className="w-full flex items-start justify-center text-red-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <ExclamationTriangleIcon className="w-5 h-5 mt-0.5" />
                        <span className="ml-2 font-light">
                            {error.message ? error.message : 'Unable to fetch networks'}
                        </span>
                    </span>
                )}
                {!loading && !error && (
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead className="sticky bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                >
                                    Network
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                    Owner
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                    Nodes
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                    Edges
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {data.networks.map((net) => (
                                <tr key={net.externalId}>
                                    <td className="whitespace-nowrap px-3 py-2 text-left text-sm text-gray-500">
                                        <a
                                            href={`https://www.ndexbio.org/viewer/networks/${net.externalId}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className=" group text-wrap"
                                        >
                                            <span className="underline underline-offset-2 group-hover:underline-complement-500 group-hover:text-complement-500">
                                                {net.name}
                                            </span>
                                            <ArrowTopRightOnSquareIcon className="w-3 h-3 ml-1 -mt-2 inline fill-gray-400 group-hover:fill-complement-500" />
                                        </a>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">{net.owner}</td>
                                    <td className="whitespace-nowrap px-3 py-2 text-right text-sm text-gray-500">
                                        {net.nodeCount}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-2 text-right text-sm text-gray-500">
                                        {net.edgeCount}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            <div className="flex w-full justify-center">
                <LinkButton
                    href={href}
                    className="mt-4"
                >
                    More Results on NDEx
                </LinkButton>
            </div>
        </div>
    );
};
NDExCard.propTypes = {
    genes: PropTypes.array.isRequired,
};

export default NDExCard;
