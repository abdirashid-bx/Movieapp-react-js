import React, { useEffect, useState } from 'react'
import { Getmovie, Getsearch } from '../route/Getmovie'

export default function MovieSearch() {
    const [data, setdata] = useState()
    const [datasearch, setdatasearch] = useState()
    const [truet, settrue] = useState()
    const [decide,setdecide]=useState(false)
    let [query,setvalue]=useState("");

    useEffect(() => {
        
        
        const handle = async () => {
            const { results } = await Getmovie()
           
            setdata(results)
            setdecide(false)
             
        }
       
        handle()
    }, [])

   
        useEffect(() => {
        const delayDebounce = setTimeout(async () => {
            if (query.trim()) {
                const { results } = await Getsearch(query)
                setdatasearch(results)
                console.log(results)
                setdecide(true)
            } else {
                setdecide(false)
            }
        }, 500)  

        return () => clearTimeout(delayDebounce)  
    }, [query])
   
 

    return (
        <div className="min-h-screen flex-1 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 text-white">
            {/* Search bar */}
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center p-8">
                <input
                    placeholder="Search movies..."
                    className="w-full sm:w-96 text-gray-900 bg-white/90 px-7 py-3 rounded-xl shadow-lg 
                               focus:ring-4 focus:ring-cyan-400 outline-none backdrop-blur-md"
                value={query}
                 onChange={(e) =>setvalue(e.target.value)}
                />
              
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold lg:ml-50 text-left mb-6 tracking-wide">🎬 Trending Movies</h1>

            {/* Movie Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {decide ?  (datasearch?.map((c, index) => (
                    <div
                        key={index}
                        className="bg-white/10 rounded-2xl shadow-lg overflow-hidden 
                                   backdrop-blur-md border border-white/10 
                                   hover:scale-105 transition-all duration-300"
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${c.backdrop_path}`}
                            alt={c.title}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold mb-2">{c.title || c.name}</h3>
                            <p className="text-sm text-gray-300">⭐ {c.vote_average} rating</p>
                            <p className="text-sm text-gray-300">📅 {c.release_date}</p>
                            <p className="text-sm text-gray-300 capitalize">
                                🌐 {c.original_language}
                            </p>
                        </div>
                    </div>
                ))) :  (data?.map((c, index) => (
                    <div
                        key={index}
                        className="bg-white/10 rounded-2xl shadow-lg overflow-hidden 
                                   backdrop-blur-md border border-white/10 
                                   hover:scale-105 transition-all duration-300"
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${c.backdrop_path}`}
                            alt={c.title}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold mb-2">{c.title || c.name}</h3>
                            <p className="text-sm text-gray-300">⭐ {c.vote_average} rating</p>
                            <p className="text-sm text-gray-300">📅 {c.release_date}</p>
                            <p className="text-sm text-gray-300 capitalize">
                                🌐 {c.original_language}
                            </p>
                        </div>
                    </div>
                ))) }
                
            </div>
        </div>
    )
}
