import ArrowInCircle from '../../../../assets/ArrowInCircleSVG';
import ArrowSVG from '../../../../assets/ArrowSVG';
import CartSVG from '../../../../assets/CartSVG';
import CheckedIrregularCircleSVG from '../../../../assets/CheckedIrregularCircleSVG';
import CheckedSVG from '../../../../assets/CheckedSVG';
import ChevronSVG from '../../../../assets/ChevronSVG';
import CloudDownloadSVG from '../../../../assets/CloudDownloadSVG';
import CoffeeSVG from '../../../../assets/CoffeeSVG';
import DoubleCheckedSVG from '../../../../assets/DoubleCheckedSVG';
import HalfEatenPizzaSVG from '../../../../assets/HalfEatenPizzaSVG';
import LaptopSVG from '../../../../assets/LaptopSVG';
import PencilSVG from '../../../../assets/PencilSVG';
import PointerSVG from '../../../../assets/PointerSVG';
import RocketSVG from '../../../../assets/RocketSVG';
import SmiledFaceSVG from '../../../../assets/SmiledFaceSVG';
import SwitchSVG from '../../../../assets/SwitchSVG';
import classes from './YellowCard.module.scss';

const YellowCard = () => {
  return (
    <div className={`${classes['yellow']} section2-box`}>
      <div className={classes['text-container']}>
        <h3 className="card-title card-title-big">
          Explore Stunning Micro Interactions
        </h3>
        <p className="card-text">
          Choose from a variety of beautifully designed micro interactions,
          including animations, buttons, link effects, and more.
        </p>
      </div>
      <div className={classes['buttons-container']}>
        <div className={classes['row']}>
          <div className={classes['normal']}>
            <CheckedSVG />
          </div>
          <div className={classes['normal']}>
            Get in Touch <ArrowSVG style={{ transform: 'scale(0.7)' }} />
          </div>
          <div className={classes['normal']}>
            <SmiledFaceSVG />
          </div>
          <div className={classes['normal']}>
            <CartSVG />
          </div>
          <div className={classes['normal']}>Buy Now</div>
          <div className={classes['normal']}>
            <ArrowInCircle />
          </div>
        </div>
        <div className={classes['row']}>
          <div className={classes['normal']}>
            <SwitchSVG /> Get in touch
          </div>
          <div className={classes['normal']}>
            <CoffeeSVG />
          </div>
          <div className={classes['normal']}>
            <LaptopSVG />
          </div>
          <div className={classes['normal']}>
            <CheckedSVG />
            <PointerSVG />
            <HalfEatenPizzaSVG />
          </div>
          <div className={classes['normal']}>
            Read More <ChevronSVG style={{ transform: 'scale(0.5)' }} />
          </div>
          <div className={classes['normal']}>
            <CheckedIrregularCircleSVG />
          </div>
        </div>
        <div className={classes['row']}>
          <div className={classes['normal']}>
            <RocketSVG />
          </div>
          <div className={classes['normal']}>
            Preview in browser <ArrowInCircle />
          </div>
          <div className={classes['normal']}>
            <CloudDownloadSVG />
          </div>
          <div className={classes['normal']}>
            <DoubleCheckedSVG />
          </div>
          <div className={classes['normal']}>View All</div>
          <div className={classes['normal']}>
            <PencilSVG />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YellowCard;
