import './Detail.css'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Detail() {
  const [info, setInfo] = useState(null)

  const location = useLocation()
  const navigate = useNavigate()

  const queryParams = new URLSearchParams(location.search)
  const id = queryParams.get("id")

  const fetchMovies = async ()=>{
    try{
      const respons = await 
      axios.get('https://yts.mx/api/v2/movie_details.json?movie_id='+id)
      console.log(respons.data.data.movie)
      setInfo(respons.data.data.movie)
    } catch(err)
    {
      setInfo(err)
    }

  }


  useEffect(
    ()=>{
      fetchMovies()

    },[]
  )

  function detail(params) {
    return(
      <div className='detail'>
        <img src={info.medium_cover_image} alt={info.title} />
        <h2> {info.title} ( {info.year} ) </h2>
        <p> {info.description_full}  </p>
        <ul>
          {info.genres.map((v,i)=>{
            return(<li key={i} > {v} </li>)
          })}
          
        </ul>
      </div>
    )
  }

  return(
    <>
      {info ? detail() : "Loding..."}
    </>
  )
}
