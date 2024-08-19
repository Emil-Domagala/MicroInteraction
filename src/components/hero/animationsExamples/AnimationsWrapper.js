import Animation1 from './Animation1';
import Animation2 from './Animation2';
import Animation3 from './Animation3';
import Animation4 from './Animation4';
import Animation5 from './Animation5';
import Animation6 from './Animation6';
import Animation7 from './Animation7';
import classes from './AnimationsWrapper.module.scss';

const AnimationsWrapper = () => {
  return (
    <div className={classes['animations-wrapper']}>
      <Animation1 />
      <Animation2 />
      <Animation3 />
      <Animation4 />
      <Animation5 />
      <Animation6 />
      <Animation7 />
    </div>
  );
};

export default AnimationsWrapper;
