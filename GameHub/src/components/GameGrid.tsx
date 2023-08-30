import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react'



interface games{
    id:number,
    name: String
}

interface FetchGamesRE {
    count:number,
    results: games[]
}

const GameGrid = () => {

    const [games, setGames] = useState<games[]>([])
    const [error,setError] = useState('')

    useEffect(() => {
        apiClient.get<FetchGamesRE>('/games')
        .then((res) => {
            setGames(res.data.results)
        })
        .catch((error) => {setError(error.message)})
    },[])

  return (
    <>
        {error && <Text>{error}</Text>}
        <ul>
            {games?.map(game => <li key={game.id}>{game.name}</li>)}
        </ul>
    </>
  )
}

export default GameGrid