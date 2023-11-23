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
      "Built an object detection model for retail items using YOLO and SSD and their respective pipelines from data collection to model fine-tuning.",
      "Devised a cooking planner and sales data analysis application using Facebook’s Prophet and Flutter, respectively.",
      "Designed and implemented an algorithm for effective staff scheduling, saving 2 hours of work weekly.",
      "Worked on a Point of Sale (POS) system for self-food ordering using JavaScript, integrated Bluetooth Thermal Printers, Viva Card Terminals, and WebHooks for payment notifications.",
    ],
  },
  {
    startDate: "January 2022",
    endDate: "May 2023",
    company: "Aim4U",
    role: "Research Intern and Team Leader",
    type: "Research Internship",
    favIcon: buycepsFav,
    color: "#6a6a6a",
    images: [aim4u],
    workList: [
      "Engineered skin disease detection model using Detectron2, achieved 95%+ accuracy by training the model on Nvidia GPU systems. Deployed it on AWS Lambda and integrated it with the Flutter app.",
      "Implemented a Skin Type Indicator model with ResNet-50 and applied data engineering to achieve over 88% accuracy.",
      "Built a content-based recommendation system utilizing Vader Lexicon and skin type model to recommend suitable skin care products for effective treatment with above 90% accuracy.",
      "Led a team of 12 junior research interns, oversaw daily updates, resolved issues, and provided regular updates to mentor. Handled machine learning, web and mobile application development.",
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
      "Integrated 25+ backend APIs with the website, implemented 10+ user interface screen implementations using SCSS, and released frontend updates on AWS.",
      "Updated software packaging scripts using Inno Setup in Pascal, worked on batch scripting and CI/CD task creation on Atlassian.",
    ],
  },
];
