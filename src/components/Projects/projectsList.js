import p1 from "/public/assets/images/project/p1.jpg";
import p2 from "/public/assets/images/project/p2.jpg";
import p3 from "/public/assets/images/project/p3.jpg";
import p4 from "/public/assets/images/project/p4.png";
import p5 from "/public/assets/images/project/p5.png";
export const projects = [
  {
    title: "Nightwalkers",
    image: p5,
    isActive: false,
    link: "https://github.com/ShreyashDhamane/software-engineering",
    youtube: "https://www.youtube.com/watch?v=1FTpDpkkGlQ",
    techs: [
      "Next.js",
      "Django",
      "Firebase",
      "PostgreSQL",
      "Mapbox",
      "NYC Crime Data",
      "Python",
      "Tailwind CSS",
      "React",
      "Push Notifications",
      "WebSocket",
    ],
    desc: "Nightwalkers is a web platform that helps people in NYC find the safest walking routes at night. It uses real-time NYC crime data, Mapbox maps, and WebSocket-based live communication for safety alerts. Users can view crime hotspots, report incidents, get push notifications, and access helpful safety resources. The site also features a community forum and admin tools to support safer night travel across the city.",
  },
  {
    title: "Nesters",
    image: p4,
    isActive: false,
    link: "https://github.com/ShreyashDhamane",
    youtube: "https://www.youtube.com/watch?v=hDoG8sCC82U",
    techs: [
      "Flutter",
      "Firebase",
      "Push Notification",
      "Supabase",
      "Google Maps",
      "GitHub Actions",
    ],
    desc: "Nesters is a community-driven mobile app designed to simplify life for international students. Find roommates, connect with college mates, and buy or sell second-hand items easily. Explore sublease listings, discover campus-specific communities, and share student life hacks. Now available on iOS — making settling abroad easier, smarter, and more social.",
  },
  {
    title: "ClubHive",
    image: p2,
    isActive: false,
    link: "https://github.com/NomanKhan3701/ClubHive",
    youtube: "https://youtu.be/vOUG_4s31eI",
    techs: ["NextJS", "Redux", "Razorpay", "Firebase Notification", "Nodejs"],
    desc: "Developed a comprehensive website enabling university clubs to request event approvals and resources from the necessary authorities. The platform includes features such as room availability checks, integration with mail services, global event calendars, and meeting scheduling.",
  },
  {
    title: "CreditMate",
    image: p1,
    isActive: false,
    mobile: true,
    link: "https://github.com/NomanKhan3701/CreditMate",
    youtube: "https://youtu.be/bvaLu5hDWVQ",
    techs: ["React Native", "CSS"],
    desc: "CreditMate is an AI-powered, location-based offer catalog platform featuring a loyalty and rewards program. It delivers personalized offerings to customers based on real-time data and preferences.",
  },
  {
    title: "WeChange",
    image: p3,
    isActive: false,
    link: "https://github.com/NomanKhan3701/TechiePirate_SimplyHacks",
    youtube: "https://youtu.be/uKH4lSk7ulk",
    techs: ["React", "SCSS"],
    desc: "A web app for eco-friendly events and content. Users can post and filter based on category and location. It includes a leaderboard incentivizing donations, with payments processed through Stripe.",
  },
];
