import { useState } from 'react';

const Contact = ({ iName, iAge }: { iName: string, iAge: number }) => {
    const [name, setName] = useState(iName);
    const [age, setAge] = useState(iAge)
    const [saved, setSaved] = useState(false)
    const [termsChecked, setTermsChecked] = useState(false);


    const handleClick = () => {
        setSaved(true)
    }


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
        <button onClick={handleClick} disabled={!termsChecked} >Submit</button>

        {saved && <div>
            Your details are saved
        </div>}

        <div>
            <input type='checkbox' onChange={(e) => {
                setTermsChecked(e.target.value)
            }} />
            <label>Terms & Agreement</label>

        </div>





    </div>
}

export default Contact