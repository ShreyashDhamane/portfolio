import studypaqFav from "/public/assets/images/studypaqFav.svg";
import buycepsFav from "/public/assets/images/buycepsFav.png";
import aim4u from "/public/assets/images/aim4u.png";
import aicoms from "/public/assets/images/aicoms.png";
import autobuddys from "/public/assets/images/autobuddys.png";
import smowcode from "/public/assets/images/smowcode.png";
import tesla from "/public/assets/images/tesla.gif";
export const experiences = [
  {
    startDate: "May 2025",
    endDate: "August 2025",
    company: "Tesla",
    role: "SDE Intern",
    type: "Internship",
    images: [tesla],
    color: "#F5F5F5",
    workList: ["Built a desktop application using React, TypeScript, Tailwind, FastAPI and Go (Wails), used daily by 2K+ employees",
      "Designed a high-throughput time-series dashboard using React, uPlot, Tailwind, FastAPI and Prometheus",
      "Maintained and added 10+ features to an internal LLM ecosystem, handling 1.5M+ requests per day",
      "Led 7 user interviews to validate and refine Figma UI designs, enhancing UX through real user insights",
      "Member of the intern event planning committee; organized an intern potluck and a Jeopardy game"],
  },
  {
    startDate: "May 2023",
    endDate: "May 2024",
    company: "Aicom",
    role: "Software Developer Intern",
    type: "Internship",
    images: [aicoms],
    color: "#F5F5F5",
    workList: [
      "Built a sales and management system using React and Flutter, saving $3,000/year and 10 hours/week",
      "Integrated Viva payment terminals and webhooks for processing payments exceeding 5 million euros",
      "Implemented the entire modularized Node.js backend with CI/CD and mutex locks for data consistency",
      "Developed efficient custom algorithms for shift scheduling and inventory management, saving 15 hours/week",
    ],
  },
  {
    startDate: "January 2022",
    endDate: "May 2023",
    company: "Aim4U",
    role: "Software Intern and Team Leader",
    type: "Research Internship",
    favIcon: buycepsFav,
    color: "#6a6a6a",
    images: [aim4u],
    workList: [
      "Launched a quiz platform using React (TypeScript) with a Django backend hosted on AWS EC2",
      "Improved user experience by updating the UI across 50+ screens in Flutter",
      "Resolved Razorpay payment issues and perfected FCM notifications, enhancing delivery time by 40%",
      "Implemented a Skin Type Indicator model with ResNet-50 and applied data engineering to achieve over 88% accuracy.",
      "Built a content-based recommendation system utilizing Vader Lexicon and skin type model to recommend suitable skin care products for effective treatment with above 90% accuracy.",
      "Led a team of 12 junior interns, oversaw daily updates, resolved issues, and provided regular updates to mentor. Handled machine learning, web and mobile application development.",
    ],
  },
  {
    startDate: "August 2022",
    endDate: "October 2022",
    company: "AutoBuddys",
    type: "Research Internship",
    role: "Research Intern",
    favIcon: studypaqFav,
    color: "#ecdab0",
    images: [autobuddys],
    workList: [
      "Improved systolic and diastolic blood pressure detection model's accuracy from 72% to 96% using Random Forest. Increased the dataset size by 25% using data engineering.",
      "Optimized fall detection model accuracy to 93% for the R&D team’s hardware. Integrated the model with the Raspberry Pi controller.",
    ],
  },
  {
    startDate: "September 2021",
    endDate: "December 2021",
    company: "Smowcode",
    type: "Internship",
    role: "SDE-Intern",
    favIcon: studypaqFav,
    color: "#ecdab0",
    images: [smowcode],
    workList: [
      "Revised Node.js backend, hosted on AWS and designed 10+ responsive UI screens using SCSS",
      "Enhanced software packaging with Inno Setup in Pascal, achieving a 15% reduction in deployment time",
      "Directed CI/CD task creation on Atlassian platforms, reducing release cycle time by 10%",
    ],
  },
];
