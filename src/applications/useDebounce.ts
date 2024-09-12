// delay execution until sometime has passed

import {
    useEffect,
    useState
} from "react"




function useDebounce<X>({ delay, val }: {
    delay: number;
    val: X;
}): X {


    const [value, setValue] = useState(val);


    useEffect(() => {
        const tid = setTimeout(() => {
            setValue(val)
        }, delay)

        return () => {
            clearTimeout(tid)
        }
    }, [val])


    return value;

}

export default useDebounce
