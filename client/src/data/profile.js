// All CV content lives here — edit this file to update the site.
export const profile = {
  name: "Ratanakvisal Chhouk",
  firstName: "Ratanakvisal",
  roles: ["MIS Graduate", "IT Trainee", "WordPress Builder", "Data Visualizer", "Aspiring Developer"],
  tagline:
    "My degree is from Paragon International University. Now I'm looking for an internship where I can build websites, organise information and help teams work better.",
  location: "Phnom Penh, Cambodia",
  email: "chhoukr@gmail.com",
  phone: "+855 87 42 41 42",
  phoneHref: "tel:+85587424142",
  // Add your links here (leave empty to hide)
  links: {
    github: "",
    linkedin: "https://www.linkedin.com/in/ratanakvisal-c-294a37411",
    resume: "", // e.g. "/Ratanakvisal_Chhouk_CV.pdf" (put the file in client/public)
  },
  about: [
    "I studied Management of Information Systems at Paragon International University on a scholarship. MIS sits where technology meets business. I enjoy figuring out how information flows through an organisation and how the right tools can make that flow faster and clearer.",
    "I've worked on real websites as an IT trainee and, for my capstone, helped build a platform that guides Cambodian students to university. Alongside my studies I volunteered at STEM festivals, film festivals and tech events for years, which taught me to work in teams, talk with all kinds of people and stay calm under deadlines.",
  ],
  facts: [
    { label: "Degree", value: "B.Sc. MIS" },
    { label: "University", value: "Paragon Int'l" },
    { label: "Scholarship", value: "Yes" },
    { label: "Volunteer events", value: "6+" },
  ],
};

export const education = [
  {
    school: "Paragon International University",
    degree: "Bachelor's Degree, Management of Information Systems",
    period: "2018 – 2026",
    note: "Scholarship recipient",
  },
  {
    school: "Paragon International School",
    degree: "High School Diploma — Bac II",
    period: "2012 – 2018",
    note: "",
  },
];

export const experience = [
  {
    company: "Kirirom Food Production",
    role: "IT Trainee",
    period: "Aug 2024 – Mar 2025",
    points: [
      "Edited and updated the Deng Deng Montessori school website in WordPress.",
      "Built a new Kirirom Food Production website closely matching the design of the original site.",
      "Designed posters for ceremonies and events.",
    ],
  },
];

export const volunteering = [
  { event: "MIS Datazone 2025", role: "Logistics & Media Team", date: "Apr 26, 2025" },
  { event: "Cambodia STEM Festival", role: "Guide Team", date: "Feb 24–25, 2023" },
  { event: "Japanese Film Festival", role: "Volunteer, AEON 3 cinema hall", date: "Jan 15, 2023" },
  { event: "Electric Mobility Showcase", role: "Volunteer, Panel Discussion", date: "Jan 29, 2022" },
  { event: "Cambodia STEM Festival", role: "Project Presenter", date: "Apr 29–30, 2017" },
  { event: "Cambodia STEM Festival", role: "Project Presenter", date: "May 7–8, 2016" },
];

export const skills = {
  technical: ["WordPress", "Poster & Graphic Design", "Khmer–English Translation", "Data Visualization", "HTML & CSS", "JavaScript", "React", "Tailwind CSS", "Node.js & Express", "MongoDB"],
  soft: ["Critical Thinking", "Problem Solving", "Teamwork", "Interpersonal", "Time Management"],
  languages: [
    { name: "Khmer", level: "Native" },
    { name: "English", level: "Professional" },
  ],
};

// Shown if the API / database is not running
export const fallbackProjects = [
  {
    _id: "f1",
    title: "Sakol Life: A Web Platform Guiding High School Graduates into Higher Education in Cambodia",
    liveUrl: "https://www.sakollife.com/en",
    summary:
      "A web platform that helps Cambodian high school graduates choose a university and major. My part: I researched local universities, added the information on each university and its majors to the site, wrote the About Us page, and translated the website into Khmer.",
    tags: ["University Research", "Content", "Khmer Translation"],
    category: "web",
    featured: true,
    order: 1,
  },
  {
    _id: "f2",
    title: "Deng Deng Montessori School Website",
    liveUrl: "https://degdeg.school/",
    summary:
      "As an IT Trainee, I edited and updated the Deng Deng Montessori school website in WordPress.",
    tags: ["WordPress", "Content Editing"],
    category: "web",
    order: 2,
  },
  {
    _id: "f3",
    title: "Kirirom Food Production Website",
    liveUrl: "https://kiriromfoodproduction.online/",
    summary:
      "Built a new website for Kirirom Food Production, closely matching the design and structure of the original site.",
    tags: ["Web Design", "Website Rebuild"],
    category: "web",
    order: 3,
  },
  {
    _id: "f4",
    title: "Ceremony & Event Posters",
    summary: "Designed posters for ceremonies and events during my IT traineeship.",
    tags: ["Graphic Design", "Posters"],
    category: "design",
    order: 4,
  },
  {
    _id: "f5",
    title: "MERN Portfolio Website",
    summary:
      "This site: a React + Tailwind front end with an Express/Node API and MongoDB storing projects and contact-form messages.",
    tags: ["React", "Tailwind", "Express", "MongoDB"],
    category: "web",
    order: 5,
  },
];
