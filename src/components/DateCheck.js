import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

const styles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
    fontSize: "13px",
    fontWeight: 400
  }
})

export default function({ onDateChange }) {
  const style = styles()

  const makeDate = () => {
    const dayArr = []
    let today = new Date().getDay()
    while(dayArr.length < 7) {
      today = today <= 6 ? today : 0
      dayArr.push(today++)
    }
    return dayArr
  }

  const handleClickDay = (day) => () => onDateChange(day)

  
  return (
    <div className={style.root}>
      {makeDate().map((day, idx) => <span onClick={handleClickDay(day)} size="small" key={idx}>星期{day}</span>)}
    </div>
  )
}