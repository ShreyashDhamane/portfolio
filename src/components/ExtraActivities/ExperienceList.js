import studypaqFav from "/public/assets/images/studypaqFav.svg";
import buycepsFav from "/public/assets/images/buycepsFav.png";
import buyceps from "/public/assets/images/Buyceps.png";
import studypaq from "/public/assets/images/studypaq.png";
import studypaq2 from "/public/assets/images/studypaq2.png";
import embodied from "/public/assets/images/embodied.png";
import emotional from "/public/assets/images/eqoutient.png";
import attention_span from "/public/assets/images/attention_span.png";
import under_review from "/public/assets/images/under_review.png";

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
      "Established an AI-powered web platform for enhanced communication among people with diverse abilities, incorporating speech recognition tools for seamless website browsing and video calls.",
      "Devised a hand sign detection model using LSTM with an impressive accuracy of 96%, enabling effective communication through sign language to text, text to speech, and speech to text.",
      "Authored and published a paper, “Breaking Silence, Embracing Inclusivity: The Power of AI in Communication”, in the 2023 International Conference on Cybernetics, Cognition and Machine Learning Applications, IEEE Germany Section.",
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
      "Developed a novel document chatbot using Large Language Models, showcasing the potential of LangChain for creating engaging chatbots with applications in customer service, education, and research.",
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
      "Engineered real-time attention spans detect for autistic children through head movement, background noise, game pauses or exits, and eye movements and blinking.",
      "Integrated the model with the Flutter application and developed various mobile games to enhance the attention span of autistic children.",
      "Co-authored and published a paper in the 2023 11th International Conference on Emerging Trends in Engineering & Technology - Signal and Information Processing, IEEE Bombay Section.",
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
