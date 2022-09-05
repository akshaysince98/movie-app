import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function InputBox(props) {

    let [SearchText, setSearchText] = useState("");
    let [NumberOfItems, setNumberOfItems] = useState(4);

    const handleText = (e) => {
        setSearchText(e.target.value);
        props.setGlobalSearchText(e.target.value);
    }

    const handleCount = (e) => {
        if(e.target.value==0){
            setNumberOfItems(e.target.value);
            return;
        }
        setNumberOfItems(e.target.value);
        props.setGlobalCount(e.target.value);
    }

    return (
        <>
            {/* I will work on new later */}
            <Link to='/new'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New</button>
            </Link>
            <input className='border rounded py-1 px-1 mx-2 font-bold shadow-md' type="text" value={SearchText} onChange={handleText} />
            <input className='border rounded py-1 px-1 mx-2 font-bold shadow-md' type="number" value={NumberOfItems} onChange={handleCount} />
        </>
    )
}

export default InputBox