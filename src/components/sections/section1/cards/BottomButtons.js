import { useState } from 'react';
import ArrowSVG from '../../../../assets/ArrowSVG';
import classes from './BottomButtons.module.scss';

const BottomButtons = (props) => {
  const [isActive, setIsActive] = useState({ link: false, button: false });
  const [linkContent, setLinkContent] = useState('Copy as Link');
  const [buttonContent, setButtonContent] = useState('Copy as Button');
  const bgc = classes[props.bgc];

  const handleOnClick = (e) => {
    if (e.target.innerText === 'Copy as Link') {
      changeNameLink();
      setIsActive({ ...isActive, link: true });
    }
    if (e.target.innerText === 'Copy as Button') {
      changeNameButton();
      setIsActive({ ...isActive, button: true });
    }
  };

  const changeNameLink = () => {
    setTimeout(() => {
      setLinkContent('Copied!');
    }, 1000);
    setLinkContent('Copying...');
    clearTimeout();
  };
  const changeNameButton = () => {
    setTimeout(() => {
      setButtonContent('Copied!');
    }, 1000);
    setButtonContent('Copying...');
    clearTimeout();
  };

  return (
    <div className={classes['buttons-container']}>
      <button className={`${classes['link']} ${bgc}`} onClick={handleOnClick}>
        <div
          className={`${classes['arrow']} ${
            isActive.link && classes['active']
          }`}
        >
          <ArrowSVG />
        </div>
        {linkContent}
      </button>
      <button className={`${classes['button']} ${bgc}`} onClick={handleOnClick}>
        <div
          className={`${classes['arrow']} ${
            isActive.button && classes['active']
          }`}
        >
          <ArrowSVG />
        </div>
        {buttonContent}
      </button>
    </div>
  );
};
export default BottomButtons;
