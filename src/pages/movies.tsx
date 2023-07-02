import React from 'react'
import '../../src/app/globals.css'
import styles from './movies.module.css'
import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import { useState, useEffect } from 'react'
import { requests } from "../app/utils/requests"
import axios from 'axios'
import Carrousel from '@/app/components/Carrousel'





const movies = () => {
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
        <main>
            <Navbar/>

            <Hero APIdata={headerMovie?.data?.results}/>

            <section>
                <Carrousel carrouselTitle={"Netflix originals"} APIdata={trendingMovies?.data?.results}/>
            </section>

            <section>
                <Carrousel carrouselTitle={"Trending Movies"} APIdata={trendingMovies?.data?.results}/>
            </section>

            <section>
                <Carrousel carrouselTitle={"Top Rated Movies"} APIdata={trendingMovies?.data?.results}/>
            </section>

            <section>
                <Carrousel carrouselTitle={"Action Movies"} APIdata={trendingMovies?.data?.results}/>
            </section>

        </main>
    )
}

export default movies
