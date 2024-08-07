import MicroInteractionsLogoSVG from '../../assets/MicroInteractionsLogoSVG';
import MicroInteractionsHeaderSVG from '../../assets/MicroInteractionsHeaderSVG';
import classes from './Navigation.module.scss';
const Navigation = () => {
  return (
    <>
      <div className={classes['bgc-img']}>
        <div className={classes['bgc-img__yellow']}></div>
        <MicroInteractionsHeaderSVG />
      </div>
      <nav>
        <div className={classes['nav-wrapper']}>
          <div className={classes['nav-logo']}>
            <a href="/">
              <MicroInteractionsLogoSVG />
            </a>
          </div>
          <div className={classes['nav-menu__deskop']}></div>
          <div className={`${classes['nav-menu__all']}`}>
            <a className={`${classes.signin}  button rounded`} href="/">
              Sign In
            </a>
            <a className={`${classes.signup}  button rounded`} href="/">
              Get Lifetime Access
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
