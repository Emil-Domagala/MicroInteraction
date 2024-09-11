import { useEffect, useRef } from 'react';
import Animation1 from './Animation1';
import Animation2 from './Animation2';
import Animation3 from './Animation3';
import Animation4 from './Animation4';
import Animation5 from './Animation5';
import Animation6 from './Animation6';
import Animation7 from './Animation7';
import classes from './AnimationsWrapper.module.scss';

const AnimationsWrapper = () => {
  const cardWrapper = useRef(null);

  useEffect(() => {
    const wrapper = cardWrapper.current;

    const moveWrapper = () => {
      const newPosition = window.scrollY;
      if (window.innerWidth < 400) {
        wrapper.style.transform = `translateX(-${newPosition / 20}vw)`;
      } else {
        wrapper.style.transform = `translateX(-${newPosition / 50}vw)`;
      }
    };

    if (wrapper) {
      window.addEventListener('scroll', moveWrapper);
      window.addEventListener('resize', moveWrapper);
      window.addEventListener('touchmove', moveWrapper);
    }
    return () => {
      if (wrapper) {
        window.removeEventListener('scroll', moveWrapper);
        window.removeEventListener('resize', moveWrapper);
        window.removeEventListener('touchmove', moveWrapper);
      }
    };
  }, []);

  return (
    <div className={classes['animations-gradient']}>
      <div className={classes['card-wrapper']} ref={cardWrapper}>
        <div className={classes['idk']}>
          <Animation1 />
          <Animation2 />
          <Animation3 />
          <Animation4 />
          <Animation5 />
          <Animation6 />
          <Animation7 />
          <Animation1 />
          <Animation2 />
          <Animation3 />
          <Animation4 />
          <Animation5 />
          <Animation6 />
          <Animation7 />
        </div>
      </div>
    </div>
  );
};

export default AnimationsWrapper;
