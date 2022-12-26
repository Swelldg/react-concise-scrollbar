import {useCallback, useRef} from "react";

export function useThrottle(func,delay){
    const timer = useRef();
    return useCallback(() => {
        if(!timer.current){
            func();
            timer.current = setTimeout(() => {
                clearTimeout(timer.current);
                timer.current = undefined;
                func();
            },delay)
        }
    },[func,delay])
}