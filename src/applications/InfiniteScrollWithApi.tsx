
import { faker } from '@faker-js/faker'
import React, { useEffect, useState } from 'react';
import { throttle } from 'lodash';

const fetchData = (() => {
    let limit = 0;
    return () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const users = faker.helpers.multiple(() => ({
                    id: faker.string.uuid(),
                    name: faker.person.fullName(),
                    favouriteFood: faker.food.dish()
                }), { count: 10 });
                resolve({
                    limit: limit + 10,
                    users
                })
                limit += 10;
            }, 1000)
        })
    }
})();


const Window = ({ children = [], loadMoreFn = () => { }, }) => {

    const [scrollTop, setScrollTop] = useState(0)

    const containerHeight = 400;
    const rowHeight = 100;
    const rowWidth = 200;

    const buffered = 2;

    const startIndex = Math.max(Math.floor(scrollTop / rowHeight) - buffered, 0);

    const endIndex = Math.min(Math.ceil((scrollTop + containerHeight) / rowHeight) + buffered, children.length - 1)


    const onScroll = throttle((e: Event) => {
        const scrollTop = e.target.scrollTop;
        setScrollTop(scrollTop);
    }, 100)

    useEffect(() => {
        if (Math.abs(endIndex - children.length) <= 5) {
            loadMoreFn()
        }

    }, [scrollTop])

    const visibleChildren = children.slice(startIndex, endIndex).map((child, index) => {
        return React.cloneElement(child, {
            style: {
                position: 'absolute',
                top: startIndex * rowHeight + index * rowHeight,
                height: rowHeight,
                border: '1px solid black',
                width: rowWidth
            }
        })
    })

    return <div style={{
        position: 'relative',
        height: containerHeight,
        overflowY: 'scroll'
    }}
        onScroll={onScroll}
    >
        {visibleChildren}
        <div style={{
            position: 'absolute',
            top: (children.length - 1) * rowHeight,
            height: rowHeight,
            border: '1px solid black',
            width: rowWidth
        }}>loading ---</div>
    </div>
}

const InfiniteScrollWithApi = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    console.log({ users });

    const getData = async () => {
        if (loading) return;
        setLoading(true);
        const data = await fetchData();
        setLoading(false)
        setUsers(users => {
            return [...users, ...data.users]
        })
    }

    useEffect(() => {
        const getData = async () => {
            const data = await fetchData();
            setUsers(users => {
                return [...users, ...data.users]
            })
        }
        getData()
    }, []);
    console.log('rendered')

    return <div>
        {
            users.length > 0 && <Window loadMoreFn={getData}>
                {users.map((item) => {
                    return <div key={item.id} >
                        <span>{item.name}</span>
                    </div>
                })}


            </Window >
        }

    </div >
}

export default InfiniteScrollWithApi