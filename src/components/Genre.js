import React, { useEffect, useState } from 'react'

function Genre(props) {

    const [isLoaded, setLoaded] = useState(true);
    const [content, setContent] = useState("");

    // i will run only after return statement is executed
    useEffect(() => {
        async function fetchData() {
            let response = await fetch('https://react-backend101.herokuapp.com/genres');
            response = await response.json();
            setLoaded(false);
            setContent(response.genres);

        }
        fetchData();
    }, [])

    const sendGenre = (e) => {
        props.setGlobalGenre(e.target.innerText);
    }

    const selectAll = () => {
        props.setGlobalGenre('');
    }

    return (
        <div>
            {isLoaded == true ? <div className='mx-6 w-40 text-center'>Loading...</div> :
                <div>
                    <div className='hover:bg-blue-300 hover:border-black px-2 py-2 mx-6 border-2 w-40 h-10 text-center cursor-pointer' onClick={selectAll}>All Genre</div>
                    {content.map(function (g, idx) {
                        return (<div key={g._id} className='hover:bg-blue-300 hover:border-black px-2 py-2 mx-6 border-2 w-40 h-10 text-center cursor-pointer' onClick={sendGenre} >{g.name}</div>)
                    })}

                </div>}
        </div>
    )
}

export default Genre