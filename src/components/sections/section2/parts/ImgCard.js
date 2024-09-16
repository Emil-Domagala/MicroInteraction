import ConnectedSVG from '../../../../assets/ConnectedSVG';
import SlashInBoxSVG from '../../../../assets/SlashInBoxSVG';
import classes from './ImgCard.module.scss';

const ImgCard = () => {
  return (
    <div className={`${classes['img']}`}>
      <div className={classes['text-container']}>
        <h3 className="card-title">Copy as a link or button tag</h3>
      </div>
      <div className={classes["buttons-container"]}>
        <div className={classes["button"]}><SlashInBoxSVG/></div>
        <div className={classes["button"]}><ConnectedSVG/></div>
      </div>
      <img
        src="https://cdn.prod.website-files.com/64ab4ca244ef5156093937b6/65de7583ba5ba9a8821638a0_Rectangle%204916.svg"
        loading="lazy"
        alt=""
        className={classes['yellow-light']}
      ></img>
    </div>
  );
};
export default ImgCard;
