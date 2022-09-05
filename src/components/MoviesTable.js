import React, { useState } from 'react'

function MoviesTable(props) {

    let { filteredContent, isLoaded, cPage } = props;


    const deleteMovie = (tobeDeletedMovieId) => {
        props.deleteMovie(tobeDeletedMovieId);
    }

    let sidx = (cPage - 1) * props.moviesCount;
    return (
        <div>
            {isLoaded == true ? <div>Loading...</div> :
                <table className="table-fixed w-full" >
                    <thead>
                        <tr>
                            <th className='px-2'>#</th>
                            <th className='px-2'>Title</th>
                            <th className='px-2'>Genre</th>
                            <th className='px-2'>Stock</th>
                            <th className='px-2'>Rate</th>
                            <th className='px-2'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredContent.map(function (movie, idx) {
                            return (
                                <tr key={movie._id}>
                                    <td className='text-center'>{idx + 1 + sidx}</td>
                                    <td className='text-center'>{movie.title}</td>
                                    <td className='text-center'>{movie.genre.name}</td>
                                    <td className='text-center'>{movie.numberInStock}</td>
                                    <td className='text-center'>{movie.dailyRentalRate}</td>
                                    <td> <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                                        onClick={() => { deleteMovie(movie._id) }}
                                    >DELETE</button> </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>}
        </div>
    )
}

export default MoviesTable