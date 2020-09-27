import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AlarmingCard from '../components/AlarmingCard'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const getAlarming = () => {
  return [{
    team: ['巴塞罗那', '尤文图斯'],
    soccer: '1:0',
    time: '48:21',
    oddses: [
      '亚盘 主队 领先 2球 且 让球水位 > 2.1', 
      '欧盘 客队 水位 > 2.1',
      '亚盘 主队 领先 2球 且 让球水位 > 2.1'
    ]
  }, {
    team: ['巴塞罗那', '尤文图斯'],
    soccer: '1:0',
    time: '48:21',
    oddses: [
      '亚盘 主队 领先 2球 且 让球水位 > 2.1', 
      '欧盘 客队 水位 > 2.1',
      '亚盘 主队 领先 2球 且 让球水位 > 2.1',
      '亚盘 主队 领先 2球 且 让球水位 > 2.1', 
      '欧盘 客队 水位 > 2.1',
      '亚盘 主队 领先 2球 且 让球水位 > 2.1'
    ]
  }, {
    team: ['巴塞罗那', '尤文图斯'],
    soccer: '1:0',
    time: '48:21',
    oddses: [
      '亚盘 主队 领先 2球 且 让球水位 > 2.1', 
      '欧盘 客队 水位 > 2.1',
      '亚盘 主队 领先 2球 且 让球水位 > 2.1'
    ]
  }]
}

export default function Alarm() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const games = null

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
          <Tab label="已结束" {...a11yProps(0)} />
          <Tab label="进行中" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={1}>
        已结束
      </TabPanel>
      <TabPanel value={value} index={0}>
        {getAlarming().map((game, idx) => {
          return <AlarmingCard key={idx} game={game}/>
        })}
      </TabPanel>
    </div>
  );
}
