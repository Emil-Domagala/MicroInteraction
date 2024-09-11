import classes from './DarkCard.module.scss';
import ExploreBtn from './ExploreBtn';

const DarkCard = () => {
  return (
    <div className={classes['wrapper-dark']}>
      <div className={classes['row']}>
        <p>Primary</p>
        <div className={classes["buttons-container"]}>
          <ExploreBtn size={'small'} color={'primary'} />
          <ExploreBtn size={'medium'} color={'primary'} />
          <ExploreBtn size={'big'} color={'primary'} />
        </div>
      </div>
      <div className={classes['row']}>
        <p>Gradient</p>
        <div className={classes["buttons-container"]}>
          <ExploreBtn size={'small'} color={'gradient'} />
          <ExploreBtn size={'medium'} color={'gradient'} />
          <ExploreBtn size={'big'} color={'gradient'} />
        </div>
      </div>
      <div className={classes['row']}>
        <p>Solid</p>
        <div className={classes["buttons-container"]}>
          <ExploreBtn size={'small'} color={'solid'} />
          <ExploreBtn size={'medium'} color={'solid'} />
          <ExploreBtn size={'big'} color={'solid'} />
        </div>
      </div>
      <div className={classes['row']}>
        <p>Outline - White</p>
        <div className={classes["buttons-container"]}>
          <ExploreBtn size={'small'} color={'outline-white'} />
          <ExploreBtn size={'medium'} color={'outline-white'} />
          <ExploreBtn size={'big'} color={'outline-white'} />
        </div>
      </div>
      <div className={classes['row']}>
        <p>Outline - Grey</p>
        <div className={classes["buttons-container"]}>
          <ExploreBtn size={'small'} color={'outline-grey'} />
          <ExploreBtn size={'medium'} color={'outline-grey'} />
          <ExploreBtn size={'big'} color={'outline-grey'} />
        </div>
      </div>
    </div>
  );
};
export default DarkCard;
