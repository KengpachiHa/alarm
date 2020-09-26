import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "nowrap",
    overflow: 'scroll',
    fontWeight: 200,
  },
  button: {
    fontWeight: 300,
    color: "black"
  }
})





export default function({onTypeChang}) {
  const style = styles()
  const typeList = ['足球', '篮球', '羽毛球', '橄榄球', '羽毛球', '乒乓球', '橄榄球', '羽毛球', '乒乓球']

  // const [typeState, setTypeState] = useState('足球')
  const handleType = (e) => {
    // setTypeState(e.currentTarget.value)
    onTypeChang(e.currentTarget.value)
  }
  return (

      <div className={style.root}>
        {typeList.map((type, idx) => {
          return <Button onClick={handleType} value={type} key={idx} className={style.button}>{type}</Button>
        })}
      </div>
    
  )
}