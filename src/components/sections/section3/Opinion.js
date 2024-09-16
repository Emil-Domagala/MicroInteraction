import classes from './Opinion.module.scss';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Opinion = (props) => {
 const ref = useRef(null);
 const mainControls = useAnimation();
 const isInView = useInView(ref, { once: true });

 useEffect(() => {
   if (isInView) {
     mainControls.start('visible');
   }
 }, [isInView]);

  return (
    <motion.div
      className={classes['opinion']}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial='hidden'

      animate={mainControls}
      transition={{ duration: 0.5 }}

    >
      <div className={classes['top']}>
        <div className={classes['avatar']}>
          <img src={props.opinion.img} alt="" />
        </div>
        <div className={classes['info']}>
          <div className={classes['name']}>{props.opinion.name}</div>
          <div className={classes['position']}>{props.opinion.position}</div>
        </div>
      </div>
      <div className={classes['bottom']}>
        <p>{props.opinion.opinion}</p>
      </div>
      <div className={classes['watcher']} ref={ref} />
    </motion.div>
  );
};

export default Opinion;
