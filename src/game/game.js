import React, { useState } from 'react'
import Divider from '@material-ui/core/Divider';

import GameTypeCheck from '../components/GameTypeCheck'
import LevelCheck from '../components/LevelCheck'
import DateCheck from '../components/DateCheck'
// import DateRange from '../components/DateRange'

import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  typeBox: {
    display: "flex",
    "align-items": "center",
  },
})


export default function () {
  const style = styles()

  const initGameState = {
    type: '足球',
    level: 0,
    date: '今天'
  }

  const [gameState, setGameState] = useState(initGameState)

  const handleTypeChange = (newType) => {
    if(gameState.type !== newType) {
      setGameState({...gameState, type: newType})
    }
  }

  const handleLevelChange = (newLevel) => {
    if(gameState.level !== newLevel) {
      console.log(`level changed in <game>`)
      setGameState({...gameState, level: newLevel})
    }
  }

  const handleDateChange = (newDay) => {
    if(gameState.date !== newDay) {
      console.log(`date changed in <game>`)
      setGameState({...gameState, date: newDay})
    }
  }
  
  return (
    <div>
      <div className={style.typeBox}>
        <GameTypeCheck onTypeChang={handleTypeChange}/>
        <LevelCheck    onLevelChange={handleLevelChange}/>
      </div>
      <Divider />
      <DateCheck onDateChange={handleDateChange}/>
      <Divider />
      <div className={style.typeBox}>
        {/* <DateCheck /> */}
        {/* <DateRange /> */}
      </div>
      <h1>gameState, 用来发特么的请求 : `</h1>
      <ul>
        <li>type：{gameState.type}</li>
        <li>level：{gameState.level}</li>
        <li>date：{gameState.date}</li>
      </ul>
    </div>
  )
}