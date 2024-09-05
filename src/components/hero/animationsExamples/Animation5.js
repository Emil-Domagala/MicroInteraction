import Card from '../../UI/Card';
import classes from './Animation5.module.scss';
import AppleLogoSVG from '../../../assets/AppleLogoSVG';
import ArrowSVG from '../../../assets/ArrowSVG';
import ChevronSVG from '../../../assets/ChevronSVG';

const Animation5 = () => {
  return (
    <Card bgc="bgc-black-brand" border="border-grey" margin="0px 1rem 0px 1rem">
      <a href="/" className={`link-button ${classes.first}`}>
        <div className={classes['apple-logo']}>
          <AppleLogoSVG />
        </div>
        <p className={classes['text']}>Download for iOS</p>
        <div className={classes['arrow']}>
          <ArrowSVG />
        </div>
      </a>
      <a href="/" className={`link-button rounded ${classes.second}`}>
        <div className={classes['animation-wrapper']}>
          <div className={classes['chevron']}>
            <ChevronSVG />
          </div>
        </div>
        Newsletter
      </a>
      <a href="/" className={`link-button rounded ${classes.third}`}>
        Subscribe
        <div className={classes['arrow-circle']}>
          {/* <div className={classes['arrow-cricle-inner']} /> */}
          <ArrowSVG className={classes['arrow-first']} />
          <ArrowSVG className={classes['arrow-second']} />
        </div>
      </a>
    </Card>
  );
};
export default Animation5;
