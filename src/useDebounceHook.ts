import { useEffect, useState } from "react"


const delay = 250;
const useDebounceHook = ({ text = '' }) => {

    const [debouncedText, setDebouncedText] = useState(text)


    useEffect(() => {

        const tid = setTimeout(() => {
            setDebouncedText(text)
        }, delay)

        return () => {
            if (tid) {
                clearTimeout(tid)
            }
        }
    }, [text])


    return debouncedText;

}

export default useDebounceHook;