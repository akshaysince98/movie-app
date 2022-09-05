import React, { useState, useEffect } from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable'
import Pagination from './Pagination'

function Movies(props) {

    let [searchText, setSearchText] = useState("");
    let [moviesCount, setCount] = useState(4);
    const [isLoaded, setLoaded] = useState(true);
    const [content, setContent] = useState("");
    let { cPage, setcPage } = props

    // i will run only after return statement is executed
    useEffect(() => {
        async function fetchData() {
            let response = await fetch('https://react-backend101.herokuapp.com/movies');
            response = await response.json();
            setLoaded(false);
            setContent(response.movies);
        }
        fetchData();
    }, [])
    const deleteMovie = (tobeDeletedMovieId) => {
        let restOfTheMovies = content.slice();
        restOfTheMovies = restOfTheMovies.filter((movie) => movie._id != tobeDeletedMovieId)
        setContent(restOfTheMovies)
    }

    const setGlobalSearchText = (searchText) => {
        setSearchText(searchText);
        setcPage(1);
    }
    const setGlobalCount = (moviesCount) => {
        setCount(moviesCount);
    }

    let filteredContent;
    let totalpagesWaliMovies;
    if (content) {
        filteredContent = content.movies;
        if (props.searchText != "") {
            filteredContent = content.filter((movie) => {
                return movie.title.toLowerCase().includes(searchText.toLowerCase());
            });

        }
        if (props.gloGenre != "") {
            filteredContent = filteredContent.filter(
                function (movie) {

                    return movie.genre.name.trim() == props.gloGenre.trim();
                })
        }

        totalpagesWaliMovies = filteredContent;
        let sidx = (cPage - 1) * moviesCount;
        filteredContent = filteredContent.slice(sidx, sidx + moviesCount);
    }

    return (
        <>
            <div className='border-2'>
                <InputBox setGlobalSearchText={setGlobalSearchText} setGlobalCount={setGlobalCount} />
                <MoviesTable moviesCount={moviesCount} gloGenre={props.gloGenre} isLoaded={isLoaded} content={content} deleteMovie={deleteMovie} cPage={cPage} filteredContent={filteredContent}/>
                <Pagination moviesCount={moviesCount} content={content} setcPage={setcPage} cPage={cPage} totalpagesWaliMovies={totalpagesWaliMovies} />
            </div>
        </>
    )
}

export default Movies