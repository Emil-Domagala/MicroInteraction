import ArrowSVG from '../../assets/ArrowSVG';
import classes from './ButtonArrow.module.scss';

const ButtonArrow = (props) => {
  return (
    <a
      href="/"
      className={`${classes['button']} 
      ${props.shadow && classes.shadow} 
      ${props.small && classes.small} 
      ${props.medium && classes.medium} 
      ${props.transparent && classes.transparent}
      ${props.black && classes.black}
      `}
    >
      {props.content}
      <div className={classes['arrow-circle']}>
        <div className={classes['arrow-cricle-inner']} />
        <ArrowSVG />
      </div>
    </a>
  );
};
export default ButtonArrow;
