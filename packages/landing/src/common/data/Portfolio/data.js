import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import { socialDribbbleOutline } from 'react-icons-kit/ionicons/socialDribbbleOutline';
import { socialLinkedin } from 'react-icons-kit/ionicons/socialLinkedin';
import { socialGoogleplusOutline } from 'react-icons-kit/ionicons/socialGoogleplusOutline';

import Awardee1 from '../../assets/image/portfolio/awardee-1.png';
import Awardee2 from '../../assets/image/portfolio/awardee-2.png';
import Awardee3 from '../../assets/image/portfolio/awardee-3.png';
import Awardee4 from '../../assets/image/portfolio/awardee-4.png';
import AwardImage1 from '../../assets/image/portfolio/award-1.png';
import AwardImage2 from '../../assets/image/portfolio/award-2.png';
import AwardImage3 from '../../assets/image/portfolio/award-3.png';
import AwardImage4 from '../../assets/image/portfolio/award-4.png';

import PortfolioImage1 from '../../assets/image/portfolio/JNL-website.png';
import PortfolioImage2 from '../../assets/image/portfolio/buildercog-website.png';
import PortfolioImage3 from '../../assets/image/portfolio/saas-app.png';
import PortfolioImage4 from '../../assets/image/portfolio/JNL-aboutus-webpage.png';
import PortfolioImage5 from '../../assets/image/portfolio/urunit-app.png';
import PortfolioImage6 from '../../assets/image/portfolio/urunit-app-internal-page.png';


import Step1 from '../../assets/image/portfolio/step-1.png';
import Step2 from '../../assets/image/portfolio/step-2.png';
import Step3 from '../../assets/image/portfolio/step-3.png';

import SkillIcon1 from '../../assets/image/portfolio/skill-1.svg';
import SkillIcon2 from '../../assets/image/portfolio/skill-2.svg';
import SkillIcon3 from '../../assets/image/portfolio/skill-3.svg';
import SkillIcon4 from '../../assets/image/portfolio/skill-4.svg';

import Client1 from '../../assets/image/portfolio/client-1.png';
import Client2 from '../../assets/image/portfolio/client-2.png';
import Client3 from '../../assets/image/portfolio/client-3.png';
import Client4 from '../../assets/image/portfolio/client-4.png';
import Client5 from '../../assets/image/portfolio/client-5.png';
import Client6 from '../../assets/image/portfolio/client-6.png';

import Reviewer1 from '../../assets/image/portfolio/client-avatar-1.jpg';
import Reviewer2 from '../../assets/image/portfolio/client-avatar-2.jpg';
import Reviewer3 from '../../assets/image/portfolio/client-avatar-3.jpg';

export const SOCIAL_PROFILES = [
  {
    icon: socialTwitter,
    url: 'https://twitter.com/thenerdstack',
  },
  {
    icon: socialFacebook,
    url: 'https://www.facebook.com/thenerdstack',
  },
  // {
  //   icon: socialDribbbleOutline,
  //   url: '#',
  // },
  {
    icon: socialLinkedin,
    url: 'https://www.linkedin.com/company/thenerdstack',
  },
  // {
  //   icon: socialGoogleplusOutline,
  //   url: '#',
  // },
];

export const MENU_ITEMS = [
  {
    label: 'HOME',
    path: '/',
    offset: '0',
  },
  {
    label: 'ABOUT',
    path: '/about',
    offset: '0',
  },
  {
    label: 'SERVICES',
    path: '/services',
    offset: '0',
  },
  {
    label: 'PROJECTS',
    path: '/projects',
    offset: '0',
  },
  {
    label: 'BLOG',
    path: '/blog',
    offset: '0',
  },
  {
    label: 'CONTACT',
    path: '/contact',
    offset: '0',
  },
];

export const AWARDS = [
  {
    awardLogo: AwardImage1,
    awardName: 'Free Software Advice',
    awardDetails: 'Top Rated App Development Companies USA',
    awardeeLogo: Awardee1,
    awardeeName: 'Awardee',
    date: 'The Jury 2018',
  },
  {
    awardLogo: AwardImage2,
    awardName: 'Free Software Advice',
    awardDetails: 'Top Rated App Development Companies USA',
    awardeeLogo: Awardee2,
    awardeeName: 'Awardee',
    date: 'The Jury 2018',
  },
  {
    awardLogo: AwardImage3,
    awardName: 'Free Software Advice',
    awardDetails: 'Top Rated App Development Companies USA',
    awardeeLogo: Awardee3,
    awardeeName: 'Awardee',
    date: 'The Jury 2018',
  },
  {
    awardLogo: AwardImage4,
    awardName: 'Free Software Advice',
    awardDetails: 'Top Rated App Development Companies USA',
    awardeeLogo: Awardee4,
    awardeeName: 'Awardee',
    date: 'The Jury 2018',
  },
];

