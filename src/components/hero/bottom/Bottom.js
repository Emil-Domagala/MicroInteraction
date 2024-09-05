import CopyPasteSVG from '../../../assets/CopyPasteSVG';
import CoursorInBoxSVG from '../../../assets/CoursorInBoxSVG';
import InteractiveElementsSVG from '../../../assets/InteractiveElementsSVG';
import classes from './Bottom.module.scss';

const Bottom = () => {
  return (
    <div className={classes['icons-wrapper']}>
      <div className={classes["element"]}>
        <div className={classes['icon']}>
          <CopyPasteSVG />
        </div>
        <p>Copy and paste micro interactions effortlessly</p>
      </div>
      <div className={classes["element"]}>
        <div className={classes['icon']}>
          <InteractiveElementsSVG />
        </div>
        <p>Enhance your Webflow projects with interactive elements</p>
      </div>
      <div className={classes["element"]}>
        <div className={classes['icon']}>
          <CoursorInBoxSVG />
        </div>
        <p>Engage your website visitors with captivating micro interactions</p>
      </div>
    </div>
  );
};

export default Bottom;
