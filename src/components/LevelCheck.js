import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilterList from '@material-ui/icons/FilterList';
import Slide from '@material-ui/core/Slide';
// import Divider from '@material-ui/core/Divider';

// import Drawer from './Drawer';
import { Button } from '@material-ui/core';

const styles = makeStyles({
  root: {
    margin: '0 10px 0 0'
  },
  mask: {
    width: "80%",
    background: "pink",
    position: "absolute",
    // top: 0,
    right: 0
  }
})


export default function({ onLevelChange }) {
  const style = styles()
  const levelList = [['faafas', 'asfb', 'nne4'], ['2vggggg34', 'afas',], ['asfb', 'nne4', '2dddd34', 'asfb', 'nne4', '234','asfb', 'nne4', '234','asfb', 'nne4', '234','asfb', 'nnasfse4', '23sfafd4','asfb', 'nne4', '234']]
  const [slideOpen, setSlideOpen] = useState(false)

  const handleClickLevel = (level) => {
    console.log(`click the ${level} in <LevelCheck>`)
    setSlideOpen(false)
    onLevelChange(level)
  }

  return (
      <div className={style.root}>
        <FilterList onClick={() => setSlideOpen(!slideOpen)} />
        <Slide direction="left" in={slideOpen} mountOnEnter unmountOnExit>
          <div className={style.mask}>
            {levelList.map(levels => levels.map((level, idx) => {
              return (<Button onClick={() => handleClickLevel(level)} key={idx}>{level}</Button>)
            }))}
          </div>
        </Slide>
      </div>

  )
} 