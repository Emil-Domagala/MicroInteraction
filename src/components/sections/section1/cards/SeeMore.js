import Card from '../../../UI/Card';
import BottomButtons from './BottomButtons';
import ArrowSVG from '../../../../assets/ArrowSVG';
import classes from './SeeMore.module.scss';

const SeeMore = () => {
  return (
    <Card border={'bgc-white'} className={classes.card}>
      <div className="content-wrapper-section1">
        <div  className={`${classes['see-more']} link-buttonx rounded`}>
          <div className={classes['content']}>
            <div className={`${classes['arrow-wrapper']} ${classes['left']}`}>
              <div className={classes['bgc']} />
              <div className={classes['arrow']}>
                <ArrowSVG />
              </div>
            </div>
            <p>See More</p>
            <div className={`${classes['arrow-wrapper']} ${classes['right']}`}>
              <div className={classes['bgc']} />
              <div className={classes['arrow']}>
                <ArrowSVG />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomButtons />
    </Card>
  );
};
export default SeeMore;
