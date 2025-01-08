import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import PropTypes from 'prop-types';

export const Modal = ({ open, onClose, children }) => (
    <Transition show={open}>
        <Dialog
            className="relative z-10 w-full"
            onClose={onClose}
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
                            {children}
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </Transition>
);

Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};
