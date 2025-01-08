import { DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from 'prop-types';
import { Modal } from "../base/Modal";
import GeneDetails from "./GeneDetails";

export function Results({ open = false, data, onClose }) {
  const type = data?.type;
  const title = data?.title || "Results";
  const geneNames = data?.genes || [];
  const organism = data?.organism;

  return (
    <Modal open={open} onClose={onClose}>
      <div className="absolute right-0 top-0 pr-4 pt-4">
        <button
          type="button"
          className="rounded-xl bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-complement-500 focus:ring-offset-2"
          onClick={onClose}
        >
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="-mt-2.5 text-center sm:text-left">
        <DialogTitle as="h2" className="mt-0.5 mb-6 text-xl text-center font-semibold leading-6 text-gray-900">
          {title}
        </DialogTitle>
        {type === "gene" && (
          <GeneDetails geneNames={geneNames} organism={organism} />
        )}
      </div>
    </Modal>
  );
}

Results.propTypes = {
  open: PropTypes.bool,
  data: PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
    genes: PropTypes.arrayOf(PropTypes.string),
    organism: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

