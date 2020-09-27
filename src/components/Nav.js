import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import SportsSoccer from '@material-ui/icons/SportsSoccer';
import AlarmAdd from '@material-ui/icons/AlarmAdd';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { useHistory } from 'react-router-dom'


const style = makeStyles({
  nav: {
    position: 'fixed',
    bottom: 0,
    width: "100%",
  }
})
export default function Nav(onchange) {
  const styles = style()
  const [value, setValue] = React.useState(1);
  const history = useHistory();

  const handleNav = (e, value) => {
    setValue(value)
    value === 0 && history.push('/games')
    value === 1 && history.push('/alarm')
    value === 2 && history.push('/my')
  }
  return (
    <BottomNavigation
      value={value}
      onChange={handleNav}
      showLabels
      className={styles.nav}
    >
      <BottomNavigationAction label="GameList" icon={<SportsSoccer />} />
      <BottomNavigationAction label="Alarm" icon={<AlarmAdd />} />
      <BottomNavigationAction label="Me" icon={<AccountCircle />} />
    </BottomNavigation> 
  );
}

