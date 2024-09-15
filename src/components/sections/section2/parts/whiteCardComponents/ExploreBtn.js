import classes from './ExploreBtn.module.scss';
import StarSVG from '../../../../../assets/StarSVG';

const ExploreBtn = (props) => {
  const size = classes[props.size];
  const color = classes[props.color];

  return (
    <a
      href="#"
      className={`uppercase ${classes['explore-btn']} ${size} ${color}`}
    >
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
  );
};

export default ExploreBtn;
