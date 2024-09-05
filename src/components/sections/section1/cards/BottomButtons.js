import classes from './BottomButtons.module.scss';

const BottomButtons = (props) => {
    const bgc = classes[props.bgc];
let linkContent = 'Copy as Link'
let buttonContent = 'Copy as Button'


  return (
    <div className={classes['buttons-container']}>
      <button className={`${classes['link']} ${bgc}`}>{linkContent}</button>
      <button className={`${classes['button']} ${bgc}`}>{buttonContent}</button>
    </div>
  );
};
export default BottomButtons;
