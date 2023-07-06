'use client'
import Carrousel from './components/Carrousel'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Toptencarrousel from './components/Toptencarrousel'
import { AuthContextProvider, UserAuth } from './context/AppContext'

export default function Home() {

  const {topTenMovies, headerMovie, trendingMovies} = UserAuth()

  console.log(trendingMovies)

  return (


      <main className="">
      <Navbar/>
      <Hero APIdata={headerMovie?.data?.results}/>

      <section style={{paddingLeft: "60px", paddingRight: "60px",}} className='trending'>
        <Carrousel APIdata={trendingMovies?.data?.results} carrouselTitle={"My List"}/>
      </section>
      
      <section style={{paddingLeft: "60px", paddingRight: "60px",}} className='trending'>
        <Carrousel APIdata={trendingMovies?.data?.results} carrouselTitle={"New Releases"}/>
      </section>

      <Toptencarrousel carrouselTitle={"Top 10 Movies in Argentina Today"} APIdata={topTenMovies?.data?.results}/>

      <section style={{paddingLeft: "60px", paddingRight: "60px",}} className='trending'>
        <Carrousel APIdata={trendingMovies?.data?.results} carrouselTitle={"Critically Acclaimed Films"}/>
      </section>

      <section style={{paddingLeft: "60px", paddingRight: "60px",}} className='trending'>
        <Carrousel APIdata={trendingMovies?.data?.results} carrouselTitle={"Trending Now"}/>
      </section>

      <section style={{paddingLeft: "60px", paddingRight: "60px",}} className='trending'>
        <Carrousel APIdata={trendingMovies?.data?.results} carrouselTitle={"Anime Series"}/>
      </section>

      <section style={{paddingLeft: "60px", paddingRight: "60px",}} className='trending'>
        <Carrousel APIdata={trendingMovies?.data?.results} carrouselTitle={"Critically Acclaimed Action & Adventure Movies"}/>
      </section>

      <section style={{paddingLeft: "60px", paddingRight: "60px",}} className='trending'>
        <Carrousel APIdata={trendingMovies?.data?.results} carrouselTitle={"Critically Acclaimed TV Shows"}/>
      </section>

      <section style={{paddingLeft: "60px", paddingRight: "60px",}} className='trending'>
        <Carrousel APIdata={trendingMovies?.data?.results} carrouselTitle={"Watch in One Night"}/>
      </section>

      <section style={{paddingLeft: "60px", paddingRight: "60px",}} className='trending'>
        <Carrousel APIdata={trendingMovies?.data?.results} carrouselTitle={"Suspenseful Movies"}/>
      </section>

      <section style={{paddingLeft: "60px", paddingRight: "60px",}} className='trending'>
        <Carrousel APIdata={trendingMovies?.data?.results} carrouselTitle={"Award-Winning Films"}/>
      </section>

      <section style={{paddingLeft: "60px", paddingRight: "60px",}} className='trending'>
        <Carrousel APIdata={trendingMovies?.data?.results} carrouselTitle={"Watch in One Weekend"}/>
      </section>

      

    </main>


    
  )
}
