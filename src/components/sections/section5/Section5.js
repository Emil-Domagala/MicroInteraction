import ButtonArrow from '../../UI/ButtonArrow';
import AccordionItem from './AccordionItem';
import classes from './Section5.module.scss';

const Section5 = () => {
  const accordionItems = [
    {
      id: 1,
      title: 'How to copy into my projects micro interactions?',
      content: (
        <p>
          Adding micro interactions in Webflow is easy. Simply <span>copy</span>{' '}
          and <span>paste</span> the ready-to-use micro interactions into your
          Webflow projects. You can choose to copy them as a link or as a
          button.
        </p>
      ),
    },
    {
      id: 2,
      title: 'Can I get a refund?',
      content: (
        <p>
          If you would like to get a refund please reach out to me on{' '}
          <a href="/">X</a> I will be happy to help.'
        </p>
      ),
    },
    {
      id: 3,
      title: 'Can I customize micro interactions?',
      content: (
        <p>
          Yes, you can customize the micro interactions to match
          your design and branding. Simply change the color and font size to
          match your brand.'
        </p>
      ),
    },
    {
      id: 4,
      title: 'Is Micro Interactions free?',
      content: (
        <p>
          There are lots of <a href="/">micro interactions</a> that you can use
          for free without needing to sign up. But if you want more advanced
          interactions, you`ll need to get a pro plan.'
        </p>
      ),
    },
    {
      id: 5,
      title: 'Do you provide any support?',
      content: (
        <p>
          Yes, always. Just reach out to me on Twitter and I would be more than
          happy to answer any questions/feedback you may have.'
        </p>
      ),
    },
    {
      id: 6,
      title: 'What is the difference between Lifetime Aceess & Annual plan?',
      content: (
        <p>
          With <a href="/">Lifetime Access</a>, you make a single payment and
          get lifetime access to all forthcoming updates. With the{' '}
          <a href="/">Annual Plan</a>, you retain access to all premium Micro
          Interactions but must renew your subscription annually.'
        </p>
      ),
    },
  ];

  return (
    <section className={classes.five}>
      <div className="container">
        <h2 className="section-title">Frequently asked Questions</h2>
        <div className="accordion">
          {accordionItems.map((item) => {
            return (
              <AccordionItem
                key={item.id}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </div>
        <div className={classes["card-pro"]}>
          <h3>Elevate your Webflow builds with Micro Interactions Pro!</h3>
          <div className={classes["get-it"]}>
            <ButtonArrow black content={'Get lifetime Access'}/>
            <p>It only takes 2 minutes to complete.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section5;
