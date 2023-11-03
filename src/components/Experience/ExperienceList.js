import studypaqFav from "/public/assets/images/studypaqFav.svg";
import buycepsFav from "/public/assets/images/buycepsFav.png";
import buyceps from "/public/assets/images/Buyceps.png";
import studypaq from "/public/assets/images/studypaq.png";
import studypaq2 from "/public/assets/images/studypaq2.png";
import vedika from "/public/assets/images/vedika.png";
import vedika1 from "/public/assets/images/vedika1.png";
import vedika2 from "/public/assets/images/vedika2.png";

export const experiences = [
    {
        startDate: 'May 2023',
        endDate: 'Present',
        company: 'Vedika.ai',
        role: 'Frontend Developer',
        type: 'Internship',
        images: [
            vedika,
        ],
        color: '#F5F5F5',
        workList: [
            'Leading the frontend team at vedika.ai',
            'Responsible for developing the MVP from scratch. Architecting the frontend according to the design requirements',
            'Leveraged knowledge of Next.js, Sass, Redux'
        ]
    },
    {
        startDate: 'Dec 2022',
        endDate: 'May 2023',
        company: 'Buyceps',
        role: 'Frontend Developer',
        type: 'Internship',
        favIcon: buycepsFav,
        color: '#6a6a6a',
        images: [
            buyceps
        ],
        workList: [
            'Responsible for optimizing SEO, and ensuring mobile and tablet responsiveness for our company website. Provided technical leadership and mentorship to junior developers',
            'Implemented automated testing using Cypress for our Next.js website, resulting in reliable website performance',
            'Used Technologies - Next.js, Cypress, styled-components, GraphQL, Tapfiliate, Algolia'
        ]
    },
    {
        startDate: 'Jun 2022',
        endDate: 'Dec 2022',
        company: 'StudyPaq',
        type: 'Internship',
        role: 'Frontend Developer',
        favIcon: studypaqFav,
        color: '#ecdab0',
        images: [
            studypaq
        ],
        workList: [
            'Translated 100+ Figma frames into responsive Next.js code, delivering a timely and visually accurate web project',
            'Led the development of a prototype that advanced our project to the final funding rounds',
            'Collaborated with our partner to refine the prototype to meet their specific needs, resulting in a successful partnership with Learnit',
            'Leveraged knowledge of Next.js, Sass, Redux, Responsive Web Design, Selenium'
        ]
    }
]