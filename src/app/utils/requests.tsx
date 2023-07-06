/* export const key = "https://api.themoviedb.org/3/movie/550?api_key=24b61994f2e3c040697e7253679b905a" */


export const key = "24b61994f2e3c040697e7253679b905a"

export const requests = {
    requestPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    requestLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US&page=1`,
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1 `,
    requestTopMovies: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=en-US`


    
}