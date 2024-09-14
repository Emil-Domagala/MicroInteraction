import CopyPasteReverseSVG from '../../../assets/CopyPasteReversedSVG';
import HeartSVG from '../../../assets/HeartSVG';
import LockSVG from '../../../assets/LockSVG';
import NoteSVG from '../../../assets/NoteSVG';
import ReaterdedLightningSVG from '../../../assets/ReatardedLightningSVG';
import SelectIconSVG from '../../../assets/SelectIconSVG';
import SquareInCircle from '../../../assets/SquareInCircleSVG';
import TwoDimondsSVG from '../../../assets/TwoDiamondsSVG';
import ButtonArrow from '../../UI/ButtonArrow';
import classes from './Pricing.module.scss';

const Pricing = () => {
  const contentTag = 'Copy as Link <a> & Button <button>';

  return (
    <div className={classes['cards-wrapper']}>
      <div className={classes['card-wrapper']}>
        <h3 className={classes['plan-title']}>Annual</h3>
        <div className={classes['benefits']}>
          <div className={classes['item']}>
            <div className={classes['icon']}>
              <LockSVG />
            </div>
            <p>Unlock all Micro Interactions</p>
          </div>
          <div className={classes['item']}>
            <div className={classes['icon']}>
              <TwoDimondsSVG />
            </div>
            <p>14+ Collections of button variations</p>
          </div>
          <div className={classes['item']}>
            <div className={classes['icon']}>
              <ReaterdedLightningSVG style={{ transform: 'scale(0.8)' }} />
            </div>
            <p>60+ Button hover interactions</p>
          </div>
          <div className={classes['item']}>
            <div className={classes['icon']}>
              <CopyPasteReverseSVG />
            </div>
            <p>{contentTag} </p>
          </div>
          <div className={classes['item']}>
            <div className={classes['icon']}>
              <NoteSVG style={{ transform: 'scale(0.75)' }} />
            </div>
            <p>Fully customizable</p>
          </div>
        </div>
        <div className={classes['price']}>
          <p>Billed Annually</p>
          <div className={classes['number']}>
            <div className={classes['new']}>$54</div>
            <div className={classes['old']}>$84</div>
          </div>
          <div className={classes['btn']}>
            <ButtonArrow content="Sign up for Annual Plan"></ButtonArrow>
          </div>
          <p className={classes['cancel']}>Cancel anytime</p>
        </div>
      </div>

      <div className={`${classes['card-wrapper']} ${classes['gold']}`}>
        <div className={classes['popular']}>✦ POPULAR ✦</div>
        <h3 className={classes['plan-title']}>Lifetime Access</h3>
        <div className={classes['benefits']}>
          <div className={classes['item']}>
            <div className={classes['icon']}>
              <LockSVG />
            </div>
            <p>Unlock all Micro Interactions</p>
          </div>
          <div className={classes['item']}>
            <div className={classes['icon']}>
              <TwoDimondsSVG />
            </div>
            <p>14+ Collections of button variations</p>
          </div>
          <div className={classes['item']}>
            <div className={classes['icon']}>
              <ReaterdedLightningSVG style={{ transform: 'scale(0.8)' }} />
            </div>
            <p>60+ Button hover interactions</p>
          </div>
          <div className={classes['item']}>
            <div className={classes['icon']}>
              <SelectIconSVG />
            </div>
            <p>10+ Sections Animations</p>
          </div>
          <div className={classes['item']}>
            <div className={classes['icon']}>
              <CopyPasteReverseSVG />
            </div>
            <p>{contentTag} </p>
          </div>
          <div className={classes['item']}>
            <div className={classes['icon']}>
              <NoteSVG style={{ transform: 'scale(0.75)' }} />
            </div>
            <p>Fully customizable</p>
          </div>
          <div className={classes['item']}>
            <div className={classes['icon']}>
              <SquareInCircle style={{ transform: 'scale(0.8)' }} />
            </div>
            <p>Lifetime Access & Updates</p>
          </div>
        </div>
        <div className={classes['price']}>
          <p>
            Lifetime Offer <span>(price going up soon)</span>
          </p>
          <div className={classes['number']}>
            <div className={classes['new']}>$74</div>
            <div className={classes['old']}>$114</div>
          </div>
          <div className={classes['btn']}>
            <ButtonArrow content="Get lifetime access"></ButtonArrow>
          </div>
          <div className={classes['addition']}>
            <div className={classes['addition-icon']}>
              <HeartSVG />
            </div>
            <p className={classes['addition-text']}>
              950+ designers and developers are already saving time with Micro
              Interactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
