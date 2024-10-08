import ButtonArrow from '../UI/ButtonArrow';
import SecondaryNav from '../navigation/SecondaryNav';
import AnimationsWrapper from './animationsExamples/AnimationsWrapper';
import user1 from '../../assets/jpeg/user1.jpg';
import user2 from '../../assets/jpeg/user2.jpeg';
import user3 from '../../assets/jpeg/user3.jpeg';
import user4 from '../../assets/jpeg/user4.jpeg';
import user5 from '../../assets/jpeg/user5.jpeg';

import classes from './Hero.module.scss'; // Import your styles as needed
import Bottom from './bottom/Bottom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <div className={`container ${classes['hero']}`}>
        <div className={`rounded ${classes.interactions}`}>
          ✦ 5000+ Interactions copied ✦
        </div>
        <div className={classes['secondary-nav-wrapper']}>
          {windowWidth < 768 && <SecondaryNav />}
        </div>
        {/* <div className="wrapper"> */}
        <h1 className={classes['header_title']}>
          Micro Interactions<span className="yellow">↝</span> for your Webflow
          projects
        </h1>
        <div className={classes['small-text']}>
          <p>
            A growing library of Webflow micro interactions to streamline common
            project interactions &amp;{' '}
            <span className="yellow">saving you time.</span>
          </p>
        </div>
        <div className={classes['button-wrapper']}>
          <ButtonArrow shadow content={'Get Lifetime Access'}/>
          <div className={classes['users-wrapper']}>
            <div className={classes['users-img']}>
              <img
                className={classes['img-no-margin']}
                src={user1}
                alt="user1"
              />
              <img src={user2} alt="user2" />
              <img src={user3} alt="user3" />
              <img src={user4} alt="user4" />
              <img src={user5} alt="user5" />
            </div>
            <div className={classes['text-users']}>
              <p>Trusted by over 100 Webflow Experts in the community.</p>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      <AnimationsWrapper />
      <Bottom />
    </header>
  );
};

export default Hero;
