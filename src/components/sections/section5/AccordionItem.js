import { useState } from 'react';
import ArrowSVG from '../../../assets/ArrowSVG';
import classes from './AccordionItem.module.scss';

const AccordionItem = (props) => {
  const [isShown, setIsShown] = useState(false);

  const onClickHandler = () => {
    setIsShown(!isShown);
  };

  return (
    <div
      className={`${classes['accordion-item']} ${isShown && classes['active']}`}
      onClick={onClickHandler}
    >
      <div className={classes['title']}>
        <h3>{props.title}</h3>
        <div className={classes['arrow']}>
          <ArrowSVG />
        </div>
      </div>
      <div className={`${classes['body']} `}>
        {props.content}
      </div>
    </div>
  );
};
export default AccordionItem;
