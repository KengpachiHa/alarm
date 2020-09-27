import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: '15px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  CardActions: {
    display: "flex",
    justifyContent: 'center'
  }
});

export default function AlarmingCard({ game }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const history = useHistory();

  const handleAddOdds = (id = 0) => {
    history.push('/addOdds')
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <div>
          <Typography variant="h5" component="h5">
            {game.team[0]} - {game.team[1]}
          </Typography>
        </div>
        
        <Typography className={classes.pos} color="textSecondary">
          {game.soccer}
        </Typography>
        <Typography variant="body2" component="p">
          {game.time}
        </Typography>
        {game.oddses.map((odds, idx) => {
          return <Typography onClick={() => handleAddOdds(game.id)} key={idx}>{odds}</Typography>
        })}
      </CardContent>
      <CardActions className={classes.CardActions}>
        <Button onClick={() => handleAddOdds(game.id)} variant="contained" color="secondary" size="small">+</Button>
      </CardActions>
    </Card>
  );
}
