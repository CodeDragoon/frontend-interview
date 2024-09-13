import { useEffect, useState } from "react";

function useThrottle<T>({ value, delay }: { value: T, delay: number }): T {

    const [throttledValue, setThrottledValue] = useState<T>(value);
    const [busy, setBusy] = useState(0)



    useEffect(() => {
        if (!busy) {
            var tid = setTimeout(() => {
                setThrottledValue(value);
                setBusy(0)
            }, delay)
            setBusy(tid)
        }

    }, [value])

    useEffect(() => {
        return () => {
            if (busy) {
                clearTimeout(busy)
            }
        }
    }, [])


    return throttledValue

}


export default useThrottle;
