'use client';

import { Popover } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/base/Button';
import { Container } from '@/components/base/Container';
import AppLogo from '@/images/logos/app.svg';
import { NavLinks } from '@/components/NavLinks';
import { useEffect, useState } from 'react';
import { useModal } from './context/ModalContext';

function MenuIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M5 6h14M5 18h14M5 12h14"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ChevronUpIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M17 14l-5-5-5 5"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function MobileNavLink(props) {
    return (
        <Popover.Button
            as="a"
            className="block text-base leading-7 tracking-tight text-gray-700"
            {...props}
        />
    );
}

export function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { isModalOpen } = useModal();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (!isModalOpen) {
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    setShowHeader(false);
                } else {
                    setShowHeader(true);
                }
                setLastScrollY(currentScrollY);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, isModalOpen]);

    return (
        <header
            className={`fixed top-0 z-50 w-full bg-white shadow-md transition-transform duration-300 ${
                showHeader && !isModalOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <nav>
                <Container className="relative z-10 flex justify-between py-8">
                    <div className="relative z-10 flex items-center gap-16">
                        <a
                            href="/"
                            aria-label="Home"
                        >
                            <AppLogo className="h-10 w-auto" />
                        </a>
                        <div className="hidden lg:flex lg:gap-10">
                            <NavLinks />
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <Popover className="lg:hidden">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
                                        aria-label="Toggle site navigation"
                                    >
                                        {({ open }) =>
                                            open ? (
                                                <ChevronUpIcon className="h-6 w-6" />
                                            ) : (
                                                <MenuIcon className="h-6 w-6" />
                                            )
                                        }
                                    </Popover.Button>
                                    <AnimatePresence initial={false}>
                                        {open && (
                                            <>
                                                <Popover.Overlay
                                                    static
                                                    as={motion.div}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                                                />
                                                <Popover.Panel
                                                    static
                                                    as={motion.div}
                                                    initial={{ opacity: 0, y: -32 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{
                                                        opacity: 0,
                                                        y: -32,
                                                        transition: { duration: 0.2 },
                                                    }}
                                                    className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                                                >
                                                    <div className="space-y-4">
                                                        <MobileNavLink href="/#features">Features</MobileNavLink>
                                                        <MobileNavLink href="/#tools">Tools</MobileNavLink>
                                                        <MobileNavLink href="/#citations">Citations</MobileNavLink>
                                                        <MobileNavLink href="/#faq">FAQ</MobileNavLink>
                                                    </div>
                                                    <div className="mt-8 flex flex-col gap-4">
                                                        <Button
                                                            href="https://web-stage.cytoscape.org/"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            variant="outline"
                                                            color="primary"
                                                        >
                                                            Go to Cytoscape Web
                                                        </Button>
                                                        <Button
                                                            href="https://cytoscape.org/"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            color="primary"
                                                        >
                                                            Download Cytoscape
                                                        </Button>
                                                    </div>
                                                </Popover.Panel>
                                            </>
                                        )}
                                    </AnimatePresence>
                                </>
                            )}
                        </Popover>
                        <Button
                            href="https://web-stage.cytoscape.org/"
                            target="_blank"
                            rel="noreferrer"
                            variant="outline"
                            color="primary"
                            className="hidden lg:inline-flex"
                        >
                            Go to Cytoscape Web
                        </Button>
                        <Button
                            href="https://cytoscape.org/"
                            target="_blank"
                            rel="noreferrer"
                            color="primary"
                            className="hidden lg:inline-flex"
                        >
                            Download Cytoscape
                        </Button>
                    </div>
                </Container>
            </nav>
        </header>
    );
}
