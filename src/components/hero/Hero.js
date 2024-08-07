import SecondaryNav from '../navigation/SecondaryNav';
import classes from './Hero.module.scss'

const Hero =()=>{
    return (
      <header>
        <div className={`container ${classes['hero']}`}>
          <div className={`rounded ${classes.interactions}`}>
            ✦ 5000+ Interactions copied ✦
          </div>
          <div className={classes['secondary-nav-wrapper']}>
            <SecondaryNav />
          </div>
          <div className="wrapper">
            <h1 className={classes['header_title']}>
              Micro Interactions<span className="yellow">↝</span> for your
              Webflow projects
            </h1>
            <div className={classes['small-text']}>
              A growing library of Webflow micro interactions to streamline
              common project interactions &amp;{' '}
              <span className="yellow">saving you time.</span>
            </div>
            
          </div>
        </div>
      </header>
    );
}

export default Hero