import p1 from "/public/assets/images/project/btb.png";
import p2 from "/public/assets/images/project/barclays.png";
import p3 from "/public/assets/images/project/simplihacks.png";

export const projects = [
  {
    title: "Barclays Hackathon",
    image: p2,
    isActive: false,
    link: "https://github.com/NomanKhan3701/CreditMate",
    youtube: "https://youtu.be/bvaLu5hDWVQ",
    techs: ["React Native", "CSS"],
    // desc: "A website for club presidents to request event approvals from mentors and Dean academics. It includes room availability checks, mail service integration, and meeting scheduling",
    desc: "Awarded the Best Innovative Solution Award and SDE-1 role at the Barclays Data Steller Hackathon, competing against 300+ teams in a 2-day hackathon.",
  },
  {
    title: "Break The Barrier",
    image: p1,
    isActive: false,
    mobile: true,
    link: "https://github.com/NomanKhan3701/FrontendBreakTheBarrier",
    youtube: "https://www.youtube.com/watch?v=-2DVUYi4LlI",
    techs: ["NextJS", "Redux", "Razorpay", "Firebase Notification", "Nodejs"],
    desc: "Secured first prize in the Break the Barrier Hackathon, triumphing over 200+ competing teams during the intensive 2-day event.",
  },
  {
    title: "SimpliHacks2.0",
    image: p3,
    isActive: false,
    link: "https://github.com/NomanKhan3701/TechiePirate_SimplyHacks",
    youtube: "https://youtu.be/uKH4lSk7ulk",
    techs: ["React", "SCSS"],
    desc: "Secured first place in the international SimpliHacks2.0 hackathon, outshining 409 participants during the intense 2-day competition.",
  },
];
