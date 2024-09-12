// delay execution until sometime has passed

import { useEffect, useRef, useState } from "react"


type DebounceProps = {
    delay: number;
    str: string;
}

const useDebounce = ({ delay, str }: DebounceProps) => {


    const [text, setText] = useState(str);


    useEffect(() => {
        const tid = setTimeout(() => {
            setText(str)
        }, delay)

        return () => {
            clearTimeout(tid)
        }
    }, [str])


    return text;

}

export default useDebounce
