import Card from '../../UI/Card';
import classes from './Animation4.module.scss';
import ArrowSVG from '../../../assets/ArrowSVG';

const Animation4 = () => {
  return (
    <Card bgc="bgc-black-brand" border="border-grey" colection>
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
        <p>Get started</p>
        <div className={classes['animation-wrapper']}>
          <div className={classes.arrow}>
            <ArrowSVG />
          </div>
          <div className={classes.dot}></div>
        </div>
      </a>
      <a href="/" className={`rounded uppercase link-button ${classes.third}`}>
        <p>Get started</p>
        <div className={classes['animation-wrapper']}>
          <div className={classes.arrow}>
            <ArrowSVG />
          </div>
          <div className={classes.dot}></div>
        </div>
      </a>
    </Card>
  );
};
export default Animation4;
