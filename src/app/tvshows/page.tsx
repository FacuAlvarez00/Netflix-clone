"use client"
import React from 'react'
import { UserAuth } from '../context/AppContext'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Carrousel from '../components/Carrousel'
import Toptencarrousel from '../components/Toptencarrousel'

const page = () => {

    const {topTenMovies, headerMovie, trendingMovies} = UserAuth()


  return (
    <div>
        <Navbar/>

        <Hero APIdata={headerMovie?.data?.results}/>
        <Carrousel carrouselTitle={"Popular on Netflix"} APIdata={trendingMovies?.data?.results}/>
        <Carrousel carrouselTitle={"Trending Now"} APIdata={trendingMovies?.data?.results}/>
        <Carrousel carrouselTitle={"Irreverent TV Comedies"} APIdata={trendingMovies?.data?.results}/>
        <Carrousel carrouselTitle={"Award-Winning Bingeworthy TV Dramas"} APIdata={trendingMovies?.data?.results}/>
        <Carrousel carrouselTitle={"Familiar TV Favorites"} APIdata={trendingMovies?.data?.results}/>
        <Carrousel carrouselTitle={"Award-Winning TV Shows"} APIdata={trendingMovies?.data?.results}/>
        <Carrousel carrouselTitle={"K-Dramas"} APIdata={trendingMovies?.data?.results}/>
        <Carrousel carrouselTitle={"Anime Series"} APIdata={trendingMovies?.data?.results}/>
        <Toptencarrousel carrouselTitle={"Top 10 TV Shows in Argentina Today"} APIdata={topTenMovies?.data?.results}/>
        <Carrousel carrouselTitle={"Critically Acclaimed Bingeworthy US TV Shows"} APIdata={trendingMovies?.data?.results}/>
        <Carrousel carrouselTitle={"Spanish-Language TV Shows"} APIdata={trendingMovies?.data?.results}/>
        <Carrousel carrouselTitle={"Adult Animation"} APIdata={trendingMovies?.data?.results}/>
        <Carrousel carrouselTitle={"Award-Winning Bingeworthy TV Shows"} APIdata={trendingMovies?.data?.results}/>
        <Carrousel carrouselTitle={"New Releases"} APIdata={trendingMovies?.data?.results}/>
        <Carrousel carrouselTitle={"TV Sci-Fi & Fantasy"} APIdata={trendingMovies?.data?.results}/>
        <Carrousel carrouselTitle={"TV Comedies"} APIdata={trendingMovies?.data?.results}/>


      
    </div>
  )
}

export default page
