import {useCallback, useRef} from "react";

export function useDebounce(func, delay) {
    const timer = useRef();
    return useCallback(() => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            func();
            clearTimeout(timer.current);
        }, delay)
    }, [func, delay]);
}