"use client";

import React from 'react'
import styles from "./new&popular.module.css"
import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import { useState, useEffect } from 'react'
import { requests } from "../utils/requests"
import axios from 'axios'
import Carrousel from '@/app/components/Carrousel'
import Toptencarrousel from '@/app/components/Toptencarrousel'





const tvshows = () => {
    const [headerMovie, setHeaderMovie] = useState<any>([])
    const [trendingMovies, setTrendingMovies] = useState<any>()
    const [topTenMovies, setTopTenMovies] = useState<any>()

    useEffect(() => {
        axios.get(requests.requestPlaying).then((res) => {
        setHeaderMovie(res)
        })
        axios.get(requests.requestPopular).then((res) => {
        setTrendingMovies(res)
        })
        axios.get(requests.requestTopMovies).then((res) => {
        setTopTenMovies(res)
        })
    }, [])


    return (
        <main>
            <Navbar/>

            <Hero APIdata={headerMovie?.data?.results}/>
            
                <Toptencarrousel carrouselTitle={"Top 10 Movies in Argentina Today"} APIdata={topTenMovies?.data?.results}/>

                <Carrousel carrouselTitle={"High Brow Sci-Fi"} APIdata={trendingMovies?.data?.results}/>

                <Carrousel carrouselTitle={"Trending Movies"} APIdata={trendingMovies?.data?.results}/>
      
                <Carrousel carrouselTitle={"Oscar-Winning Films"} APIdata={trendingMovies?.data?.results}/>
        
                <Carrousel carrouselTitle={"My List"} APIdata={trendingMovies?.data?.results}/>
       
                <Carrousel carrouselTitle={"Thriller Movies"} APIdata={trendingMovies?.data?.results}/>
    
                <Carrousel carrouselTitle={"Award-Winning Films"} APIdata={trendingMovies?.data?.results}/>

                <Carrousel carrouselTitle={"Action Sci-Fi"} APIdata={trendingMovies?.data?.results}/>

                <Carrousel carrouselTitle={"New Releases"} APIdata={trendingMovies?.data?.results}/>

                <Carrousel carrouselTitle={"Comedy Movies"} APIdata={trendingMovies?.data?.results}/>

                <Carrousel carrouselTitle={"Movies Based in Real Life"} APIdata={trendingMovies?.data?.results}/>

                <Carrousel carrouselTitle={"Dark Psychological Movies"} APIdata={trendingMovies?.data?.results}/>

                <Carrousel carrouselTitle={"Only on Netflix"} APIdata={trendingMovies?.data?.results}/>

                <Carrousel carrouselTitle={"Critically Acclaimed Films"} APIdata={trendingMovies?.data?.results}/>

                <Carrousel carrouselTitle={"Thriller Movies based on Books"} APIdata={trendingMovies?.data?.results}/>

                <Carrousel carrouselTitle={"Hollywood Movies"} APIdata={trendingMovies?.data?.results}/>

                <Carrousel carrouselTitle={"Celebrate the Oscars"} APIdata={trendingMovies?.data?.results}/>

        </main>
    )
}

export default tvshows
