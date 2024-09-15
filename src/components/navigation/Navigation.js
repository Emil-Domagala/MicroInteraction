import MicroInteractionsLogoSVG from '../../assets/MicroInteractionsLogoSVG';
// import MicroInteractionsHeaderSVG from '../../assets/MicroInteractionsHeaderSVG';
import classes from './Navigation.module.scss';
import { useState, useEffect } from 'react';
import SecondaryNav from './SecondaryNav';

const Navigation = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className={classes['bgc-img']}></div>
      <nav>
        <div className={classes['nav-wrapper']}>
          <div className={classes['one-third']}>
            <div className={classes['nav-logo']}>
              <a href="#">
                <MicroInteractionsLogoSVG />
              </a>
            </div>
          </div>
          {windowWidth >= 768 && (
            <div className={classes['one-third']}>
              <SecondaryNav />
            </div>
          )}
          <div className={classes['one-third']}>
            <div className={`${classes['nav-menu__all']}`}>
              <div className={classes['blur']}>
                {' '}
                <a className={`${classes.signin}  button rounded`} href="#">
                  Sign In
                </a>
                <a className={`${classes.signup}  button rounded`} href="#">
                  Get Lifetime Access
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
