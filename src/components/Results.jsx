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

export function Results({ open = false, data, onClose }) {
  const type = data?.type;
  const title = data?.title || "Results";
  const geneNames = data?.genes || [];
  const organism = data?.organism;

  const { setIsModalOpen } = useModal();
  useEffect(() => {
    setIsModalOpen(open);
    return () => setIsModalOpen(false);
  }, [open, setIsModalOpen]);

  return (
    <Transition show={open}>
      <Dialog
        className="relative z-10 w-full"
        onClose={() => void 0 /**(make it modal)*/}
      >
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div className="fixed inset-0 z-10 w-full h-full justify-center">
          <div className="flex w-full h-full items-end justify-center p-0 text-center sm:items-center sm:p-2">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform w-full h-full rounded-lg bg-white text-left shadow-xl transition-all overflow-y-auto py-6 sm:my-8 sm:px-0">
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
                  <DialogTitle
                    as="h2"
                    className="mt-0.5 mb-6 text-xl text-center font-semibold leading-6 text-gray-900"
                  >
                    {title}
                  </DialogTitle>
                  {type === "gene" && (
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
                          <GeneManiaCard
                            genes={geneNames}
                            organism={organism}
                          />
                        )}
                        {geneNames.length > 0 && <NDExCard genes={geneNames} />}
                      </div>
                    </>
                  )}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
Results.propTypes = {
  open: PropTypes.bool,
  data: PropTypes.object,
  onClose: PropTypes.func,
};
