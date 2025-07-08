/* Change this file to get your personal Portfolio */

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
    "A data-driven storyteller, passionate about transforming messy data into actionable insights. Skilled in marketing analytics, campaign performance, automation, and building end-to-end solutions using SQL, Python, Power BI, and GA4. 📊"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1yvoOgK-Pz0k7ZzHcP9L5eFyFJQ8HBPjA/view?usp=sharing",
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
    { skillName: "tableau", fontAwesomeClassname: "fas fa-chart-pie" }
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
      desc:
        "Developed expertise in data-driven decision-making across marketing, supply chain, and finance. Curriculum covered predictive modeling, machine learning, time series forecasting, data visualization, and optimization. Hands-on experience with tools like SQL, Python, R, Power BI, Tableau, and SAP."
    },
    {
      schoolName: "NMIMS University, India",
      logo: require("./assets/images/nmimsLogo.png"),
      subHeader: "BBA in Marketing",
      duration: "2018 – 2021",
      desc:
        "Specialized in consumer behavior, brand strategy, and digital marketing. Gained foundational knowledge in business strategy, economics, and analytics. Led multiple projects involving market research, A/B testing, and campaign performance analysis."
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "SQL & Python", progressPercentage: "70%" },
    { Stack: "Marketing Analytics & Automation", progressPercentage: "85%" },
    { Stack: "Visualization & Reporting", progressPercentage: "80%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Marketing Analyst (Volunteer)",
      company: "Exsight.ai",
      companylogo: require("./assets/images/exsightLogo.png"),
      date: "Jan 2025 – Present",
      desc: "Driving LinkedIn marketing strategy, engagement tracking, and GA4 dashboards for an XAI startup."
    },
    {
      role: "Executive Board Member",
      company: "Strategic Marketing Association, ASU",
      companylogo: require("./assets/images/smaLogo.png"),
      date: "Aug 2024 – May 2025",
      desc: "Organized marketing analytics-focused workshops, marketing sessions, and networking events."
    },
    {
      role: "Business Analyst",
      company: "Kantilal Damodar Mithaiwala LLP",
      companylogo: require("./assets/images/kdmLogo.png"),
      date: "Aug 2023 – Jul 2024",
      desc: "Built and scaled cross-channel campaigns, automated Power BI & Looker Studio dashboards for real-time performance tracking."
    },
    {
      role: "Business & Marketing Analyst",
      company: "Media.net",
      companylogo: require("./assets/images/medianetLogo.png"),
      date: "Jun 2021 – Aug 2023",
      desc: "Led marketing analytics, campaign optimization, and go-to-market research for ad-tech products with $1.4M+/month in ad spend."
    },
    {
      role: "Drive & Cluster Representative",
      company: "Robinhood Army",
      companylogo: require("./assets/images/rhaLogo.png"),
      date: "2021 – 2024",
      desc: "Coordinated donation drives, managed volunteer groups, and led logistical operations across zones."
    },
    {
      role: "Social Media Volunteer & Animal Rescuer",
      company: "CAP Foundation",
      companylogo: require("./assets/images/capLogo.png"),
      date: "2020 – 2022",
      desc: "Handled rescues and ran content campaigns for community awareness and pet adoptions."
    },
    {
      role: "Analysis Assistant Intern",
      company: "NMIMS",
      companylogo: require("./assets/images/nmimsLogo.png"),
      date: "May 2020 – Jun 2020",
      desc: "Predicted a 20% increase in client acquisition by analyzing customer data and providing actionable insights."
    },
    {
      role: "HR Intern",
      company: "BVC Ventures Ltd",
      companylogo: require("./assets/images/bvcLogo.png"),
      date: "Aug 2019 – Oct 2019",
      desc: "Conducted client interaction and feedback analysis, improving onboarding processes."
    }
  ]
};

const bigProjects = {
  title: "Projects",
  subtitle: "Selected Projects & Case Studies",
  projects: [
    {
      image: require("./assets/images/shipment.png"),
      projectName: "Shipment Delivery Date Prediction",
      projectDesc: "ETL pipeline & ML model to predict delivery dates using SAP + scraped tracking data for a Global Electronics Distributor.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/krutikasoni/shipment-delivery-ml" }
      ]
    },
    {
      image: require("./assets/images/parking.png"),
      projectName: "Parking Space Detection with YOLOv8",
      projectDesc: "Built a YOLOv8-based computer vision app to detect parking space availability in real time.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/krutikasoni/Parking-Space-Detection" }
      ]
    },
    {
      image: require("./assets/images/yelp.png"),
      projectName: "Yelp Review Sentiment Analysis",
      projectDesc: "Natural language processing pipeline to classify Yelp reviews and visualize sentiment trends.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/krutikasoni/Yelp-Reviews-UnderservedMarkets" }
      ]
    },
    {
      image: require("./assets/images/mentalhealth.png"),
      projectName: "Mental Health Performance Prediction",
      projectDesc: "Survey-based ML models predicting mental health status based on behavioral and workplace signals.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/krutikasoni/Student_Mental_Health" }
      ]
    },
    {
      image: require("./assets/images/doe.png"),
      projectName: "Design of Experiments",
      projectDesc: "Optimized production factors using ANOVA and regression for controlled experimental setups.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/krutikasoni/Design-of-Experiment-SelfieMemorability" }
      ]
    }
  ],
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
