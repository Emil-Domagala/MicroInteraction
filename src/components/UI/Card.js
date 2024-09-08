import classes from './Card.module.scss';

const Card = (props) => {
  const children = props.children;
  const bgc = classes[props.bgc];
  const border = classes[props.border];
  const minWidth = classes[props['min-width']];

  return (
    <div
      className={`${classes.card} ${bgc} ${border} ${props.className} ${minWidth}`}
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
