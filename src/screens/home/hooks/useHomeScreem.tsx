import { useEffect, useState } from "react";

export const useMediaQuery = (maxWidth: number) => {
    const [isScreenSmaller, setIsScreenSmaller] = useState(window.innerWidth < maxWidth);

    useEffect(() => {
    const handleResize = () => {
        setIsScreenSmaller(window.innerWidth < maxWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
    }, [maxWidth]);

    return isScreenSmaller;
};