// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors:
    "#4486d4, #316c78, #0a8a7a, #b3682b, #8a2f38, #c6cdcf",
  firstName: "Muhammad",
  middleName: "",
  lastName: "Hamza",
  message: "Software Engineer",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/hamza3256",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/Hamza3256",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/m.hamza_",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/-muhammadhamza/",
    },
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/myProf.jpg"),
  imageSize: 375,
  message:
    "I am a software engineer at Eiger Trading, a FinTech firm specialising in brokerage and trader faciliation services for the Islamic financial market. As a highly adaptable and compentent engineer, I am proficient in Python, Java, and frontend languages and frameworks (HTML, CSS, JavaScript, React) with varying experiences in MongoDB, PostgreSQL, Django, and C#. I have a keen interest in backend software engineering and computational finance (HFT). I'm enthused by the prospect of being part of such a dynamic and stimulating field. I am confident the skills and determination that have brought me success in the past would stand me in good stead for the exciting challenges ahead.",
  resume:
    "https://drive.google.com/file/d/1Hym78wwYGmhmsWsLc4xlIAyVniFc0zA1/view?usp=sharing",
  CV: 
    "https://drive.google.com/file/d/1GLokV6mnT7REA9lBYqjVBO0XZCLsHCNE/view?usp=sharing"
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "hamza3256",
  reposLength: 0,
  specificRepos: [
    "MERN-eCommerce",
    "chessAI",
    "Image-processor",
    "SudokuSolver",
    "FPS-MULTI",
    "cool-compiler",
    "django_auction_project"
  ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/myProf.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/myProf.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 95 },
    { name: "Java", value: 95 },
    { name: "JavaScript", value: 70 },
    { name: "SQL", value: 85 },
    { name: "Algorithms & Data Structures", value: 90 },
    { name: "React", value: 75 },
    { name: "HTML/CSS", value: 75 },
    { name: "C#", value: 70 },
  ],
  softSkills: [
    { name: "Teamwork and collaboration", value: 90 },
    { name: "Approachability and Helpfulness", value: 95 },
    { name: "Problem Solving", value: 98 },
    { name: "Empathy", value: 90 },
    { name: "Confidence", value: 93 },
    { name: "Open-mindedness and adaptability", value: 85 },
    { name: "Creativity", value: 90 },
    { name: "Patience", value: 88 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact Me",
  message:
    "I am open to full-time opportunities for Software Engineer positions. If you have any questions, or just want to say hello, feel free to contact me using the form below or my email address ",
  email: "hamzaquant@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Software Engineer", // Here Add Company Name
      companylogo: require("../assets/img/mthree.png"),
      date: "October —  November",
      description:
        "• Underwent six weeks training in Full Stack Engineering (Java).",
    },
    {
      role: "Software Engineer",
      companylogo: require("../assets/img/AJ-icon.jpeg"),
      date: "June 2021 — August 2021",
      description:
        "• Created separate and restricted admin access for inventory management.\n• Implemented different access levels to handle orders and customer interaction which sped up the payment process by 70%.",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
