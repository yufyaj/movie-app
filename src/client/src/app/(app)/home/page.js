'use client'

import Header from '@/app/(app)/Header'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Home = () => {
    const[movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchMovies = async () => {
            try{
                const response = await axios.get('api/getPopularMovies');
                console.log(response);
                setMovies(response.data.results);
            } catch (err) {
                console.log(err);
            }            
        }
        fetchMovies();
    }, [])

    return (
        <>
            <Header title="Home" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            {movies.map((movie) => (
                                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home