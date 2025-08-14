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

   // forms on submit
        const [result, setResult] = useState("");
        const onSubmit = async (event) => {
      
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "0fea1281-eb8f-410b-bab2-6572702adba7");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
          const data = await response.json();
      
          if (data.success) {
            setResult("Submitted Successfully, Will be in touch soon");
            event.target;
            setTimeout(() => window.open("/",'_self'), 2000);
          } else {
            console.log("Error please try again, if it consist contact support", data);
            setResult(data.message);
          }
        };

  return {
   smallscreen, 
   LScreen, SScreen,
   onSubmit, result
  };
};