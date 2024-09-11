import ArrowSVG from '../../../../assets/ArrowSVG';
import Card from '../../../UI/Card';
import BottomButtons from './BottomButtons';
import classes from './Pricing.module.scss';

const Pricing = () => {
  return (
    <Card bgc={'bgc-black-brand'} className={classes.card}>
      <div className="content-wrapper-section1">
        <div className={`${classes['pricing']}`}>
          <div className={classes['arrow']}>
            <ArrowSVG />
          </div>
          <div className={classes['text']}>Pricing</div>
        </div>
      </div>
      <BottomButtons bgc='black' />
    </Card>
  );
};
export default Pricing;