export const PORTFOLIO_SHOWCASE = [
  {
    title: 'JNL',
    portfolioItem: [
      {
        title: 'JNL, App and Website',
        description:
          "We supported JNL through a transition phase that required rebranding, designing and developing a new website. We supported them through development of an intranet infrastructure to help them run more efficiently.",
        image: PortfolioImage1,
        link: 'https://getjnl.com',
        featuredIn: 'AWWWARDS',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
      },
      {
        title: 'Tech Stack Used for the Project',
        description:
          " For the website we used Next JS along with styled components. For the intranet web app we used React JS, Node JS and Firestore for the database",
        image: PortfolioImage4,
        link: 'https://getjnl.com',
        featuredIn: 'AWWWARDS',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Next JS',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
    ],
  },
  {
    title: 'BUILDERCOG',
    portfolioItem: [
      {
        title: 'BuilderCog, Web App and Site',
        description: "BuilderCog is a start-up company that required support with branding, web design and development. They were very enthusiastic and confident about their project, so we wanted to translate that enthusiasm and confidence with their branding and their website.",
        image: PortfolioImage2,
        link: 'https://buildercog.com',
        featuredIn: 'AWWWARDS',
        featuredLink: 'https://buildercog.com',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
      },
      {
        title: 'Tech Stack Used for the Project',
        description: "The app for Buildercog was created using React JS, Node JS and Firestore. The website for Buildercog was created using Next JS and Styles Components.",
        image: PortfolioImage3,
        link: 'https://buildercog.com',
        featuredIn: 'AWWWARDS',
        featuredLink: 'https://buildercog.com',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Next JS',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
    ],
  },
  {
    title: 'WEB APPLICATION',
    portfolioItem: [
      {
        title: 'Web Application',
        description:
          "This web app allows for senior brokers in real estate, to post jobs to junior brokers. Junior brokers can gain experience that is required and for senior brokers to get help with their listings.",
        image: PortfolioImage5,
        link: 'https://bapp.thenerdstackdev.com/',
        featuredIn: 'AWWWARDS',
        featuredLink: '',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
      },
      {
        title: 'Tech Stack Used for the Project',
        description:
          "React JS was used for the frontend. The backend is Node using the Express framework and for the database Google Firestore.",
        image: PortfolioImage6,
        link: 'https://bapp.thenerdstackdev.com/',
        featuredIn: 'AWWWARDS',
        featuredLink: '',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Next JS',
          },
          {
            content: 'Styled Component',
          },
      ],
    },
    ],
  },
];

export const PROCESS_STEPS = [
  {
    image: Step1,
    title: '1. Research',
    description:
      'We work with you to understand user’s stories and validate your idea with real users using lean design sprints.',
  },
  {
    image: Step2,
    title: '2. Design',
    description:
      'Expanding on the insights gained, you’ll work closely with our design team to create an elegant design',
  },
  {
    image: Step3,
    title: '3. Build',
    description:
      'With our scrum-based agile methodology, you’ll receive iterative builds every two weeks, which gives you ',
  },
];

export const SERVICE_LIST = [
  {
    title: 'UI/UX Design',
    listItems: [
      {
        content: 'Photoshop',
      },
      {
        content: 'Illustrator',
      },
      {
        content: 'Figma',
      },
      {
        content: 'inDesign',
      },
    ],
  },
  {
    title: 'Web Development',
    listItems: [
      {
        content: 'ReactJS',
      },
      {
        content: 'NextJS',
      },
      {
        content: 'HTML',
      },
      {
        content: 'WordPress',
      },
      {
        content: 'NodeJS',
      },
      {
        content: 'CSS',
      },
    ],
  },
  // {
  //   title: 'Mobile App Development',
  //   listItems: [
  //     {
  //       content: 'iOS',
  //     },
  //     {
  //       content: 'Android',
  //     },
  //     {
  //       content: 'React Native',
  //     },
  //     {
  //       content: 'Ionic & Apache Cordova',
  //     },
  //     {
  //       content: 'NodeJS',
  //     },
  //     {
  //       content: '3D & VR',
  //     },
  //   ],
  // },
];

