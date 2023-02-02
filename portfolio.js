import emoji from 'react-easy-emoji';

export const greetings = {
  name: ' <Rudra Pramanik/> ',
  title: 'Top rated Frontend developer at Upwork',
  description: 'I am a Junior Software Developer,',
  resumeLink:
    'https://docs.google.com/document/d/16q5j9YaZT-3DkdB2TT0OM-gnf7QnutYHC6eTST165vI/edit',
  // resumeLink: '',
};

export const openSource = {
  githubUserName: 'rudrapramanik',
};

export const contact = {};

export const socialLinks = {
  instagram: 'https://www.instagram.com/rudra_himangshoo/',
  github: 'https://github.com/RudraPramanik',
  linkedin: 'https://www.linkedin.com/in/rudra-pramanik99/',
  discord: '',
  blog: '',
};

export const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE ',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/webdev.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications.'
        ),
        emoji(
          '⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks.'
        ),
        emoji(
          '⚡ Cyber Security, HackTheBox Globally Ranked 534, Top 2% in PicoCTF 2022'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'javascript',
          fontAwesomeClassname: 'logos:javascript',
        },
        {
          skillName: 'typescript',
          fontAwesomeClassname: 'logos:typescript-icon',
        },
        {
          skillName: 'reactjs',
          fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'NextJS',
          fontAwesomeClassname: 'logos:nextjs-icon',
        },
        {
          skillName: 'nodejs',
          fontAwesomeClassname: 'logos:nodejs-icon',
        },
        {
          skillName: 'Graphql',
          fontAwesomeClassname: 'logos:graphql',
        },
        {
          skillName: 'npm',
          fontAwesomeClassname: 'logos:npm-icon',
        },
        {
          skillName: 'firebase',
          fontAwesomeClassname: 'logos:firebase',
        },
        {
          skillName: 'tRPC',
          fontAwesomeClassname: 'logos:trpc',
        },
        {
          skillName: 'yarn',
          fontAwesomeClassname: 'logos:yarn',
        },
        {
          skillName: 'React-storybook',
          fontAwesomeClassname: 'logos:storybook-icon',
        },
        {
          skillName: 'TailwindCSS',
          fontAwesomeClassname: 'logos:tailwindcss-icon',
        },
        {
          skillName: 'Vercel',
          fontAwesomeClassname: 'logos:vercel-icon',
        },
        {
          skillName: 'Babel',
          fontAwesomeClassname: 'logos:babel',
        },
        {
          skillName: 'MongoDB',
          fontAwesomeClassname: 'logos:mongodb-icon',
        },
        {
          skillName: 'postgresQL',
          fontAwesomeClassname: 'logos:postgresql',
        },
        {
          skillName: 'Redux',
          fontAwesomeClassname: 'logos:redux',
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: 'Programming',
  },
  {
    Stack: 'Frontend ',
  },
  {
    Stack: 'Backend',
  },
  // {
  //   Stack: 'Security',
  // },
];

export const educationInfo = [
  {
    schoolName: 'HSTU',
    subHeader: 'Bachelor of Science in MECHANICL ENGINEERING',
    duration: 'april 2018 - 2022',
    grade: '3',
    desc: 'Engineering',
    descBullets: [],
    github: 'https://github.com/BrendanGlancy/akron/',
  },
  {
    schoolName: 'Learning Journey',
    subHeader: 'Full Stack Development',
    duration: 'September 2018 - Present',
    desc: 'Programming to learn Full Stack Development',
    descBullets: [
      '  Functional Programming: JavaScript/ Typescript',
      '  Web Application Development: HTML, CSS, JavaScript, Typescript, ReactJS, NextJS, TailwindCss',
      '  Database Programming: MongoDb, PostgresQL, Firebase, GraphQL',
      '  Completed 1000+ hours of JavaScript, Typescript, Reactjs,  training',
      '  Completed 2000+ hours of Industry experience of Frontend Development',
    ],
    github: 'https://github.com/RudraPramanik',
  },
];

export const experience = [
  {
    role: 'Junior Frontend Software Engineer',
    company: 'White Citadel',
    companylogo: '/img/icons/common/wc.jpg',
    date: 'June 2021 – Present',
    desc: 'It is an incredeble journey of my career. I struggled initially with there code base but the work environment never let me down , what a Happy team. Our products used by million of Users in Netherlands. Hope this Company would go really big',
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Adecore',
    companylogo: '/img/icons/common/ovs.png',
    date: 'December 2020- jun 2021',
    descBullets: [
      'just at the begining of my career. Obviously I was not thet expart that time. I struggled, I learned, I tried again & again',
    ],
  },
];

