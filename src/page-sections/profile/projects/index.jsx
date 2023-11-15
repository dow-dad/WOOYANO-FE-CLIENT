import { Grid, Box } from "@mui/material"; // CUSTOM ICON COMPONENTS

import Car from "icons/Car";
import Luck from "icons/Luck";
import City from "icons/City";
import Labels from "icons/Labels";
import Launch from "icons/Launch";
import Layers from "icons/Layers";
import Behance from "icons/Behance";
import LiteCoin from "icons/LiteCoin";
import MessagePlay from "icons/MessagePlay"; // CUSTOM COMPONENT

import ProjectCard from "./ProjectCard"; // CUSTOM DUMMY DATA

const PROJECT_LIST = [{
  id: 1,
  title: "Create Minimal Logo",
  description: "Minimalistic logo for fitness appk, the project will get brand identity when the get recognized...",
  icon: Behance,
  status: "Pending",
  value: 70
}, {
  id: 2,
  title: "Digital Marketing",
  description: "Minimalistic logo for fitness appk, the project will get brand identity when the get recognized...",
  icon: Car,
  status: "Completed",
  value: 50
}, {
  id: 3,
  title: "Social Media Marketing",
  description: "Minimalistic logo for fitness appk, the project will get brand identity when the get recognized...",
  icon: City,
  status: "Running",
  value: 100
}, {
  id: 4,
  title: "WordPress Development",
  description: "Minimalistic logo for fitness appk, the project will get brand identity when the get recognized...",
  icon: Launch,
  status: "Completed",
  value: 50
}, {
  id: 5,
  title: "Landing Page Design",
  description: "Minimalistic logo for fitness appk, the project will get brand identity when the get recognized...",
  icon: Layers,
  status: "Running",
  value: 100
}, {
  id: 6,
  title: "UI Kit Design",
  description: "Minimalistic logo for fitness appk, the project will get brand identity when the get recognized...",
  icon: LiteCoin,
  status: "Pending",
  value: 70
}, {
  id: 7,
  title: "Dashboard Design",
  description: "Minimalistic logo for fitness appk, the project will get brand identity when the get recognized...",
  icon: Labels,
  status: "Running",
  value: 100
}, {
  id: 8,
  title: "App Design Project",
  description: "Minimalistic logo for fitness appk, the project will get brand identity when the get recognized...",
  icon: Luck,
  status: "Pending",
  value: 70
}, {
  id: 9,
  title: "Admin Dashboard Design",
  description: "Minimalistic logo for fitness appk, the project will get brand identity when the get recognized...",
  icon: MessagePlay,
  status: "Completed",
  value: 50
}];

const Projects = () => {
  return <Box py={3}>
      <Grid container spacing={3}>
        {PROJECT_LIST.map(item => <Grid item md={4} sm={6} xs={12} key={item.id}>
            <ProjectCard Icon={item.icon} title={item.title} value={item.value} status={item.status} description={item.description} />
          </Grid>)}
      </Grid>
    </Box>;
};

export default Projects;