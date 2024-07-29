//목록페이지
// 2.JSON파일일거오기
//npm install axios
// 목록주소
// https://yts.mx/api/v2/list_movies.json
// https://yts-proxy.now.sh/list_movies.json
// 상세보기주소
// https://yts.mx/api/v2/movie_details.json?movie_id=11
// https://yts-proxy.now.sh/movie_detail.json?movie_id=11
import './Home.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [LoadCounter, setLoadCounter] = useState(0)
  const [movies, setMovies] = useState([])

  //await 비동기 알아보기
  const fetchMovies = async ()=>{
    const respons = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
    console.log(respons.data.data.movies)
    setMovies(respons.data.data.movies)
    setIsLoading(false)
  }


  useEffect(
    ()=>{

      fetchMovies()

      console.log("useEffect 실행")//로딩카운터  
      if(isLoading)
      {
          const loadTimer = setInterval(() => { // function IncreaseCounter()
          let count = LoadCounter+1
          if(count > 10)
          {
            clearInterval(loadTimer) 
          }
          else
            setLoadCounter(count)
        }, 1000);
  
        //clearInterval 없으면 숫자가 이상하게 나옴
        return ()=>{ clearInterval(loadTimer) }
      }

    },[LoadCounter]
  )

  function displayMovies() {
    console.log(movies)
    return(
      <>
        <h1>Movie List</h1>
        <ul className='movies'>
          {
            movies.map(itme => {
              return(
                  <Movie 
                    key={itme.id}
                    id = {itme.id} 
                    year={itme.year}
                    title={itme.title}
                    summary={itme.summary}
                    poster={itme.medium_cover_image}
                    genres={itme.genres}
                  />
                )
            })
          }
        </ul>
      </>
    )
  }

  return (
    <div className="Home">
      {isLoading ? ` Loading... ${LoadCounter}` : displayMovies()}
    </div>
  );
}
