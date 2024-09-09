import CopyPasteSVG from '../../../../assets/CopyPasteSVG';
import LightningSVG from '../../../../assets/LightningSVG';
import PointerSVG from '../../../../assets/PointerSVG';
import classes from './BlackCard.module.scss';

const BlackCard=()=>{
    return (
      <div className={`${classes['black']} section2-box`}>
        <div className={classes['text-container']}>
          <h3 className="card-title">
            Copy and Paste Micro Interactions with Ease
          </h3>
          <p className="card-text">
            Easily incorporate ready-to-use Webflow micro interactions into your
            projects by simply copying and pasting them.
          </p>
        </div>
        <div className={classes["buttons-container"]}>
            <div className={classes["copy"]}><PointerSVG/><div className={classes["inner"]}>Copy</div></div>
            <div className={classes["paste"]}><CopyPasteSVG/><div className={classes["inner"]}>Paste</div></div>
            <div className={classes["interaction"]}><LightningSVG/><div className={classes["inner"]}>Interaction</div></div>
            <div className={classes["line"]}></div>
        </div>
      </div>
    );
}

export default BlackCard