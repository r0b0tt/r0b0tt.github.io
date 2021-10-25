module.exports = {
  siteTitle: 'Antonio Maina | Software Engineer',
  siteDescription:
        'Antonio Maina is a software engineer based in Nairobi, Kenya  who specializes in building and helping build digital products that make a difference',
  siteKeywords:
        'Antonio Maina, Antonio, Maina, r0b0tt, __r0b0t__, software engineer, front-end engineer, full stack developer, web developer, nairobi, kenya',
  siteUrl: 'https://antoniomaina.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-135464428-1',
  name: 'Antonio Maina',
  location: 'Nairobi, Kenya',
  email: 'antoniomainakn@gmail.com',
  github: 'https://github.com/r0b0tt',
  twitterHandle: '@__r0b0t__',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/r0b0tt',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/antoniomaina',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/__r0b0t__',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/__r0b0t__',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
      external: false,
    },
    {
      name: 'Experience',
      url: '/#jobs',
      external: false,
    },
    {
      name: 'Work',
      url: '/#projects',
      external: false,
    },
    {
      name: 'Contact',
      url: '/#contact',
      external: false,
    },
    {
      name: 'Blog',
      url: 'https://antonio.hashnode.dev',
      external: true,
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
