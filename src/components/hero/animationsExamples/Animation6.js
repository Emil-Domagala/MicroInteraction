import ArrowSVG from '../../../assets/ArrowSVG';
import Card from '../../UI/Card';
import classes from './Animation6.module.scss';

const Animation6 = () => {
  return (
    <Card
      bgc="bgc-black-brand"
      border="border-grey"
      min-width="min-width-32"
    >
      <a href="/" className={`${classes['first']} link-button`}>
        <div className={`${classes['content']}`}>Create a blog</div>
        <div className={`${classes['arrow-wrapper']}`}>
          <ArrowSVG />
        </div>
      </a>
      <a href="/" className={`${classes['second']} link-button`}>
        <div className={`${classes['content']} uppercase`}>hover me</div>
      </a>
      <a href="/" className={`${classes['third']} link-button`}>
        <div className={`${classes['arrow-wrapper']}`}>
          <ArrowSVG />
        </div>
        <div className={`${classes['content']}`}>Get in touch</div>
      </a>
    </Card>
  );
};
export default Animation6;
