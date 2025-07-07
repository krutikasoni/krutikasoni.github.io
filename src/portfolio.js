/* Portfolio Configuration - FINAL VERSION */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Krutika Soni",
  title: "Hi all, I'm Krutika 👋",
  subTitle: emoji(
    "A data-driven storyteller 📊 passionate about transforming messy data into actionable insights. Skilled in marketing analytics, campaign performance, automation, and building end-to-end solutions using SQL, Python, Power BI, and GA4."
  ),
  resumeLink: "https://drive.google.com/file/d/1yvoOgK-Pz0k7ZzHcP9L5eFyFJQ8HBPjA/view?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/krutikasoni",
  linkedin: "https://www.linkedin.com/in/krutikasoni/",
  gmail: "sonikrutika11@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "DATA ANALYST | MARKETING NERD | DASHBOARD ENTHUSIAST",
  skills: [
    emoji("⚡ Built ETL pipelines for real-time shipment tracking and delivery prediction"),
    emoji("⚡ Automated dashboards, segmentation, and performance tracking across GA4, HubSpot, Power BI"),
    emoji("⚡ Developed models for campaign forecasting, anomaly detection, and route optimization")
  ],
  softwareSkills: [
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "powerbi", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "ga4", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "excel", fontAwesomeClassname: "fas fa-file-excel" },
    { skillName: "tableau", fontAwesomeClassname: "fas fa-chart-pie" },
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/asuLogo.png"),
      subHeader: "M.S. in Business Analytics",
      duration: "Aug 2023 – May 2025",
      desc: "Focus on marketing analytics, time series forecasting, predictive modeling"
    },
    {
      schoolName: "NMIMS University, India",
      logo: require("./assets/images/nmimsLogo.png"),
      subHeader: "BBA in Marketing",
      duration: "2018 – 2021",
      desc: "Graduated with distinction, specializing in consumer behavior and digital marketing"
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "SQL & Python", progressPercentage: "90%" },
    { Stack: "Marketing Analytics & Automation", progressPercentage: "85%" },
    { Stack: "Visualization & Reporting", progressPercentage: "80%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: []
};

const bigProjects = {
  title: "Projects",
  subtitle: "Selected Projects & Case Studies",
  projects: [],
  display: true
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Hackathons, course honors, and more coming soon!",
  achievementsCards: [],
  display: false
};

const blogSection = {
  title: "Blogs",
  subtitle: "I occasionally write about data, marketing, and storytelling.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("Love sharing what I learn ✨"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I’m building my voice in analytics, stay tuned!",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Click below to view/download my resume.",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let’s talk data, strategy, or cute dogs 🐶",
  number: "+1-602-341-7475",
  email_address: "sonikrutika11@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
