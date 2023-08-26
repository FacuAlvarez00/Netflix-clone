
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import netflixLogo from '../public/netflixLogo.png'
import { AiOutlineSearch } from "react-icons/ai"
import { BiBell } from "react-icons/bi"
import { MdArrowDropDown } from "react-icons/md"
import avatar from '../public/61547625e01d8daf941aae3ffb37f653.png'



const Navbar = () => {
    return (
        <nav>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                <ul className='navbar navbar_genre'>

                    <Image style={{ width: "115px", height: "60px", }} src={netflixLogo} alt="Netflix logo" />

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
{/* 
                    <Link href={"/myList"}>
                        <li>My List</li>
                    </Link>
 */}

                </ul>

                <div className='navbar navbar_misc'>
                    <AiOutlineSearch style={{ width: "24px", height: "24px", cursor: "pointer" }} />
                    <span style={{cursor: "pointer"}}>Kids</span>
                    <BiBell style={{ width: "24px", height: "24px", cursor: "pointer" }} />
                    <div>
                        <Image style={{ width: "32px", height: "32px", borderRadius: "4px", cursor: "pointer" }} src={avatar} alt="Netflix avatar" />
                        <MdArrowDropDown style={{ width: "25px", height: "25px", cursor: "pointer" }}/>
                    </div>
                </div>

            </div>


        </nav>
    )
}

export default Navbar
