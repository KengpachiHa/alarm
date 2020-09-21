import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useHistory } from 'react-router-dom'


const style = makeStyles({
  nav: {
    //
  }
})
export default function Nav(onchange) {
  const styles = style()
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const handleNav = (e, value) => {
    setValue(value)
    value === 0 && history.push('/game')
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
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation> 
  );
}

