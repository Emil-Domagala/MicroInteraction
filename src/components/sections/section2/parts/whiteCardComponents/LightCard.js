import GetStartedBtn from './GetStartedBtn';
import classes from './LightCard.module.scss';

const LightCard = () => {
  return (
    <div className={classes['wrapper-light']}>
      <div className={classes['row']}>
        <GetStartedBtn size={'small'} color={'basic'} />
        <GetStartedBtn size={'medium'} color={'basic'} />
        <GetStartedBtn size={'big'} color={'basic'} />
      </div>
      <div className={classes['row']}>
        <GetStartedBtn size={'small'} color={'black-dot'} />
        <GetStartedBtn size={'medium'} color={'black-dot'} />
        <GetStartedBtn size={'big'} color={'black-dot'} />
      </div>
      <div className={classes['row']}>
        <GetStartedBtn size={'small'} color={'black'} />
        <GetStartedBtn size={'medium'} color={'black'} />
        <GetStartedBtn size={'big'} color={'black'} />
      </div>
    </div>
  );
};
export default LightCard;
