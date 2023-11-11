import studypaqFav from "/public/assets/images/studypaqFav.svg";
import buycepsFav from "/public/assets/images/buycepsFav.png";
import buyceps from "/public/assets/images/Buyceps.png";
import studypaq from "/public/assets/images/studypaq.png";
import studypaq2 from "/public/assets/images/studypaq2.png";
import enactus from "/public/assets/images/enactus.png";
import oculus from "/public/assets/images/oculus.png";
import abhyudaya from "/public/assets/images/abhyudaya.png";
import rotract from "/public/assets/images/rotract.png";

export const experiences = [
  {
    startDate: "October 2022",
    endDate: "September 2023",
    company: "Oculus SPIT",
    role: "Technical Head",
    type: "Academic Committee",
    images: [oculus],
    color: "#F5F5F5",
    workList: [
      "Built an event management system for the college Techno Cultural Festival Oculus that managed around 400+ registrations.",
      "Modeled database schemas and developed backend services along with integration with RazorPay.",
      "Containerized and deployed the web app with Docker-Compose on Digital Ocean using GitHub Actions for CI/CD.",
    ],
  },
  {
    startDate: "November 2022",
    endDate: "September 2023",
    company: "Enactus SPIT",
    role: "Head of Event Development and Research",
    type: "Academic Committee",
    favIcon: buycepsFav,
    color: "#6a6a6a",
    images: [enactus],
    workList: [
      "Conducted a children's event inclusive of drawing, dance, and singing competitions for over 300 participants.",
      "Organized a debate competition for 100+ students, fostering an exchange of ideas and perspectives.",
      "Promoted bamboo products as a plastic alternative and executed various in-house college events such as AbhiMat, Epic, Blood Donation Drive, Unnati, and more.",
    ],
  },
  {
    startDate: "January 2022",
    endDate: "December 2023",
    company: "Rotract SPIT",
    role: "Student Volunteer",
    type: "Community Engagement",
    favIcon: studypaqFav,
    color: "#ecdab0",
    images: [rotract],
    workList: [
      "Engaged in charitable initiatives, including mask, sanitizer, and food donation drives through the Rotaract Club of S.P.I.T.",
      "Orchestrated and contributed to 'Food For Paws' event on February 12, 2023, at Malad, advocating for animal welfare and promoting responsible citizenship.",
      "Collaborated with Saksharta Foundation on October 30th to support their PAD Project, facilitating the donation of sanitary pads to girls in grades 7th to 10th at Lokmanya Tilak Udyan Juhu.",
      "Participated in a Beach Cleaning event at Dadar Beach on 24th September 2023 with RC SPIT, emphasizing environmental stewardship and raising awareness about plastic pollution impacts.",
    ],
  },
  {
    startDate: "July 2022",
    endDate: "October 2022",
    company: "Abhyudaya",
    role: "Student Volunteer",
    type: "Community Engagement",
    favIcon: studypaqFav,
    color: "#ecdab0",
    images: [abhyudaya],
    workList: [
      "Played a significant role as a student assistant in multiple classes, actively engaging with underprivileged children and conducting specialized academic mathematical sessions for 12th standard students.",
      "Exhibited dedication by efficiently completing essential tasks such as data filling and other administrative responsibilities, contributing to the smooth operation of Abhyudaya's initiatives for underprivileged children.",
      "Actively participated in Abhyudaya's mission by providing mentoring and after-school enrichment activities, directly impacting the educational journey of underprivileged children in Mumbai.",
    ],
  },
];
