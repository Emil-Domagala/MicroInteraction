import Card from '../../../UI/Card';
import BottomButtons from './BottomButtons';
import ArrowSVG from '../../../../assets/ArrowSVG';
import classes from './SeeMore.module.scss';

const SeeMore = () => {
  return (
    <Card border={'bgc-white'}>
      <div className={classes['content-wrapper']}>
        <a href="/" className={classes['see-more']}>
          <div className={classes['content']}>
            <div className={`${classes['arrow-wrapper']} ${classes['left']}`}>
              <div className={classes['bgc']} />
              <div className={classes['arrow']}></div>
            </div>
            <p>See More</p>
            <div className={`${classes['arrow-wrapper']} ${classes['right']}`}>
              <div className={classes['bgc']} />
              <div className={classes['arrow']}></div>
            </div>
          </div>
        </a>
        <BottomButtons />
      </div>
    </Card>
  );
};
export default SeeMore;
