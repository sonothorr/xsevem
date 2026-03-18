'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PreloaderContextType {
  isLoaded: boolean;
  setLoaded: (loaded: boolean) => void;
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(undefined);

export function PreloaderProvider({ children }: { children: ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const setLoaded = (loaded: boolean) => {
    setIsLoaded(loaded);
  };

  return (
    <PreloaderContext.Provider value={{ isLoaded, setLoaded }}>
      {children}
    </PreloaderContext.Provider>
  );
}

export function usePreloader() {
  const context = useContext(PreloaderContext);
  if (context === undefined) {
    throw new Error('usePreloader must be used within a PreloaderProvider');
  }
  return context;
}
