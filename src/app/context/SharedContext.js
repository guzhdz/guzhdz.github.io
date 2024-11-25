'use client'

import { createContext, useState, useContext } from "react";

export const SharedContext = createContext();

export const SharedProvider = ({ children }) => {
    const [particlesInit, setParticlesInit] = useState(false);

    return (
        <SharedContext.Provider value={{
            particlesInit,
            setParticlesInit
        }}>
            {children}
        </SharedContext.Provider>
    );
};

export const useShared = () => useContext(SharedContext);