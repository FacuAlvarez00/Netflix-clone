'use client'
import axios from 'axios'
import { requests } from "../app/utils/requests"
import { useEffect, useState } from 'react'
import Carrousel from './components/Carrousel'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

export default function Home() {
  const [headerMovie, setHeaderMovie] = useState<any>([])
  const [trendingMovies, setTrendingMovies] = useState<any>()



 useEffect(() => {
  axios.get(requests.requestPlaying).then((res) => {
    setHeaderMovie(res)
  })
  axios.get(requests.requestPopular).then((res) => {
    setTrendingMovies(res)
  })
 }, [])


  return (
    <main className="">
      <Navbar/>
      <Hero APIdata={headerMovie?.data?.results}/>

      <section style={{paddingLeft: "60px", paddingRight: "60px",}} className='trending'>
        <Carrousel APIdata={trendingMovies?.data?.results} carrouselTitle={"Trending"}/>
      </section>
      
      <section style={{paddingLeft: "60px", paddingRight: "60px",}} className='trending'>
        <Carrousel APIdata={trendingMovies?.data?.results} carrouselTitle={"Trending"}/>
      </section>

    </main>
  )
}
