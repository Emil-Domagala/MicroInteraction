import classes from './Animation1.module.scss';
import Card from '../../UI/Card';
import ArrowSVG from '../../../assets/ArrowSVG';
import StarSVG from '../../../assets/StarSVG';
import ArrowLongSVG from '../../../assets/ArrowLongSVG';

const Animation1 = () => {
  return (
    <Card bgc="bgc-black-brand" border="border-grey">
      <a href="/" className={`rounded uppercase link-button ${classes.first}`}>
        <p>Get started</p>
        <div className={classes['animation-wrapper']}>
          <div className={classes.arrow}>
            <ArrowSVG />
          </div>
          <div className={classes.dot}></div>
        </div>
      </a>
      <a href="/" className={`rounded uppercase link-button ${classes.second}`}>
        <div className={`${classes.background} rounded`}></div>
        <div className={classes.inner}>
          <div className={classes['animation-wrapper']}>
            <div className={classes['left-star']}>
              <StarSVG />
            </div>
            <div className={classes['right-star']}>
              <StarSVG />
            </div>
          </div>
          Explore
        </div>
      </a>
      <a href="/" className={`rounded link-button ${classes.third}`}>
        <div className={classes.arrow}>
          <ArrowLongSVG />
        </div>
        <p className={classes['third--text']}>Talk to us</p>
      </a>
    </Card>
  );
};
export default Animation1;
