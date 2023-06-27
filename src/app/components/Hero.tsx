import React from 'react'

type props = {
    APIdata: any;
}

const Hero:React.FC<props> = ({APIdata}) => {


  const movie = APIdata && APIdata.length > 0
  ? APIdata[Math.floor(Math.random() * APIdata.length)]
  : null;


  return (
    <div>

      <div className='movie_image'>
        <img style={{width: "100%", height: "90vh"}} src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}/> 
      </div>
      
      <div style={{paddingLeft: "60px", paddingRight: "60px", color: "white"}} className='movie_info'>
        <h2>{movie?.title}</h2>
        <p>{movie?.overview}</p>
        <button>Play</button>
        <button>More info</button>
      </div>

    </div>
  )
}

export default Hero
