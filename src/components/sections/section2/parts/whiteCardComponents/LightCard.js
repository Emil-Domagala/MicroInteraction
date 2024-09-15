import { useEffect } from 'react';
import GetStartedBtn from './GetStartedBtn';
import classes from './LightCard.module.scss';
import {motion, useAnimation}from 'framer-motion'

const LightCard = (props) => {
   const mainControls = useAnimation();

   useEffect(() => {
     if (props.isInView) {
       mainControls.start('visible');
     }
   }, [props.isInView]);

  return (
    <motion.div
      className={classes['wrapper-light']}
      variants={{
        hidden: { y: 300 },
        visible: { y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5 }}
    >
      <div className={classes['row']}>
        <GetStartedBtn size={'small'} color={'basic'} />
        <GetStartedBtn size={'medium'} color={'basic'} />
        <GetStartedBtn size={'big'} color={'basic'} />
      </div>
      <div className={classes['row']}>
        <GetStartedBtn size={'small'} color={'black-dot'} />
        <GetStartedBtn size={'medium'} color={'black-dot'} />
        <GetStartedBtn size={'big'} color={'black-dot'} />
      </div>
      <div className={classes['row']}>
        <GetStartedBtn size={'small'} color={'black'} />
        <GetStartedBtn size={'medium'} color={'black'} />
        <GetStartedBtn size={'big'} color={'black'} />
      </div>
    </motion.div>
  );
};
export default LightCard;
