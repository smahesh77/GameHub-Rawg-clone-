import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

interface games{
    id:number,
    name: String
}

interface FetchGamesRE {
    count:number,
    results: games[]
}

const useGames = (name:string) => {
    console.log(name)
    const [games, setGames] = useState<games[]>([])
    const [error,setError] = useState('')

    useEffect(() => {
        const controller = new AbortController();
        apiClient.get<FetchGamesRE>('/games', {signal: controller.signal})
        .then((res) => {
            setGames(res.data.results)
        })
        .catch((error) => {setError(error.message)})
        return () => controller.abort()
    },[])

    return {games, error}
}

export default useGames