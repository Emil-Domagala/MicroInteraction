import Card from '../../../UI/Card';
import BottomButtons from './BottomButtons';
import classes from './Next.module.scss';
import ArrowLongSVG from '../../../../assets/ArrowLongSVG'

const Next = () => {
  return (
    <Card bgc={'bgc-black-brand'} className={classes.card}>
      <div className="content-wrapper-section1">
        <div className={`${classes['next']} rounded`}>
          <div className={classes["text"]}>Next</div>
          <div className={classes["arrow"]}>
            <ArrowLongSVG />
          </div>
        </div>
      </div>
      <BottomButtons bgc='black' />
    </Card>
  );
};
export default Next;
