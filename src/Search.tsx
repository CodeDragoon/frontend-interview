import { useCallback, useEffect, useState } from "react";
import useDebounceHook from "./useDebounceHook";
import { useQuery } from '@tanstack/react-query';
import React from "react";

const url = "http://universities.hipolabs.com/search?country="

const Search = () => {


    const [text, setText] = useState('');
    const [results, setResults] = useState([]);

    const debouncedText = useDebounceHook({ text });
    const [school, setSchool] = useState({})

    const handleChange = useCallback((value) => {
        setText(value)
        setSchool(null)
    },[])

    const { data: queryData } = useQuery({
        queryKey: [debouncedText],
        queryFn: async () => {
            if (!debouncedText) {
                return []
            }
            const res = await fetch(url + debouncedText)
            return await res.json()
        },
        staleTime: 30000
    });

    const handleSchoolSelect = () => {

    }







    return <div>

        <div>

            <input type="text" onChange={(e) => {
                handleChange(e.target.value)
            }}

                onFocus={() => {
                    setSchool(null)
                }}
            />
            <div style={{
                border: '1px solid black'
            }}>
                {!school && queryData?.map((item, index) => {
                    return <div style={{
                        border: '1px solid black',
                        padding: 10
                    }}

                        key={index}
                    >
                        <UniName name={item.name} handleChange={handleChange} />
                    </div>
                })}
            </div>
            {
                school ? <div style={{
                    border: '1px solid black'
                }}>
                    --

                </div> : null
            }
        </div>




    </div>
}

export default Search;


const UniName = React.memo(({ name, handleChange }) => {


    return <div>

        {name}
    </div>
})