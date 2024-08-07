import classes from './SecondaryNav.module.scss';

const SecondaryNav = () => {
  return (
    <div className={classes['secondary-nav']}>
      <a href="/" className={classes['secondary-nav--item']}>
        What's New ✨
      </a>
      <a href="/" className={classes['secondary-nav--item']}>
        Pricing
      </a>
      <a href="/" className={classes['secondary-nav--item']}>
        Reviews
      </a>
      <a href="/" className={classes['secondary-nav--item']}>
        FAQs
      </a>
    </div>
  );
};

export default SecondaryNav;
