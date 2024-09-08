import Card from '../../../UI/Card';
import BottomButtons from './BottomButtons';
import classes from './ReadMore.module.scss';
import ArrowSVG from '../../../../assets/ArrowSVG';

const ReadMore = () => {
  return (
    <Card border={'bgc-white'} className={classes.card}>
      <div className="content-wrapper-section1">
        <a href="/" className={`${classes['read-more']}`}>
          <div className={classes['left-arrow']}>
            <ArrowSVG />
          </div>

          <div className={classes['text']}>Read more</div>
          <div className={classes['right-arrow']}>
            <ArrowSVG />
          </div>
        </a>
      </div>
      <BottomButtons />
    </Card>
  );
};
export default ReadMore;
