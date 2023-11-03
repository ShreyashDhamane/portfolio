import studypaqFav from "/public/assets/images/studypaqFav.svg";
import buycepsFav from "/public/assets/images/buycepsFav.png";
import buyceps from "/public/assets/images/Buyceps.png";
import studypaq from "/public/assets/images/studypaq.png";
import studypaq2 from "/public/assets/images/studypaq2.png";
import aim4u from "/public/assets/images/aim4u.png";
import aicoms from "/public/assets/images/aicoms.png";
import autobuddys from "/public/assets/images/autobuddys.png";
import smowcode from "/public/assets/images/smowcode.png";

export const experiences = [
  {
    startDate: "May 2023",
    endDate: "Present",
    company: "Aicom",
    role: "Software Developer and Machine Learning Intern",
    type: "Internship",
    images: [aicoms],
    color: "#F5F5F5",
    workList: [
      "Developing a human-less self-checkout store that eliminates the checkout counters and product barcode scanning by using object detection, image change detection, and person reidentification.",
      "Devised an AI-based cooking planner, staff schedule organizer, and sales data analysis application using Facebook’s Prophet, Google OR tools, and Flutter.",
      "Created a comprehensive Point of Sale (POS) system for self-food ordering and staff usage using JavaScript, integrated thermal printers and Viva card terminals for seamless self-checkout experiences.",
    ],
  },
  {
    startDate: "Jun 2022",
    endDate: "May 2023",
    company: "Aim4U",
    role: "Research Intern and Team Leader",
    type: "Research Internship",
    favIcon: buycepsFav,
    color: "#6a6a6a",
    images: [aim4u],
    workList: [
      "Engineered AI-based skin disease detection using Facebook’s Detectron, achieved 95%+ accuracy by training the model on Nvidia GPU systems. Deployed it on AWS Lambda and integrated it with the Flutter mobile app.",
      "Implemented a Skin Type Indicator model utilizing Bauman Skin Type Indicator and ResNet-50’s resilient architecture and applied data engineering techniques to achieve over 88% accuracy.",
      "Built a content-based recommendation system using Natural Language Processing, Skin Type, and Skin Disease Detection model to suggest suitable skin care products for treating specific skin conditions.",
      "Led a team of 12 junior research interns, oversaw daily updates, resolved issues, performed project management, and provided regular updates to mentors.",
    ],
  },
  {
    startDate: "August 2022",
    endDate: "November 2022",
    company: "AutoBuddys",
    type: "Research Internship",
    role: "Research Intern",
    favIcon: studypaqFav,
    color: "#ecdab0",
    images: [autobuddys],
    workList: [
      "Improved systolic and diastolic blood pressure detection model's accuracy from 72% to 96% using Random Forest and data engineering techniques.",
      "Optimized fall detection model accuracy to 93% for the R&D team’s hardware, aiding elderly individuals living alone. Integrated the model with the Raspberry Pi controller.",
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
      "Integrated the website with Node.js backend, managed software packaging using Pascal and released updates on AWS.",
      "Worked on batch scripting, CICD task creation on Atlassian, and user interface implementation using SCSS.",
    ],
  },
];
