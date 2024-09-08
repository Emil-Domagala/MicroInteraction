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
    <div className={classes['box']}>
      <div className={classes['text-container']}>
        <h3 className="card-title">Explore Stunning Micro Interactions</h3>
        <p className="card-text">
          Choose from a variety of beautifully designed micro interactions,
          including animations, buttons, link effects, and more.
        </p>
      </div>
      <div className={classes['buttons-container']}>
        <div className={classes['row']}>
          <button className={classes['normal']}>
            <CheckedSVG />
          </button>
          <button className={classes['normal']}>
            Get in Touch <ArrowSVG style={{ transform: 'scale(0.8)' }} />
          </button>
          <button className={classes['normal']}>
            <SmiledFaceSVG />
          </button>
          <button className={classes['normal']}>
            <CartSVG />
          </button>
          <button className={classes['normal']}>Buy Now</button>
          <button className={classes['normal']}>
            <ArrowInCircle />
          </button>
        </div>
        <div className={classes['row']}>
          <button className={classes['normal']}>
            <SwitchSVG /> Get in touch
          </button>
          <button className={classes['normal']}>
            <CoffeeSVG />
          </button>
          <button className={classes['normal']}>
            <LaptopSVG />
          </button>
          <button className={classes['normal']}>
            <CheckedSVG />
            <PointerSVG />
            <HalfEatenPizzaSVG />
          </button>
          <button className={classes['normal']}>
            Read More <ChevronSVG />
          </button>
          <button className={classes['normal']}>
            <CheckedIrregularCircleSVG />
          </button>
        </div>
        <div className={classes['row']}>
          <button className={classes['normal']}>
            <RocketSVG />
          </button>
          <button className={classes['normal']}>
            Preview in browser <ArrowInCircle />
          </button>
          <button className={classes['normal']}>
            <CloudDownloadSVG />
          </button>
          <button className={classes['normal']}>
            <DoubleCheckedSVG />
          </button>
          <button className={classes['normal']}>View All</button>
          <button className={classes['normal']}>
            <PencilSVG />
          </button>
        </div>
      </div>
    </div>
  );
};

export default YellowCard;
