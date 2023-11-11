import p1 from "/public/assets/images/project/p1.jpg";
import p2 from "/public/assets/images/project/p2.jpg";
import p3 from "/public/assets/images/project/p3.jpg";

export const projects = [
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
