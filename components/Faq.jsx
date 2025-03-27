import PreTitle from "./PreTitle";
import {motion} from 'framer-motion'
import {fadeIn} from '@/variants'

const faqItemsData =[
  {
    title:"What's an unpopular opinion you have?",
    description:"chosen characteristic three again nearby too saddle entire remove fort lesson daily square probably stretch different famous meat flies lonely south understanding result street?"
  },
  {
    title:"What do you like most about your family?",
    description:"mostly nature felt mark bring asleep cloud sing ancient occasionally mission community children wave social edge opportunity brass grew lost mass tune slowly like?"
  },
  {
    title:"Who are some of your heroes?",
    description:"must apartment arrange book locate full gold allow nails city flower sent land remarkable pair due front birthday heading mass nearby especially forget building?"
  },
  {
    title:"What's your worst habit?",
    description:"medicine crop any had machine eventually pleasure until our tail result feel planned selection location atomic path brave voice former course string nest said?"
  },
  {
    title:"If you could live in a book, TV show, or movie, what would it be?",
    description:"topic rush ball dawn largest strike certain cut breathe occur point diameter practical once thee snow feet theory solid bite kept journey last line?"
  },
  
]
const Faq = () => {
  return (
    <section id="faq" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center max-w-[540px] mx-auto mb-20">
          <PreTitle text='Faq' center/>
          <h2 className="h2 mb-3">Got Questions? We've Got You Covered</h2>
          <p className="mb-11 max-w-[480px] mx-auto">From project planning to final touches,we've answered the most common questions to help you make informed decisions</p>
        </div>
        {/* faq items */}
        <ul>
          {faqItemsData?.map((item,index)=>{
            return <li key={index}>{item.title}</li>
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
