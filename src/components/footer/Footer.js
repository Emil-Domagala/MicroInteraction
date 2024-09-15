import MicroInteractionsLogoSVG from '../../assets/MicroInteractionsLogoSVG';
import classes from './Footer.module.scss';
const Footer = () => {
  return (
    <footer>
      <div className={classes['footer-item']}>
        <div className={classes['logo']}>
          <MicroInteractionsLogoSVG />
        </div>
        <p>
          Micro Interactions is a growing library of ready-to-use Webflow micro
          Interactions.
        </p>
        <div className={classes['links']}>
          <a href="#">License Agreement</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div className={classes['line']} />

      <div className={classes['footer-item']}>
        <p>Made by Emil Domagała & a project by </p>
        <div className={classes['photo-wrapper']}>
          <div className={classes['photo']} />
          <p>Hafiz Manzoor</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
