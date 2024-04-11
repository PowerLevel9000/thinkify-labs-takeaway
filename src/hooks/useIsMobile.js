import { useEffect, useState } from "react";

// Custom hook to check if the screen size is mobile
// Usage:
//   check if the screen size is mobile or not and return a boolean value
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        }
        // on initial load and resizing window check if the screen size is mobile 
        window.addEventListener('resize', handleResize);
        handleResize();
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
}

export default useIsMobile;