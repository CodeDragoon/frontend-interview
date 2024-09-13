import { useEffect, useRef } from "react";

function usePrevious<T>(value: T): T {

    console.log(1)
    const previousValue = useRef<T>(value);
    useEffect(() => {
        console.log(2)
        previousValue.current = value
    }, [value]);

    console.log(3)

    return previousValue.current
}

export default usePrevious;



/**
 * stores new value, but returns previous value
 */