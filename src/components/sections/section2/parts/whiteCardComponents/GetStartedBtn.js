import classes from './GetStartedBtn.module.scss'
import ArrowSVG from '../../../../../assets/ArrowSVG';

const GetStartedBtn=(props)=>{
    const size = classes[props.size]
    const color = classes[props.color]
    return (
      <div href="#" className={` uppercase ${classes['get-started']} ${size} ${color}`}>
        <p>Get started</p>
        <div className={classes['animation-wrapper']}>
          <div className={classes.arrow}>
            <ArrowSVG />
          </div>
          <div className={classes.dot}></div>
        </div>
      </div>
    );
}
export default GetStartedBtn