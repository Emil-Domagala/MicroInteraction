import ArrowSVG from '../../assets/ArrowSVG';
import classes from './ButtonArrow.module.scss';

const ButtonArrow = (props) => {
const shadow = classes[props.shadow]

  return (
    <a href="/" className={`${classes['button']} round ${shadow}`}>
      Get Lifetime Acces{' '}
      <div className={classes['arrow-circle']}>
        <div className={classes['arrow-cricle-inner']} />
        <ArrowSVG />
      </div>
    </a>
  );
};
export default ButtonArrow;
