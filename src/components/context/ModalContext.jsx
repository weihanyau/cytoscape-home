import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>{children}</ModalContext.Provider>;
}
ModalProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export function useModal() {
    return useContext(ModalContext);
}