export const SKILLS = [
  {
    title: 'Graphic Design',
    description:
      'Aristotle maintained the sharp distinction between science and the practical',
    icon: SkillIcon1,
    successRate: '90',
  },
  {
    title: 'UI/UX Design',
    description:
      'Aristotle maintained the sharp distinction between science and the practical',
    icon: SkillIcon2,
    successRate: '85',
  },
  {
    title: 'Web Application',
    description:
      'Aristotle maintained the sharp distinction between science and the practical',
    icon: SkillIcon3,
    successRate: '80',
  },
  {
    title: 'Mobile Application',
    description:
      'Aristotle maintained the sharp distinction between science and the practical',
    icon: SkillIcon4,
    successRate: '70',
  },
];

export const CLIENTS = [
  {
    image: Client1,
    title: 'Microsoft',
  },
  {
    image: Client2,
    title: 'Airbnb',
  },
  {
    image: Client3,
    title: 'Adidas',
  },
  {
    image: Client4,
    title: 'IBM',
  },
  {
    image: Client5,
    title: 'Amazon',
  },
  {
    image: Client6,
    title: 'Google',
  },
];

export const TESTIMONIAL = [
  {
    image: Reviewer1,
    review:
      'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
    name: 'Jon Doe',
    designation: 'Founder & CEO',
    twitterProfile: 'https://twitter.com/redqinc',
    organization: '@Tonquin',
    organizationURL: 'https://redq.io/',
  },
  {
    image: Reviewer2,
    review:
      'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
    name: 'Jeny Doe',
    designation: 'Co-Founder & CTO',
    twitterProfile: 'https://twitter.com/redqinc',
    organization: '@Tonquin',
    organizationURL: 'https://redq.io/',
  },
  {
    image: Reviewer3,
    review:
      'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
    name: 'Jon Doe',
    designation: 'Co-Founder & COO',
    twitterProfile: 'https://twitter.com/redqinc',
    organization: '@Tonquin',
    organizationURL: 'https://redq.io/',
  },
];

import parentImg from 'common/assets/image/portfolio/javascript-code.jpeg';

export const aboutData = { 
  thumb_url: parentImg,
  title: 'Hi, We Are <br> Nerd Stack',
  text:
    'Our goal is to help companies discover what makes them unique and channel that into a memorable web experience that is specific to each business.',
  text2:
    'We design and develop digital products and online experiences that help our clients grow, innovate, and transform. We listen, learn and understand before we build. We identify your goals together, then use our expertise to find that impactful message.',
  text3: 
    'We keep our process simple, transparent, and customer-focused. We create best-in-class user experiences that translate into results. With over 6 years of experience working on different web design and development projects, we consistently deliver solutions that exceed expectations.',  
};

/* ------------------------------------ */
// Projects section data
/* ------------------------------------ */
import project1 from 'common/assets/image/portfolio/tech-circle.png';

export const projectData = {
  title: 'WORK PROCEDURE',
  slogan: 'How We Do Our Projects',
  thumb_url: project1,
  projects: [
    {
      id: 1,
      text:
        '1.) DISCOVERY',
      text2:
        'All of our projects begin with the discovery and defining of strategy. This is where we meet with you to understand your project needs, client drivers, and desired project outcome. We will develop a project strategy and initial project deliverables.',
    },
    {
      id: 2,
      text:
        '2.) INFORMATION ARCHITECTURE AND PLANNING',
      text2:
        'On more complex projects we involve Information Architects (IA) to create blueprints for the project which are submitted for your review. We will use wireframes which have layouts, features, and user-path flows to ensure the design is aligned with your goals.',
    },
    {
      id: 3,
      text:
        '3.) CREATIVE DESIGN',
      text2:
        'In this phase, we create beautiful, user-friendly, intuitive designs and interfaces. Every design project incorporates both creative and strategic aspects, with all elements and features well-considered and purposefully placed on the pages. This process ensures our designs look modern, creative, user-friendly to help you convert visitors into customers.',
    },
    {
      id: 4,
      text:
        '4.) DEVELOPMENT',
      text2:
        'This is the stage where we convert the beautiful and effective designs into a dynamic, responsive, and functional app. This is where the app starts coming to life.',
    },
    {
      id: 5,
      text:
        '5.) QA AND TESTING',
      text2:
        'After the development stage, performing quality assurance and testing is a must. We make sure that the app responds and functions correctly on different devices.',
    },
    {
      id: 6,
      text:
        '6.) LAUNCH',
      text2:
        'After the QA phase and the client’s approval, we prepare the website or app to be deployed.',
    },
    {
      id: 7,
      text:
        '7.) OPTIMIZATION AND MAINTENANCE',
      text2:
        'Any website or app requires continual updates and maintenance. Nerd Stack will be there with you. We offer different maintenance solutions depending on client needs.',
    },
  ],
};

