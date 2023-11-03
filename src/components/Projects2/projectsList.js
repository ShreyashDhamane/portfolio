import p1 from "/public/assets/images/project/p1.jpg";
import p2 from "/public/assets/images/project/p2.jpg";
import p3 from "/public/assets/images/project/p3.jpg";

export const projects = [
  {
    title: "Credit Mate",
    image: p2,
    isActive: false,
    link: "https://github.com/NomanKhan3701/ClubHive",
    youtube: "https://youtu.be/vOUG_4s31eI",
    techs: ["NextJS", "Redux", "Razorpay", "Firebase Notification", "Nodejs"],
    desc: "A website for club presidents to request event approvals from mentors and Dean academics. It includes room availability checks, mail service integration, and meeting scheduling",
  },
  {
    title: "CreditMate",
    image: p1,
    isActive: false,
    mobile: true,
    link: "https://github.com/NomanKhan3701/CreditMate",
    youtube: "https://youtu.be/bvaLu5hDWVQ",
    techs: ["React Native", "CSS"],
    desc: "CreditMate is a location-based offer catalog platform with loyalty and rewards program that sends personalized offerings to customers based on real-time data and preferences",
  },
  {
    title: "WeChange",
    image: p3,
    isActive: false,
    link: "https://github.com/NomanKhan3701/TechiePirate_SimplyHacks",
    youtube: "https://youtu.be/uKH4lSk7ulk",
    techs: ["React", "SCSS"],
    desc: "A web app for eco-friendly events and content. Users can post and filter based on category and location. It includes a leaderboard incentivizing donations, with payments processed through Stripe",
  },
];
