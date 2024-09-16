import { useRef, useEffect } from 'react';
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
import { motion, useInView, useAnimation } from 'framer-motion';

const YellowCard = () => {
  const topRef = useRef(null);
  const topAnimation = useAnimation();
  const isInView = useInView(topRef, { once: true });

  useEffect(() => {
    if (isInView) {
      topAnimation.start('visible');
    }
  }, [isInView]);

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
      <div className={classes['buttons-container']} ref={topRef}>
        <motion.div
          className={classes['row']}
          variants={{
            hidden: { x: '100%' },
            visible: { x: 0 },
          }}
          initial="hidden"
          animate={topAnimation}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
        </motion.div>
        <motion.div
          className={classes['row']}
          variants={{
            hidden: { x: '150%' },
            visible: { x: 0 },
          }}
          initial="hidden"
          animate={topAnimation}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
        </motion.div>
        <motion.div
          className={classes['row']}
          variants={{
            hidden: { x: '120%' },
            visible: { x: 0 },
          }}
          initial="hidden"
          animate={topAnimation}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default YellowCard;
