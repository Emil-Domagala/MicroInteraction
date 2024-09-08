import BendedArrowSVG from '../../../assets/BendedArrowSVG';
import ArrowSVG from '../../../assets/ArrowSVG';
import classes from './Section1.module.scss';
import SeeMore from './cards/SeeMore';
import ReadMore from './cards/ReadMore';
import Next from './cards/Next';
import Pricing from './cards/Pricing';

const Section1 = () => {
  return (
    <section className={classes.one}>
      <div className={`container`}>
        <h2 className="section-title">
          Stop wasting time - effortlessly add Micro Interactions
        </h2>
        <p className={classes['under-title-text']}>
          With our ready-to-use Webflow micro interactions, you can easily{' '}
          <span>copy </span>
          and <span>paste</span> them into your projects, saving you time and
          effort.
        </p>
        <div className={classes['functions']}>
          <div className={classes['left-text--wrapper']}>
            <p>Try these interactions into Webfolw for free</p>
            <div className={classes['arrow']}>
              <BendedArrowSVG />
            </div>
          </div>
          <a href="/" className={`link-button rounded ${classes['first']}`}>
            <p className={classes['text']}>View all interactions</p>
            <div className={classes['arrow-circle']}>
              <div className={classes['arrow-cricle-inner']} />
              <ArrowSVG />
            </div>
          </a>
        </div>
        <div className={classes["cards-wrapper"]}>
          <SeeMore />
          <ReadMore />
          <Next />
          <Pricing />
        </div>
      </div>
    </section>
  );
};

export default Section1;
