import ButtonArrow from '../../../UI/ButtonArrow';
import classes from './WhiteCard.module.scss';
import DarkCard from './whiteCardComponents/DarkCard';
// import DarkCard from './whiteCardComponents/DarkCard';
import LightCard from './whiteCardComponents/LightCard';

const WhiteCard = () => {
  return (
    <div className={`${classes['white']} section2-box`}>
      <div className={classes['top-container']}>
        <div className={classes['text-container']}>
          <h3 className="card-title card-title-big">
            Collections of button variations with light & dark mode
          </h3>
          <p className="card-text">
            Stop wasting time creating a different variations, copy the whole
            collection into your styleguide for your entire project.
          </p>
        </div>
        <div className={classes['button-wrapper']}>
          <ButtonArrow content={'Get Lifetime Access'} black medium />
        </div>
      </div>
      <LightCard />
      <DarkCard/>
    </div>
  );
};

export default WhiteCard;
