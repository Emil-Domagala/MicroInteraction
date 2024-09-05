import classes from './SecondaryNav.module.scss';
import { useEffect, useState } from 'react';

const SecondaryNav = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let content = <p>What's New ✨</p>;

  if (windowWidth >= 768) {
    content = <p>Sections✨</p>;
  }

  return (
    <div className={classes['secondary-nav']}>
      <a href="/" className={`${classes['nav--item']} ${classes.special}`}>
        {content}
      </a>
      <a href="/" className={`${classes['nav--item']} ${classes.normal}`}>
        Pricing
      </a>
      <a href="/" className={`${classes['nav--item']} ${classes.normal}`}>
        Reviews
      </a>
      <a href="/" className={`${classes['nav--item']} ${classes.normal}`}>
        FAQs
      </a>
    </div>
  );
};

export default SecondaryNav;
