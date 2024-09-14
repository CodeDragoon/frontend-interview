import React, { useState } from 'react';

const Contact = ({ iName, iAge }) => {
    const [name, setName] = useState(iName);
    const [age, setAge] = useState(iAge)


    return <div>
        <input placeholder='name' value={name} onChange={(e) => {
            setName(e.target.value);
        }} />
        <input placeholder='age' value={age} onChange={(e) => {
            setAge(e.target.value);
        }} />

        <div>
            <div>Person Details</div>
            <div data-testid="person-details">{name + ' ' + age}</div>
        </div>

        <div></div>



        <button type='submit' >Submit</button>
    </div>
}

export default Contact