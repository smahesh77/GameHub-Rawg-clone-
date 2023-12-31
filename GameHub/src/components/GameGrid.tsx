import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'





const GameGrid = () => {

    const {games, error} = useGames("test successful")

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