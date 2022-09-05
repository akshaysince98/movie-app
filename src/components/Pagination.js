import React from 'react'

function Pagination(props) {
  let {totalpagesWaliMovies, content, moviesCount, cPage } = props;

  let pagesArr = [];
  if (totalpagesWaliMovies) {
    let noOfPages = Math.ceil(totalpagesWaliMovies.length / moviesCount);
    for (let i = 1; i <= noOfPages; i++) {
      pagesArr.push(i);
    }
  }

  const setCPage = (pageNo) => {
    props.setcPage(pageNo);
  }

  return (
    <>
      {/* <button className='bg-blue-500 py-1 px-3 text-white border-2 rounded'>1</button>
      <button className='hover:bg-blue-500 hover:text-white py-1 px-3 border-2 rounded'>2</button>
      <button className='hover:bg-blue-500 hover:text-white py-1 px-3 border-2 rounded'>3</button> */}

      {pagesArr.map(function (pageNo, i) {
        let css = pageNo == cPage ? 'hover:bg-blue-500 hover:text-white py-1 px-3 border-2 rounded bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white py-1 px-3 border-2 rounded';
        return (
          <button key={i} className={css} onClick={() => { setCPage(pageNo) }}>{pageNo}</button>
        )
      })}
    </>
  )
}

export default Pagination