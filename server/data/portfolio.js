// All portfolio content lives here. Edit this file to update the site —
// the React front end fetches it from GET /api/portfolio.

export const portfolio = {
  profile: {
    name: "Ratanakvisal Chhouk",
    title: "Management Information Systems Student",
    tagline:
      "Scholarship student in Management of Information Systems, bridging business and technology through data, teamwork and practical IT experience.",
    location: "Phnom Penh, Cambodia",
    email: "chhoukr@gmail.com",
    // Uncomment to show your phone number publicly:
    // phone: "087 42 41 42",
    photo: "/profile.jpg",
    lookingFor: "Open to internships in IT, data & business systems",
    resume: "/CV_Ratanakvisal_Chhouk.pdf",
    socials: [
      // { label: "LinkedIn", url: "https://www.linkedin.com/in/your-handle" },
      // { label: "GitHub", url: "https://github.com/your-handle" },
    ],
  },

  about: [
    "I'm a Management of Information Systems student at Paragon International University, where I study on scholarship. I enjoy the space where business problems meet technology, and turning raw data into visuals that help people decide.",
    "As an IT Trainee at Kirirom Food Production, I supported day-to-day IT operations in a real production environment. Outside the classroom I've volunteered at STEM festivals, film festivals and industry events, presenting projects, guiding visitors and helping with logistics and media.",
  ],

  stats: [
    { value: "8", label: "Months as IT Trainee" },
    { value: "7", label: "Volunteer events" },
    { value: "2", label: "Languages" },
  ],

  education: [
    {
      school: "Paragon International University",
      degree: "Bachelor's Degree, Management of Information Systems",
      period: "2018 – 2026",
      note: "Scholarship recipient",
    },
    {
      school: "Paragon International School",
      degree: "High School Diploma",
      period: "2012 – 2018",
      note: "Bac II, Grade C",
    },
  ],

  experience: [
    {
      role: "IT Trainee",
      company: "Kirirom Food Production",
      period: "Aug 2024 – Mar 2025",
      points: [
        "Supported the IT team with daily operations in a food production company.",
        "Gained hands-on exposure to how information systems support business processes.",
      ],
    },
  ],

  volunteering: [
    { event: "MIS Datazone 2025", date: "Apr 26, 2025", role: "Logistics & Media Team" },
    { event: "Cambodia STEM Festival", date: "Feb 24–25, 2023", role: "Guide Team" },
    { event: "Japanese Film Festival", date: "Jan 15, 2023", role: "Volunteer, AEON 3 cinema hall" },
    { event: "Electric Mobility Showcase", date: "Jan 29, 2022", role: "Volunteer, panel discussion session" },
    { event: "Cambodia STEM Festival", date: "Apr 29–30, 2017", role: "Project Presenter" },
    { event: "Cambodia STEM Festival", date: "May 07–08, 2016", role: "Project Presenter" },
  ],

  skills: {
    technical: ["Computer Literacy", "Data Visualization", "Information Systems"],
    soft: ["Critical Thinking", "Problem Solving", "Teamwork", "Interpersonal", "Time Management"],
  },

  languages: ["Khmer", "English"],

  // Add your projects here — the Projects section appears automatically
  // once this list has at least one item.
  projects: [
    // {
    //   title: "Sales Dashboard",
    //   description: "Interactive dashboard visualising monthly sales data.",
    //   tags: ["Power BI", "Excel"],
    //   link: "https://...",
    // },
  ],
};
