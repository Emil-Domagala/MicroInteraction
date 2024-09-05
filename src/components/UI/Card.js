import classes from './Card.module.scss';

const Card = (props) => {
  const children = props.children;
  const bgc = classes[props.bgc];
  const border = classes[props.border];

  return (
    <div
      className={`${classes.card} ${bgc} ${border} ${props.className}`}
      // style={{ margin: `${props.margin}` }}
    >
      {props.colection && (
        <div className={`${classes.colection} uppercase`}>
          <p>Colection</p>
        </div>
      )}
      {children}
    </div>
  );
};
export default Card;
