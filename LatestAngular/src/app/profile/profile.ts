import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {


  resume = {
  firstName: 'Valentina',
  lastName: 'Morato',
  jobTitle: 'Frontend Developer, Chemical Engineer',
  photo: 'https://avatars.githubusercontent.com/u/47432636?s=460&u=0dd359fdfa1689afcfd1ea9ece1487293ee7c193&v=4',
  city: 'Medellin',
  postalCode: '050023',
  country: 'Colombia',
  phone: `+573156208581 \n+573113101122`,
  email: 'vmorato1205@hotmail.com',
  education: [
    {
      school: 'Universidad Pontificia Bolivariana',
      degree: 'Bachelor',
      graduationDate: '2016',
      description: 'Chemical Engineering'
    }
  ],
  links: [
    {
      label: 'GitHub',
      link: 'https://github.com/vmoratog'
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/vmoratog'
    },
    {
      label: 'Website',
      link: 'https://vmoratog.github.io'
    }
  ],
  skills: [
    'HTML',
    'JavaScript',
    'CSS',
    'Ionic',
    'Angular',
    'Sass',
    'Vue',
  ],
  languages: ['English', 'Spanish'],
  professionalSummary: `Front-end developer with 2 years of experience, I have a background in web and hybrid mobile development using technologies such as HTML5, CSS3, JavaScript, Ionic (Angular), Vue and version control systems such as Git/GitHub and BitBucket, as well as using Scrum and Kanban methodologies. In addition to my technical skills, I am a team-oriented and organized individual with a passion for continuous learning and the development of optimal solutions. I hold a degree in Chemical Engineering and have 2 years of experience in that field.`,
  employmentHistory: [
      {
      jobTitle: 'Software Engineer',
      startDate: 'Jun 2021',
      endDate: 'Present',
      employer: 'Growth Acceleration Partners',
      city: 'Medellein - Remote',
      achievements: [
        `Develop responsive, mobile-first layouts and ensure accessibility`,
        `Implement user-facing features using front-end technologies and frameworks, such as HTML, CSS, JavaScript, and Vue/Vuetify`,
        `Migrated an old app built in Backbone.js to Vue.js, improving performance and scalability while maintaining functionality`,
        `Provided maintenance to the old applications`,
        `Stay up-to-date with emerging technologies and industry trends, and continually improve your skills and knowledge`,
        `Participate in agile development methodologies, including stand-ups, sprint planning, and code reviews`,
        `Communicate effectively with team members and stakeholders to discuss project progress and requirements.`,

      ]
    },
    {
      jobTitle: 'Freelancer - Front-End Developer',
      startDate: 'Oct 2019',
      endDate: 'Oct 2020',
      employer: 'InLabs',
      city: 'Remote',
      achievements: [
        `I created an hybrid mobile application for android, ios and web, using technologies such
as HTML5, CSS (SASS), Ionic Framework, Angular, PhoneGap/Cordova.`,
        `I implemented an Admin Dashboard for the administration of the application, applying
Responsive Design to be used from web and mobile.`,
      ]
    },
    {
      jobTitle: 'Freelancer - Front-End Developer',
      startDate: 'Mar 2019',
      endDate: 'Apr 2019',
      employer: 'Crowdswap',
      city: 'Remote',
      achievements: [
        `I redesigned the new responsive website for Crowdswap using React with Gatsby for
static pages generation.`
      ]
    },
    {
      jobTitle: 'Research and Development Engineer',
      startDate: 'Feb 2017',
      endDate: 'Aug 2018',
      employer: 'Senco Colombiana',
      city: 'Medellín',
      achievements: [
        'Evaluate the quality of raw materials and product in production line.',
        'Study of different materials and its possible inclusion to the process as raw materials or as additives.'
      ]
    }
  ]
}
}
