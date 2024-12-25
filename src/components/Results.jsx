import { LinkButton } from "@/components/base/Button";
import { LoadingMessage } from "@/components/base/Loading";
import GeneManiaLogo from "@/images/logos/gene-mania.svg";
import NDExLogo from "@/images/logos/ndex.svg";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  ArrowTopRightOnSquareIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NDEx } from "@js4cytoscape/ndex-client";
import Cytoscape from "cytoscape";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useModal } from "./context/ModalContext";
import GeneManiaCard from "./GeneManiaCard";
import NDExCard from "./NDExCard";
import { Modal } from "./base/Modal";
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
