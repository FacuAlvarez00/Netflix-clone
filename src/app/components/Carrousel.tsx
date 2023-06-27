import React from 'react'

type props = {
  APIdata: any;
}


const Carrousel: React.FC<props> = ({ APIdata }) => {

  console.log(APIdata)
  return (
    <>
      <h1 style={{ color: "white", }} className="">Trending</h1>
      <div style={{ display: "flex", }} className='flex'>

        {APIdata?.map((item: any) =>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginRight: "8px", }} key={item?.title}>
            {/* <h1>{item?.title}</h1> */}
            <img style={{ width: "300px", height: "200px" }} src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} />
          </div>
        )}


      </div>
    </>

  )
}

export default Carrousel
