import ArrowSVG from '../../../assets/ArrowSVG';
import Card from '../../UI/Card';
import classes from './Animation2.module.scss';

const Animation2 = () => {
  return (
    <Card
      bgc="bgc-black-brand"
      border="border-grey"
      colection
      margin="0px 1rem 0px 1rem"
    >
      <a href="/" className={` ${classes.first} link-button`}>
        <div className={classes['circle']}>
          <div className={`${classes['arrow-wrapper']} ${classes['left']}`}>
            <ArrowSVG />
          </div>
          <div className={`${classes['arrow-wrapper']} ${classes['right']}`}>
            <ArrowSVG />
          </div>
        </div>
        <div className={`rounded ${classes['main-button']} link-button`}>
          <div className={`${classes['main-button--inside']} ${classes.top}`}>
            Get in touch
          </div>
          <div
            className={`${classes['main-button--inside']} ${classes.bottom}`}
          >
            Get in touch
          </div>
          <div className={`rounded ${classes['main-button--bgc']}`}></div>
        </div>
      </a>
      <a href="/" className={`button ${classes.second} link-button`}>
        <div className={`rounded ${classes['main-button']} link-button`}>
          <div className={`${classes['main-button--inside']} ${classes.top}`}>
            Get in touch
          </div>
          <div
            className={`${classes['main-button--inside']} ${classes.bottom}`}
          >
            Get in touch
          </div>
          <div className={`rounded ${classes['main-button--bgc']}`}></div>
        </div>
        <div className={classes['circle']}>
          <div className={`${classes['arrow-wrapper']} ${classes['left']}`}>
            <ArrowSVG />
          </div>
          <div className={`${classes['arrow-wrapper']} ${classes['right']}`}>
            <ArrowSVG />
          </div>
        </div>
      </a>

      <a href="/" className={` ${classes.third} link-button`}>
        <div className={`rounded ${classes['main-button']} link-button`}>
          <div className={`${classes['main-button--inside']} ${classes.top}`}>
            Get in touch
          </div>
          <div
            className={`${classes['main-button--inside']} ${classes.bottom}`}
          >
            Get in touch
          </div>
          <div className={`rounded ${classes['main-button--bgc']}`}></div>
        </div>
      </a>
    </Card>
  );
};
export default Animation2;