/* ------------------------------------ */
// Blog section data
/* ------------------------------------ */
import { Icon } from 'react-icons-kit';
import { socialDribbble } from 'react-icons-kit/ionicons/socialDribbble';
import { socialGoogleplus } from 'react-icons-kit/ionicons/socialGoogleplus';
import { socialSkype } from 'react-icons-kit/ionicons/socialSkype';

import member1 from 'common/assets/image/portfolio/blogPics/I-develop-websites.jpg';
import member2 from 'common/assets/image/portfolio/blogPics/branding-blogcard.jpg';
import member3 from 'common/assets/image/portfolio/blogPics/chain.jpg';

export const teamData = {
  title: 'OUR BlOG',
  slogan: 'Read our Blog',
  members: [
    {
      id: 1,
      avatar: member1,
      name: 'Top 5 Reasons Your Company Needs a Website',
      link: '/blog/Top-5-Reasons-Your-Company-Needs-a-Website',
      designation: 'Starting a new company is very exciting, but it also comes with some stress and takes a lot of work.',
      social_links: [
        {
          id: 1,
          icon: <Icon icon={socialFacebook} />,
          url: '#1',
        },
        {
          id: 2,
          icon: <Icon icon={socialDribbble} />,
          url: '#1',
        },
        {
          id: 3,
          icon: <Icon icon={socialGoogleplus} />,
          url: '#1',
        },
        {
          id: 4,
          icon: <Icon icon={socialSkype} />,
          url: '#1',
        },
        {
          id: 5,
          icon: <Icon icon={socialTwitter} />,
          url: '#1',
        },
      ],
    },
    {
      id: 2,
      avatar: member2,
      name: 'Why Online Branding is Important for Your Business.',
      link: '/blog/Why-Online-Branding-is-Important-for-Your-Business',
      designation: 'Your website is likely the way that new customers are going to find your company. They will find you online...',
      social_links: [
        {
          id: 1,
          icon: <Icon icon={socialFacebook} />,
          url: '#1',
        },
        {
          id: 2,
          icon: <Icon icon={socialDribbble} />,
          url: '#1',
        },
        {
          id: 3,
          icon: <Icon icon={socialGoogleplus} />,
          url: '#1',
        },
        {
          id: 4,
          icon: <Icon icon={socialSkype} />,
          url: '#1',
        },
        {
          id: 5,
          icon: <Icon icon={socialTwitter} />,
          url: '#1',
        },
      ],
    },
    {
      id: 3,
      avatar: member3,
      name: 'What is Blockchain Technology?',
      link: '/blog/What-is-Blockchain-Technology',
      designation: 'With the rise of cryptocurrencies you might have heard of the term blockchain, but what is a blockchain? And how will it affect the future? ',
      social_links: [
        {
          id: 1,
          icon: <Icon icon={socialFacebook} />,
          url: '#1',
        },
        {
          id: 2,
          icon: <Icon icon={socialDribbble} />,
          url: '#1',
        },
        {
          id: 3,
          icon: <Icon icon={socialGoogleplus} />,
          url: '#1',
        },
        {
          id: 4,
          icon: <Icon icon={socialSkype} />,
          url: '#1',
        },
        {
          id: 5,
          icon: <Icon icon={socialTwitter} />,
          url: '#1',
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// Services Offered and About us Homepage sections data
/* ------------------------------------ */
const servicesData = { 

  aboutus: [
    {
      id: 1,
      title: 'We think with you - Lets discuss your needs.',
      icon: 'flaticon-next',
    },
    {
      id: 2,
      title: 'We envision with you - We will come up with a plan to help achieve your goals.',
      icon: 'flaticon-next',
    },
    {
      id: 3,
      title: 'We build with you - We help execute the plan.',
      icon: 'flaticon-next',
    },
  ],
  features: [
    // {
    //   id: 1,
    //   icon: 'flaticon-flask',
    //   title: 'Search Optimization',
    //   description:
    //     'It is important that your website is easily visable to search engines so that your website is indexed and crawled correctly by search engine spiders. This will allow your site to generate more organic leads.',
    // },
    {
      id: 2,
      icon: 'flaticon-briefing',
      title: 'SEO',
      link: '/',
      description:
        'Our SEO experts believe that it is important that your companys search results reflect the high-quality, professional website we will help you design for your business. We understand that search engine optimization is not just about getting to the top of a list, it is more about staying there and making sure potential customers can find you easily. To accomplish these goals Nerd Stack has put together a team of highly skilled SEO experts who are trained in all aspects of custom website design and internet marketing.',
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'Development',
      link: '/',
      description:
        'Nerd Stack is a web development company that specializes in building large scale applications using modern frameworks like Next JS and React JS. The reason why we prefer to use these technologies over other frameworks or libraries is because they are faster, and allow us to create full-stack applications from frontend to backend. We at Nerd Stack feel that the only way to complete a project to the best of our ability is by using our own tools, allowing us to create web applications with both speed and accuracy.',
    },
    {
      id: 4,
      icon: 'flaticon-startup',
      title: 'Consulting',
      link: '/',
      description:
        `Our consulting services to a variety of clients, from new start-ups to non-profit organizations. Our team has an extensive list of experience in web design and development, ranging from design to coding. Our Nerds are always happy to discuss your needs and offer you the best solution at an affordable rate. 
          Nerd Stack's consulting services include:
          Ways to optimize your SEO,
          What technologies should be used for a project,
          Website audits,
          and Design services including logo design, banner ads, website rebranding, UI
        '`,
    },
    {
      id: 5,
      icon: 'flaticon-pencil-case',
      title: 'Design',
      link: '/',
      description:
        `We will provide you with a custom design that fits your business's industry and is appealing to your target audience. We believe that the best way to make customers happy is through designs tailored to their individual needs. Our web design services give our clients' sites a look of professionalism, bringing in customers and making them want to return for more.`,
    },
    // {
    //   id: 6,
    //   icon: 'flaticon-briefing',
    //   title: 'Blockchain Smart Contracts',
    //   description:
    //     'Using Solidity we are able to write smart contracts on the Ethereum Blockchain. We are able to build whatever app fits your needs.',
    // },
    
  ],
  qualityFeature: [
    {
      id: 1,
      icon: 'flaticon-flask',
      title: 'Search Optimization',
      description:
        'By using Search Engine Optimization, You will get more Clients.',
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Wireframing Task',
      description:
        'We respect our customer opinions and deals with them with perfect wireframing.',
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'Ui/Ux Design',
      description:
        'We provide the best UI/UX Design by following the latest trends of the market .',
    },
    {
      id: 4,
      icon: 'flaticon-briefing',
      title: 'Content Writting',
      description:
        'Proper Content Management is important to find out the real clients for your agencies .',
    },
  ],
};
export default servicesData;

/* ------------------------------------ */
// Past Projects section data
/* ------------------------------------ */
import thumbImage1 from 'common/assets/image/portfolio/project/website-on-computer.jpg';
import thumbImage2 from 'common/assets/image/portfolio/project/computer-coding.jpg';
import thumbImage3 from 'common/assets/image/portfolio/project/mobile-app-phone.jpg';
import thumbImage4 from 'common/assets/image/portfolio/project/person-coding-website.jpeg';

export const openingLine = {
  title: 'Check out our past work',
  slogan:
    'These are some past projects that we have designed and developed for clients',
}

export const pastProjectData = [
  {
    id: 1,
    menuItem: 'JNL',
    image: thumbImage1,
    slogan: 'JNL',
    title: `Web App <strong>React JS</strong>
    Website <strong>Next JS</strong> 
     Backend <strong>Node</strong>`,
    description:
      'JNL is a construction company based in Denver. They initially asked us to build an intranet infrastructure to enable them to better communicate with their in-house employees and provide on-the-go updates on current projects. We designed and built  an intranet app to accomplish their needs using React. This was followed by a second project. We developed a focused branding logo and messaging, and built a new website that aligned with that branding.',
    linkUrl: 'https://getJNL.com',
    linkText: 'Visit Site',
  },
  {
    id: 2,
    menuItem: 'BUILDERCOG',
    image: thumbImage2,
    slogan: 'BuilderCog',
    title: `Web App <strong>React JS</strong> 
    Website 
    <strong>Next JS</strong> Backend <strong>Node</strong>
    `,
    description:
      'BuilderCog is a startup company. They needed branding, design and development of their first website. We decided that the best approach was to create a website using the React library because this will allow flexibility in their tech stack since they were already planning on building their mobile app in React Native. Working collaboratively with BuilderCog, we created a modern website that presents their company values and message.',
    linkUrl: 'https://buildercog.com',
    linkText: 'Visit Site and App',
  },
  {
    id: 3,
    menuItem: 'SAAS APP',
    image: thumbImage3,
    slogan: 'Saas App',
    title: `Web App <strong>React JS</strong> 
    Backend 
    <strong>Node</strong> Database <strong>Firestore</strong>`,
    description:
      'We developed an app that connects General Contractors with Subcontractors. The app is designed to eliminate the project staffing inefficiencies that plague the construction industry and to enhance transparency between GCs and Subs. The app allows GCs to easily post open jobs which are visible to qualified Subs. The Subs can accept relevant jobs online and a Construction Contract is created for each job. The app uses React library and Firebase cloud storage as the back end. This allows scalability between mobile and web based apps.',
    linkUrl: '#1',
    // linkText: 'SEE MORE OF OUR IMPACT',
  },
  {
    id: 4,
    menuItem: 'U RUN IT',
    image: thumbImage4,
    slogan: 'Broker App',
    title: `Web App <strong>React JS</strong> 
    Backend
    <strong>Node</strong> Database <strong>Firestore </strong>
    `,
    description:
      'This was an app developed so that local Real Estate brokers can find junior brokers to help them out with their listings.',
    // linkUrl: '#1',
    // linkText: 'SEE MORE OF OUR IMPACT',
  },
];


/* ------------------------------------ */
// Service section Page data
/* ------------------------------------ */
export const servicesPage = [
  {
    id: 1,
    expanded: true,
    title: 'Development',
    desc:
      'We’re a different kind of agency. We design and develop digital products and online experiences that help our clients grow, innovate, and transform. We listen, learn, and understand before we build. We identify your goals together, then use our expertise to develop impactful messages. With more than 6 years in the field of web and mobile development, we excel at creating web-based applications, mobile applications, websites, and different kinds of software and individual components.',
    desc2:
      'We listen, learn, and understand before we build. We identify your goals together, then use our expertise to develop impactful messages. With more than 6 years in the field of web and mobile development, we excel at creating web-based applications, mobile applications, websites, and different kinds of software and individual components.', 
  },
  {
    id: 2,
    expanded: false,
    title: 'UI/UX',
    desc:
      'Stunning app design goes beyond just picking the right fonts, colors, and images. We design and build intuitive apps that focus on a total user experience aligned with your goals by bringing together information into the UX Design process to create extensive wireframes (i.e. blueprints) for the entire application, making sure all user experiences are taken into account.',
    desc2:
      'We listen, learn, and understand before we build. We identify your goals together, then use our expertise to develop impactful messages. With more than 6 years in the field of web and mobile development, we excel at creating web-based applications, mobile applications, websites, and different kinds of software and individual components.',  
  },
  {
    id: 3,
    expanded: false,
    title: "Consulting",
    desc:
      'We provide strong project leadership and strategic guidance when evaluating the challenges and goals of your project. We have the experience to hand-craft any solution. We co-create this with you by digging into your user stories and data. Then we resource and build out the team, the plan, and the timeline. We keep the scope sane and flexible so we can stay agile and reactive.',
  },
  {
    id: 4,
    expanded: false,
    title: "Web design",
    desc:
      'We know that you understand your customers better than anyone, and we will help you turn that knowledge into a beautifully crafted design. We’ll help create a design that elevates your brand and supports your company’s mission. The design will be engaging, built upon user experience, strategy, and user behavior, offering an optimized UI design. At Nerd Stack our main goal is to create a design that communicates directly with your target audiences and gets them engaged with your website.',
  },
];
