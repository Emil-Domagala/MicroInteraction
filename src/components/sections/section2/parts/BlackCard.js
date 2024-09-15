import { useEffect, useRef } from 'react';
import CopyPasteSVG from '../../../../assets/CopyPasteSVG';
import LightningSVG from '../../../../assets/LightningSVG';
import PointerSVG from '../../../../assets/PointerSVG';
import classes from './BlackCard.module.scss';
import { motion, useAnimation, useInView } from 'framer-motion';

const BlackCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const lineControl = useAnimation();

  useEffect(() => {
    if(isInView){
      mainControls.start('visible');
      lineControl.start('visible');
    }
  }, [isInView]);

  return (
    <div className={`${classes['black']} section2-box`}>
      <div className={classes['text-container']}>
        <h3 className="card-title">
          Copy and Paste Micro Interactions with Ease
        </h3>
        <p className="card-text">
          Easily incorporate ready-to-use Webflow micro interactions into your
          projects by simply copying and pasting them.
        </p>
      </div>
      <div className={classes['buttons-container']} ref={ref}>
        <motion.div
          className={classes['copy']}
          variants={{
            hidden: { y: 300 },
            visible: { y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5 }}
        >
          <PointerSVG />
          <div className={classes['inner']}>Copy</div>
        </motion.div>
        <motion.div
          className={classes['paste']}
          variants={{
            hidden: { y: 300 },
            visible: { y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CopyPasteSVG />
          <div className={classes['inner']}>Paste</div>
        </motion.div>
        <motion.div
          className={classes['interaction']}
          variants={{
            hidden: { y: 300 },
            visible: { y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <LightningSVG />
          <div className={classes['inner']}>Interaction</div>
        </motion.div>
        <motion.div
          className={classes['line']}
          variants={{
            hidden: { scaleY: 0 },
            visible: { scaleY: 1 },
          }}
          initial="hidden"
          animate={lineControl}
          transition={{ duration: 1, delay: 0.9 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default BlackCard;
