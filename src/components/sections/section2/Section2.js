import classes from './Section2.module.scss';
import BlackCard from './parts/BlackCard';
import ImgCard from './parts/ImgCard';
import WhiteCard from './parts/WhiteCard';
import YellowCard from './parts/YellowCard';

const Section2 = () => {
  return (
    <section className={classes.two}>
      <div className="container">
        <h2 className="section-title">
          Collections, light & dark mode with Micro Interactions Pro✨
        </h2>
        <div className={classes["top-cards"]}>
          <YellowCard />
          <BlackCard />
        </div>
        <div className={classes["bottom-cards"]}>
          <ImgCard />
          <WhiteCard/>
        </div>
      </div>
    </section>
  );
};

export default Section2;
