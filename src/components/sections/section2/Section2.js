import classes from './Section2.module.scss';
import YellowCard from './parts/YellowCard';

const Section2 = () => {
  return (
    <section className={classes.two}>
      <div className="container">
        <h2 className="section-title">
          Collections, light & dark mode with Micro Interactions Pro✨
        </h2>
        <div className="top-cards">
          <YellowCard />
        </div>
      </div>
    </section>
  );
};

export default Section2;
