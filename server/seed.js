// Seeds the projects collection. Run: npm run seed
// Add repoUrl / liveUrl links to any project to show "Code" / "Live demo" buttons.
import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import Project from "./models/Project.js";

const projects = [
  {
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
    title: "Deng Deng Montessori School Website",
    liveUrl: "https://degdeg.school/",
    summary:
      "As an IT Trainee, I edited and updated the Deng Deng Montessori school website in WordPress.",
    tags: ["WordPress", "Content Editing"],
    category: "web",
    order: 2,
  },
  {
    title: "Kirirom Food Production Website",
    liveUrl: "https://kiriromfoodproduction.online/",
    summary:
      "Built a new website for Kirirom Food Production, closely matching the design and structure of the original site.",
    tags: ["Web Design", "Website Rebuild"],
    category: "web",
    order: 3,
  },
  {
    title: "Ceremony & Event Posters",
    summary: "Designed posters for ceremonies and events during my IT traineeship.",
    tags: ["Graphic Design", "Posters"],
    category: "design",
    order: 4,
  },
  {
    title: "MERN Portfolio Website",
    summary:
      "This site: a React + Tailwind front end with an Express/Node API and MongoDB storing projects and contact-form messages.",
    tags: ["React", "Tailwind", "Express", "MongoDB"],
    category: "web",
    order: 5,
  },
];

try {
  await connectDB(process.env.MONGO_URI);
  await Project.deleteMany({});
  await Project.insertMany(projects);
  console.log(`Seeded ${projects.length} projects.`);
} catch (err) {
  console.error(err);
  process.exitCode = 1;
} finally {
  await mongoose.disconnect();
}
