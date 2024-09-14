import Pricing from './Pricing';
import classes from './Section4.module.scss';

const Section4 = () => {
  return (
    <section className={classes.four}>
      <div className="container">
        <h2 className="section-title">Unlock Micro Interactions Pro ✨</h2>
        <p className={classes['under-title-text']}>
          950+ designers and developers are already saving time with Micro
          Interactions.
        </p>
          <Pricing />
      </div>
    </section>
  );
};
export default Section4;
