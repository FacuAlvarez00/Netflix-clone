
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import netflixLogo from '../public/netflixLogo.png'


const Navbar = () => {
  return (
    <div>
        <ul className='navbar'>

            <Image style={{width: "115px", height: "60px", }} src={netflixLogo} alt="Netflix logo"/>

            <Link href={"/"}>
                <li>Home</li>
            </Link>

            <Link href={"/tvshows"}>
                <li>TV Shows</li>
            </Link>

            <Link href={"/movies"}>
                <li>Movies</li>
            </Link>

            <Link href={"/new&popular"}> 
                <li>New & Popular</li>
            </Link> 

            {/* <Link href={"/myList"}> */}
                <li>My List</li>
           {/*  </Link> */}
            
         
        </ul>
      
    </div>
  )
}

export default Navbar
