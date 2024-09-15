import classes from './Opinion.module.scss';
import { motion } from 'framer-motion';

const Opinion = (props) => {
  return (
    <motion.div
      className={classes['opinion']}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-80% 0px -80% 0px' }}
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
    </motion.div>
  );
};

export default Opinion;
