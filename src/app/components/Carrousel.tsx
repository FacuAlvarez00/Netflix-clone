import React from 'react'

type props = {
  APIdata: any;
  carrouselTitle: string;
}


const Carrousel: React.FC<props> = ({ APIdata, carrouselTitle }) => {

  const sortedData = APIdata?.sort(() => Math.random() - 0.5);

  return (
    <>
      <h1 style={{ color: "white", }} className="">{carrouselTitle}</h1>
      <div style={{ display: "flex", }} className='flex'>

        {sortedData?.map((item: any) =>
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
