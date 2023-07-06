'use client'
import { useContext, createContext, ReactNode, useState, useEffect } from "react";
import axios from "axios";
import { requests } from "../utils/requests";



interface IAuthContext {
    topTenMovies: any,
    trendingMovies: any,
    headerMovie: any,
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

interface IAuthContextProviderProps {
  children: ReactNode;
}


export const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
    const [headerMovie, setHeaderMovie] = useState<any>([])
    const [trendingMovies, setTrendingMovies] = useState<any>()
    const [topTenMovies, setTopTenMovies] = useState<any>()

    useEffect(() => {
        axios.get(requests.requestPlaying).then((res) => {
          setHeaderMovie(res)
        })
        axios.get(requests.requestPopular).then((res) => {
          setTrendingMovies(res)
        })
        axios.get(requests.requestTopMovies).then((res) => {
          setTopTenMovies(res)
      })
       }, [])

     


  
    return <AuthContext.Provider value={{topTenMovies, trendingMovies, headerMovie}}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};