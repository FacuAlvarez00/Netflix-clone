import React from 'react'

type props = {
    APIdata: any;
    carrouselTitle: string;
}




const Toptencarrousel: React.FC<props> = ({ APIdata, carrouselTitle }) => {

    const sortedData = APIdata?.sort(() => Math.random() - 0.5);


    return (
        <>
            <h1 style={{ color: "white", }} className="">{carrouselTitle}</h1>
            <div style={{ display: "flex", }} className='flex'>

                {sortedData?.map((item: any) =>
                    <div style={{ display: "flex", gap: "20px", marginRight: "8px", }} key={item?.title}>
                        <div>
                            <span style={{fontSize: "100px", color: "white"}}>1</span>

                        </div>

                        <div>
                        <img style={{ width: "300px", height: "200px" }} src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} />
                        </div>
                   
                    </div>
                )}


            </div>

        </>
    )
}

export default Toptencarrousel
