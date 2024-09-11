import { motion } from 'framer-motion'
import { FpsView as Fps } from 'react-fps'
import { throttle } from 'lodash'
import React, { useState } from 'react';

const VirtualisedList = () => {

    const items = new Array(1500).fill({}).map((_, index) => ({ id: index }));
    return <div >
        <Fps />
        <div style={{
           marginTop: 200
        }} >

            <Window>
                {
                    items.map(it => <motion.div style={{

                    }}
                        key={it.id}
                    >{it.id}</motion.div>)
                }
            </Window>
        </div>
    </div>
}


const Window = ({ children = [] }) => {

    console.log({ length: children.length })
    const rowHeight = 100;
    const containerHeight = 400
    const buffered = 5;

    const [scrollPosition, setScrollPosition] = useState(0)

    const start = Math.floor(scrollPosition / rowHeight);
    const end = Math.min(Math.ceil((scrollPosition + containerHeight) / rowHeight - 1) + buffered, children.length);
    const visibleChildren = children.slice(start, end + 1).map((child, index) => {
        return React.cloneElement(child, {
            style: {
                position: 'absolute',
                top: (start + index) * rowHeight,
                height: rowHeight,
                border: '1px solid black',
                width: 300,
            }
        })
    })


    const handleScroll = throttle(function (e) {
        setScrollPosition(e.target.scrollTop)
    }, 500)


    return < div style={{
        position: 'relative',
        overflowY: 'scroll',
        height: 400,
        width: 300,
        border: '1px solid blue'
    }}
        onScroll={handleScroll}
    >


        {visibleChildren}

    </div >
}

export default VirtualisedList