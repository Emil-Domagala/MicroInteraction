import classes from './Section3.module.scss';
import Opinion from './Opinion';
import { useState, useEffect, useRef } from 'react';

const opinionsRow1 = [
  {
    name: 'Matt Johnson',
    position: 'Head of Support | Relume',
    img: 'https://cdn.prod.website-files.com/64ab4ca244ef5156093937b6/65ff4a48e874940f02931164_IdMeeS8b_400x400.webp',
    opinion:
      `What I love about this is it allows anyone to add a touch of delight to any project - regardless of budget and without a lot of effort – so easy!`,
  },
  {
    name: 'Vimalan',
    position: 'Founder @videsigns.uk — Webflow Agency',
    img: 'https://cdn.prod.website-files.com/64ab4ca244ef5156093937b6/65ff74c0ceef867665021275_9372FbKC_400x400.webp',
    opinion: `Super proud of you Hafiz!! Great product, great site 🔥

Grabbed a lifetime plan formyself.💪🎉`,
  },
  {
    name: 'Félix Meens',
    position: 'Founder of Webflix Studio',
    img: 'https://cdn.prod.website-files.com/64ab4ca244ef5156093937b6/65ff770beae5b45ffebfd1d9_vD4e_135_400x400.webp',
    opinion: `I'm always looking for ways to speed up my workflow and improve the quality of my builds. Micro Interactions does exactly that, saving me time and adding that extra polish to my websites!`,
  },
  {
    name: 'Zack Bujazia',
    position: 'CCO @ Incredible, Webflow Expert & Global Leader',
    img: 'https://cdn.prod.website-files.com/64ab4ca244ef5156093937b6/65ff72e7de98e0fec2aa4873_3-IxoR8S_400x400.webp',
    opinion: `No brainer here, signed up for the lifetime membership. ✅ Thanks Hafiz.

If you’re not signed up for Micro Interactions AND following Hafiz, do it now.✨`,
  },
  {
    name: 'Addingtohealth',
    position: '@addingtohealth',
    img: 'https://cdn.prod.website-files.com/64ab4ca244ef5156093937b6/66072367f33961e29cc8a1d7_Dh48q3dM_400x400.jpg',
    opinion: `Micro Interactions sweats the tiny details so that you can focus on what matters most! It's hands-down one of the best investments you can make for your growing Webflow business.`,
  },
  {
    name: 'Chris Abra',
    position: 'Webflow Expert| Design @cnvsdigital.io',
    img: 'https://cdn.prod.website-files.com/64ab4ca244ef5156093937b6/65ff780052ec61fb421bfd72_gJMpmmc4_400x400.webp',
    opinion: `Congrats on the launch, just snagged lifetime access! Site updates look great.`,
  },
];
const opinionsRow2 = [
  {
    name: 'Josh Loh',
    position: 'Webflow Livestream Host, Senior Community Advocate',
    img: 'https://cdn.prod.website-files.com/64ab4ca244ef5156093937b6/65ff75cd52ec61fb421a4c17_30f-YbXS_400x400.webp',
    opinion: `Get your micro delights here  👇Also - beautiful one page design👌`,
  },
  {
    name: 'Josiah Dueñes',
    position: 'Webflow Expert',
    img: 'https://cdn.prod.website-files.com/64ab4ca244ef5156093937b6/65ff4985af755ba8f653a913_Xbj0Oe9y_400x400.webp',
    opinion: `This is an awesome tool I've been using and already the addition of the button collections is a big value add. Really clean animations that can help you get your development sped up in @webflow Great job @itshkmanzoor`,
  },
  {
    name: 'Attila Vaszka',
    position: 'Webflow Developer & Designer @quarterdigital',
    img: 'https://cdn.prod.website-files.com/64ab4ca244ef5156093937b6/65ff734bd9c8b3b514c1dbd1_cW8i71aP_400x400.webp',
    opinion: `Just purchased the lifetime access 💪 it's a no-brainer, y'all!`,
  },
  {
    name: 'Pat Donaghy',
    position: 'Freelance Brand and Web Designer',
    img: 'https://cdn.prod.website-files.com/64ab4ca244ef5156093937b6/660723148aea693e5e6cef1a_7wpi_g4N_400x400.webp',
    opinion: `Bigtime shoutout to @itshkmanzoor for what he's bringing to the table with Micro Interactions. Pulled the trigger on a lifetime plan and I've already leveled-up the project I'm working on. Beautiful stuff!`,
  },
  {
    name: 'Jonathan Biehl',
    position: 'Brand Design Manager @topcon_today',
    img: 'https://cdn.prod.website-files.com/64ab4ca244ef5156093937b6/65ff4ec4bc45147e21e575ec_k5Y-yp4K_400x400.webp',
    opinion: `I just bought the lifetime access :) Love the site andlooking forward to using these on sites goingforward.`,
  },
  {
    name: 'Laurens',
    position: 'Designing products for the web',
    img: 'https://cdn.prod.website-files.com/64ab4ca244ef5156093937b6/65ff7761af755ba8f676fd07_tBr3qTYd_400x400.webp',
    opinion: `Micro interactions are easy-to-use, fast to integrate and pleasing to the eye. A kickstart to any project that needs some flair!`,
  },
];
const opinionsRow3 = [
  {
    name: 'Waldo',
    position: 'CEO & Co-Founder @webprintsapp',
    img: 'https://cdn.prod.website-files.com/64ab4ca244ef5156093937b6/65ff4bbb590d43256733a3d3_QmdLnQeu_400x400.webp',
    opinion: `I immediately purchased the lifetime access earlier, brilliant work @itshkmanzoor👏🤩 ✨

Congratulations on the launch!!! ✨🚀`,
  },
  {
    name: 'Ailín Tobin',
    position: 'Ireland’s 1st @Webflow Expert',
    img: 'https://cdn.prod.website-files.com/64ab4ca244ef5156093937b6/65ff7406378d84ed950cd0ee_n-ltc57u_400x400.webp',
    opinion: `Well done @itshkmanzoor. I'm adding this to my @webflow arsenal 👌`,
  },
  {
    name: 'Samuel Uebersax',
    position: 'Professional Webflow Partner',
    img: 'https://cdn.prod.website-files.com/64ab4ca244ef5156093937b6/660373b912c0c3246b9fb01a_uPOoNvUa_400x400.webp',
    opinion: `Adding microinteractions by @itshkmanzoor to my webflow libraries was a no-brainer. The interactions are perfectly timed and add a nice touch to every website.😍`,
  },
  {
    name: 'Nicolas Tizio',
    position: '@NicolasTizio',
    img: 'https://cdn.prod.website-files.com/64ab4ca244ef5156093937b6/65ff4f61474f12fc4d8256a6_Cu7q_uHA_400x400.webp',
    opinion: `I've been using micro interactions for some time now. It's super handy for integrating fancy buttons in 2 clicks. Like a Button Relume :)`,
  },
  {
    name: 'Silvan Soeters',
    position: 'Multi-faceted creative. Building @curatyy',
    img: 'https://cdn.prod.website-files.com/64ab4ca244ef5156093937b6/65ff764db5ae78d555d19617_grax-L1S_400x400.webp',
    opinion: `It clearly shows Hafiz poured lots of love into this extremely polished project with its wealth of sleek interactions - spicing up the experience of your Webflow sites undoubtedly.`,
  },
  {
    name: 'Mohammed Muzammil',
    position: 'Webflow | Designer | Animator',
    img: 'https://cdn.prod.website-files.com/64ab4ca244ef5156093937b6/65ff4dbefa1fec271b170824_Dv9cNrRX_400x400.webp',
    opinion: `Absolutely Dope Launch . 🔥🔥Looking forward to seeing how this awesome product evolves🚀`,
  },
];

