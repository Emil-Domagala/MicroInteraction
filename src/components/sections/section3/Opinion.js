import classes from './Opinion.module.scss';

const Opinion = (props) => {
  return (
    <div className={classes['opinion']}>
      <div className={classes["top"]}>
        <div className={classes["avatar"]}>
          <img src={props.opinion.img} alt="" />
        </div>
        <div className={classes["info"]}>
          <div className={classes["name"]}>{props.opinion.name}</div>
          <div className={classes["position"]}>{props.opinion.position}</div>
        </div>
      </div>
      <div className={classes["bottom"]}>
        <p>{props.opinion.opinion}</p>
      </div>
    </div>
  );
};

export default Opinion;
