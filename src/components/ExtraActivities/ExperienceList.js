import studypaqFav from "/public/assets/images/studypaqFav.svg";
import buycepsFav from "/public/assets/images/buycepsFav.png";
import buyceps from "/public/assets/images/Buyceps.png";
import studypaq from "/public/assets/images/studypaq.png";
import studypaq2 from "/public/assets/images/studypaq2.png";
import embodied from "/public/assets/images/embodied.png";
import emotional from "/public/assets/images/eqoutient.png";
import attention_span from "/public/assets/images/attention_span.png";
import under_review from "/public/assets/images/under_review.png";
import accepted from "/public/assets/images/accepted.png";

export const experiences = [
  {
    startDate: "September 2022",
    endDate: "December 2022",
    company: "Emotional Qoutient",
    role: "Research Project",
    type: "Academic Project",
    images: [emotional],
    color: "#F5F5F5",
    workList: [
      "Created an AI-powered website using ReactJS for improved communication among people with diverse abilities. Incorporated speech recognition using an inbuilt JS tool for voice-based browsing and video calls.",
      "Devised and integrated a hand sign detection model using LSTM with an impressive accuracy of 92%, enabling effective communication through sign language to text, text to speech, and speech to text.",
      "Authored and published a paper, “Breaking Silence, Embracing Inclusivity”, in the 2023 International Conference on Cybernetics, Cognition and Machine Learning Applications, IEEE Germany Section.",
    ],
  },
  {
    startDate: "May 2022",
    endDate: "August 2022",
    company: "Embodied Epistemology",
    role: "Research Project",
    type: "Academic Project",
    favIcon: buycepsFav,
    color: "#6a6a6a",
    images: [embodied],
    workList: [
      "Researched and developed a document chatbot using LLM(Large Language Models) and Langchain, with accurate answers to questions. Integrated it with a Streamlit-based website.",
      "Authored and published a paper at the 2023 International Conference on Evolutionary Algorithms and Soft Computing Techniques, IEEE Bangalore Section.",
    ],
  },
  {
    startDate: "January 2022",
    endDate: "April 2022",
    company: "Attention Span of Autistic Children",
    role: "Research Project",
    type: "Academic Project",
    favIcon: studypaqFav,
    color: "#ecdab0",
    images: [attention_span],
    workList: [
      "Engineered real-time model capable of analyzing attention spans in children through head movement, background noise, game pauses or exits, and eye movements and blinking using OpenCV’s classifiers.",
      "Developed two games mainly designed to improve the attention span in Flutter.",
      "Co-authored and published a paper in the 2023 11th International Conference on Emerging Trends in Engineering & Technology - Signal and Information Processing, IEEE Bombay Section.",
    ],
  },
  {
    startDate: "September 2021",
    endDate: "December 2021",
    company: "Skin Type Indicators",
    role: "Research Internship",
    type: "Research Internship",
    favIcon: studypaqFav,
    color: "#ecdab0",
    images: [accepted],
    workList: [
      "Researched various aspects of skin types, explored optimal human skin classification methods, and examined the  BSTI classification model.",
      "Designed a unique Skin Type Classifier with 14 types.",
      "Implemented the model using InceptionV3 and ResNet-50, achieving 84% and 80% accuracy, respectively.",
      "Authored a paper accepted for presentation at the 2024 Springer International Conference on Multi-Strategy Learning Environment, scheduled for January 12, 2024. ",
    ],
  },
  {
    startDate: "August 2023",
    endDate: "March 2024",
    company: "Smart Traffic Signals",
    role: "Research project",
    type: "Research Internship",
    favIcon: studypaqFav,
    color: "#ecdab0",
    images: [under_review],
    workList: [
      "Used the vehicle-annotated dataset of 1000+ images from Kaggle. Increased the dataset size by 30%.",
      "Implemented YOLO2 for vehicle detection, achieving an accuracy of 89%.",
      "Developed a time-efficient algorithm to calculate the green time for each lane dynamically based on factors like number of vehicles, average speed and more.",
      "The Journal paper and thesis are currently in progress.",
    ],
  },
];
