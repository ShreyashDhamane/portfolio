import studypaqFav from "/public/assets/images/studypaqFav.svg";
import buycepsFav from "/public/assets/images/buycepsFav.png";
import buyceps from "/public/assets/images/Buyceps.png";
import studypaq from "/public/assets/images/studypaq.png";
import studypaq2 from "/public/assets/images/studypaq2.png";
import embodied from "/public/assets/images/embodied.png";
import oculus from "/public/assets/images/oculus.png";
import attention_span from "/public/assets/images/attention_span.png";
import under_review from "/public/assets/images/under_review.png";

export const experiences = [
  {
    startDate: "May 2023",
    endDate: "Present",
    company: "Oculus SPIT",
    role: "Technical Head",
    type: "Academic Project",
    images: [oculus],
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
    company: "Enactus SPIT",
    role: "Research and Development Team Lead",
    type: "Academic Project",
    favIcon: buycepsFav,
    color: "#6a6a6a",
    images: [embodied],
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
    company: "Abhyudaya",
    role: "Head of Volunteer Team",
    type: "Academic Project",
    favIcon: studypaqFav,
    color: "#ecdab0",
    images: [attention_span],
    workList: [
      "Improved systolic and diastolic blood pressure detection model's accuracy from 72% to 96% using Random Forest and data engineering techniques.",
      "Optimized fall detection model accuracy to 93% for the R&D team’s hardware, aiding elderly individuals living alone. Integrated the model with the Raspberry Pi controller.",
    ],
  },
  // {
  //   startDate: "September 2021",
  //   endDate: "December 2021",
  //   company: "Skin Type Indicator",
  //   role: "Research project",
  //   type: "Research Internship",
  //   favIcon: studypaqFav,
  //   color: "#ecdab0",
  //   images: [under_review],
  //   workList: [
  //     "Integrated the website with Node.js backend, managed software packaging using Pascal and released updates on AWS.",
  //     "Worked on batch scripting, CICD task creation on Atlassian, and user interface implementation using SCSS.",
  //   ],
  // },
];
