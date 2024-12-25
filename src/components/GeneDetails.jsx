import GeneManiaCard from "./GeneManiaCard";
import NDExCard from "./NDExCard";
import PropTypes from "prop-types";

const GeneDetails = ({ geneNames, organism }) => (
  <>
    <div className="mt-2 bg-black text-gray-400 text-left py-2">
      <p className="flex flex-row items-center px-6">
        <img
          src={organism.image}
          alt=""
          className="h-8 w-8 brightness-0 invert"
        />
        <span className="pl-2 italic">{organism.name}</span>
        <span className="ml-2">
          &#40;{geneNames.length} query gene
          {geneNames.length > 1 ? "s" : ""}&#41;
        </span>
      </p>
    </div>
    <div className="flex flex-col lg:flex-row space-y-2 items-start mt-5 px-6 sm:space-x-4 sm:space-y-0">
      {geneNames.length > 0 && organism && (
        <GeneManiaCard genes={geneNames} organism={organism} />
      )}
      {geneNames.length > 0 && <NDExCard genes={geneNames} />}
    </div>
  </>
);

GeneDetails.propTypes = {
  geneNames: PropTypes.array.isRequired,
  organism: PropTypes.object.isRequired,
};

export default GeneDetails;