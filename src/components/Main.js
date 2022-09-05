import React, { useState } from 'react'
import Genre from './Genre'
import Movies from './Movies'


function Main() {
    let [gloGenre, setGloGenre] = useState("")
    const [cPage, setcPage] = useState(1);

    const setGlobalGenre = (genre) => {
        setGloGenre(genre);
        setcPage(1);
    }

    return (
        <>
            <div className='flex'>
                <Genre setGlobalGenre={setGlobalGenre} />
                <Movies gloGenre={gloGenre} cPage={cPage} setcPage={setcPage} />

            </div>
        </>
    )
}

export default Main