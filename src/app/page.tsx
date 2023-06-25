'use client'
import axios from 'axios'
import { key } from "../app/utils/requests"
import { useEffect, useState } from 'react'


export default function Home() {
  const [headerMovie, setHeaderMovie] = useState<any>([])



 useEffect(() => {
  axios.get(key).then((res) => {
    setHeaderMovie(res)
  })
 }, [])

 console.log(headerMovie.data)



  return (
    <main className="">
      <h1>MAIN PAGE</h1>
     
    </main>
  )
}