export const projects = [
  {
    name: 'admin-panel',
    image: '/img/icons/common/admin.png',
    desc: 'NextJs, Typescript, React-Query, Graphql',
    github:
      'https://github.com/RudraPramanik/react-threejs-cryptocurrencytracker',
    link: 'https://admin-six-smoky.vercel.app/',
    tags: ['NextJs, Typescript, React-Query, Graphql'],
  },
  {
    name: 'Nike',
    image: '/img/icons/common/nike.png',
    desc: 'NextJs, Typescript, React-Query, Graphql',
    github:
      'https://github.com/RudraPramanik/react-threejs-cryptocurrencytracker',
    link: 'https://nike-zeta-five.vercel.app/',
    tags: ['NextJs, Typescript, React-Query, Graphql'],
  },
  {
    name: 'Bestenu',
    // image: '/img/icons/common/besten.png',
    image: '/img/icons/common/beste.png',

    desc: 'NextJs, Typescript, React-Query, Graphql',
    link: 'https://bestenu.nl/',
    tags: ['NextJs, Typescript, React-Query, Graphql'],
    image: '',
  },
  {
    name: 'Bravo',
    image: '/img/icons/common/beste.png',
    desc: 'NextJs, Typescript, React-Query, Graphql',
    link: 'https://beste.xyz/',
    tags: ['NextJs, Typescript, React-Query, Graphql'],
  },
  {
    name: 'Lytespark',
    image: '/img/icons/common/lyte.png',
    desc: 'NextJs, Typescript, React-Query, Graphql',
    link: 'https://www.lytespark.com/',
    tags: ['NextJs, Typescript, React-Query, Graphql'],
  },
  {
    name: 'Delta',
    image: '/img/icons/common/tbeste.png',
    desc: 'NextJs, Typescript, React-Query, Graphql',
    github: 'https://tbeste.xbeste.nl/',
    link: 'https://tbeste.xbeste.nl/',
    tags: ['NextJs, Typescript, React-Query, Graphql'],
  },
  {
    name: 'parlour',
    image: '/img/icons/common/parlour.png',
    desc: 'NextJs, Typescript, React-Query, Graphql',
    github: 'https://github.com/Coontz1/myWebsite',
    link: 'https://www.lytespark.com/',
    tags: ['NextJs, Typescript, React-Query, Graphql'],
  },
  {
    name: 'Hulu-clone',
    image: '/img/icons/common/hulu.png',
    desc: 'NextJs, Typescript, React-Query, Graphql',
    github: 'https://github.com/RudraPramanik/hulu-landingpage-clone',
    link: 'https://hulu-landingclone.vercel.app/',
    tags: ['NextJs, Typescript, React-Query, Graphql'],
  },
  {
    name: 'Hotel-Switzerland',
    image: '/img/icons/common/resort.png',
    desc: 'NextJs, Typescript, React-Query, Graphql',
    github: 'https://github.com/RudraPramanik/hotelreservation',
    link: 'https://hotel-switzerland.netlify.app/',
    tags: ['NextJs, Typescript, React-Query, Graphql'],
  },
  {
    name: 'StartUp',
    image: '/img/icons/common/landing.png',
    desc: 'NextJs, Typescript, React-Query, Graphql',
    github: 'https://github.com/RudraPramanik/next-landingpage',
    link: 'https://next-premimum-landingpage.netlify.app/',
    tags: ['NextJs, Typescript, React-Query, Graphql'],
  },
];

export const feedbacks = [
  {
    name: 'Austin Coontz',
    feedback:
      'I was trying to make a website that is blazingly fast. I had no idea where to start. What did I do? Called my friend Brendan. I had no Idea what i Was doing! He fixed it. Website? Fast. Blazingly. Done.',
  },
];

export const seoData = {
  title: "Rudra's Portfolio",
  description: 'Full Stack Developer',
  image: 'https://avatars.githubusercontent.com/u/61941978?v=4',
  url: 'https://dev-port-lac.vercel.app/',
  keywords: [
    'Rudra',
    'Rudra Pramanik',
    'rudra pramanik',
    'rudrapramanik',
    'Portfolio',
    'Reactjs',
    'Nextjs',
    'Full Stack Developer',
    'Full Stack',
    'Open to work',
    'Developer',
    'Frontend',
    'Rudra Portfolio ',
    'Rudra Pramanik Portfolio',
    'web developer',
    'empyrial',
    'Empyrial',
    'best react developer',
    'LinkedIn',
    'Github',
    'Frontend developer',
    'top rated',
    'linkdin',
    'Upwork',
    'White Cetadel',
  ],
};
