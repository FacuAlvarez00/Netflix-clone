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
import {UserAuth} from "../context/AppContext"






const movies = () => {
    


    const {topTenMovies, headerMovie, trendingMovies} = UserAuth()




   
    return (
        <div>
            <Navbar/>

            <Hero APIdata={headerMovie?.data?.results}/>
                <Carrousel carrouselTitle={"New on Netflix"} APIdata={trendingMovies?.data?.results}/>
                <Toptencarrousel carrouselTitle={"Top 10 Movies in Argentina Today"} APIdata={topTenMovies?.data?.results}/>
                <Carrousel carrouselTitle={"Coming Net Week"} APIdata={trendingMovies?.data?.results}/>
                <Carrousel carrouselTitle={"Worth the Wait"} APIdata={trendingMovies?.data?.results}/>
                <Toptencarrousel carrouselTitle={"Top 10 TV Shows in Argentina Today"} APIdata={topTenMovies?.data?.results}/>
                <Carrousel carrouselTitle={"Coming This Week"} APIdata={trendingMovies?.data?.results}/>
        </div>
    )
}

export default movies
