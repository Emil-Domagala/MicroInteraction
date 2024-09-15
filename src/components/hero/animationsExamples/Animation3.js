import Card from '../../UI/Card';
import classes from './Animation3.module.scss';
import ArrowSVG from '../../../assets/ArrowSVG';
import StarSVG from '../../../assets/StarSVG';

const Animation3 = () => {
  return (
    <Card
      bgc="bgc-black-brand"
      border="border-grey"
      min-width="min-width-32"
    >
      <a href="#" className={`link-button ${classes['first']}`}>
        <p className={classes['text']}>Get in touch</p>
        <div className={classes['arrow-circle']}>
          <div className={classes['arrow-cricle-inner']} />
          <ArrowSVG />
        </div>
      </a>
      <a href="#" className={`uppercase link-button ${classes.second}`}>
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
      <a href="#" className={`link-button ${classes.third}`}>
        <div className={classes['left-arrow']}>
          <ArrowSVG />
        </div>

        <div className={classes['text']}>Read more</div>
        <div className={classes['right-arrow']}>
          <ArrowSVG />
        </div>
      </a>
      <a href="#" className={`link-button ${classes['fourth']}`}>
        <p className={classes['text']}>Get in touch</p>
        <div className={classes['arrow-circle']}>
          <div className={classes['arrow-cricle-inner']} />
          <ArrowSVG className={classes['arrow-first']} />
          <ArrowSVG className={classes['arrow-second']} />
        </div>
      </a>
    </Card>
  );
};
export default Animation3;
