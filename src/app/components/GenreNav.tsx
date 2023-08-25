import React from 'react'
import {MdArrowDropDown} from "react-icons/md"
import {FiGrid} from "react-icons/fi"
import {IoMdList} from "react-icons/io"


type props = {
    genre: string;

}

const GenreNav: React.FC<props> = ({genre}) => {

  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>

        <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
            <h2 style={{color: "white", }}>{genre}</h2>
            <div style={{display: "flex", gap: "5px", border: "1px solid grey", padding: "5px"}}>
                <span style={{color: "white", }}>Genres</span>
                <MdArrowDropDown style={{color: "white", }}/>
            </div>
        </div>

        <div style={{display: "flex", alignItems: "center", gap: "20px", color: "white"}}>

            <div style={{display: "flex", gap: "5px", border: "1px solid grey", paddingTop: "6px", paddingBottom: "6px", paddingLeft: "11px", paddingRight: "11px" }}>

            <IoMdList/>

            </div>

            <div style={{display: "flex", gap: "5px", border: "1px solid grey", paddingTop: "6px", paddingBottom: "6px", paddingLeft: "11px", paddingRight: "11px" }}>
              
                <FiGrid/>
            </div>
        </div>

    </div>
  )
}

export default GenreNav
