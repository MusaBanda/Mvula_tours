'use client'
import { useState, useEffect } from 'react';

export const hooks = () => {

  // classes for small and large screen
const [smallscreen, setsmallscreen] = useState(false); // safe default

useEffect(() => {
  const handleResize = () => {
    setsmallscreen(window.innerWidth < 768);
  };

  handleResize(); // run once on mount

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

// show or hide menu based on screen size
  const [LScreen, setShowForLargeScreen] = useState(true);
  const [SScreen, setShowForSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 1024;
      setShowForLargeScreen(isLarge);
      setShowForSmallScreen(!isLarge);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
   smallscreen, 
   LScreen, SScreen
  };
};