const Section3 = () => {
  const cardWrapper = useRef(null);
  const [opinionsPosition, setOpinionsPosition] = useState(0);

  useEffect(() => {
    const wrapper = cardWrapper.current;

    const moveWrapper = () => {
      const elementPosition = cardWrapper.current.offsetTop;
      const currentScrollVal = window.scrollY + window.innerHeight;

      const scrolledVal = currentScrollVal - elementPosition;
      // console.log(scrolledVal);

      if (scrolledVal > 0 && window.innerWidth > 768) {
        const newPosition = 100 - (scrolledVal / 13);
        setOpinionsPosition(newPosition);
      }
    };

    if (wrapper) {
      window.addEventListener('scroll', moveWrapper);
      window.addEventListener('resize', moveWrapper);
      // window.addEventListener('touchmove', moveWrapper);
    }
    return () => {
      if (wrapper) {
        window.removeEventListener('scroll', moveWrapper);
        window.removeEventListener('resize', moveWrapper);
        // window.removeEventListener('touchmove', moveWrapper);
      }
    };
  }, []);

  return (
    <section className={classes.three} ref={cardWrapper}>
      <div className="container">
        <h2 className="section-title">Our Wall of Love 💛</h2>
        <p className={classes['under-title-text']}>
          Read what Webflow community members are saying about Micro
          Interactions Pro✨.
        </p>
        <div className={classes['opinions-wrapper']}>
          <div
            className={classes['row']}
            style={{ transform: `translateY(${opinionsPosition}px)` }}
          >
            {opinionsRow1.map((opinion) => {
              return <Opinion opinion={opinion} key={opinion.name} />;
            })}
          </div>
          <div className={classes['row']}>
            {opinionsRow2.map((opinion) => {
              return <Opinion opinion={opinion} key={opinion.name} />;
            })}
          </div>
          <div
            className={classes['row']}
            style={{ transform: `translateY(${-opinionsPosition}px)` }}
          >
            {opinionsRow3.map((opinion) => {
              return <Opinion opinion={opinion} key={opinion.name} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section3;
