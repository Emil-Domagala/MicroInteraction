import Card from '../../UI/Card';
import classes from './Animation7.module.scss';
import ArrowSVG from '../../../assets/ArrowSVG';
// import { useState } from 'react';
import { useRef, useEffect } from 'react';

const Animation7 = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const buttonActive = buttonRef.current;

    const handleMouseMove = (e) => {
      if (buttonActive) {
        const bounding = buttonActive.getBoundingClientRect();

        const newX = (e.clientX - bounding.left - bounding.width / 2) / 2;
        const newY = e.clientY - bounding.top - bounding.height / 2;
        buttonActive.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
      }
    };

    const handleMouseEnter = () => {
      document.addEventListener('mousemove', handleMouseMove);
    };

    const handleMouseLeave = () => {
      buttonActive.style.transform = 'translate3d(0px, 0px, 0)';
      document.removeEventListener('mousemove', handleMouseMove);
    };

    if (buttonActive) {
      buttonActive.addEventListener('mouseenter', handleMouseEnter);
      buttonActive.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (buttonActive) {
        buttonActive.removeEventListener('mouseenter', handleMouseEnter);
        buttonActive.removeEventListener('mouseleave', handleMouseLeave);
      }
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Card
      bgc="bgc-black-brand"
      border="border-grey"
      min-width="min-width-32"
    >
      <a
        ref={buttonRef}
        style={{
          transition: 'transform 0.1s ease-out', // Smooth transition effect
        }}
        // id="follow"
        href="#"
        className={`${classes['first']} link-button rounded`}
      >
        <p>Preview in browser</p>
        <div className={classes['arrow-circle']}>
          <ArrowSVG className={classes['arrow-first']} />
        </div>
      </a>
      <a href="#" className={`${classes['second']} link-button rounded`}>
        Preview in browser
        <div className={classes['arrow-circle']}>
          <ArrowSVG className={classes['arrow-first']} />
          <ArrowSVG className={classes['arrow-second']} />
        </div>
      </a>
      <a href="#" className={`${classes['third']} link-button rounded`}>
        <p>Preview in browser</p>
      </a>
    </Card>
  );
};
export default Animation7;
