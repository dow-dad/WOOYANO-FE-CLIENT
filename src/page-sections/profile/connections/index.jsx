import { Grid, Box, Select, MenuItem } from "@mui/material"; // CUSTOM COMPONENTS

import ConnectionCard from "./ConnectionCard";
import { H6, Span } from "components/typography";
import FlexBetween from "components/flexbox/FlexBetween"; // CUSTOM DUMMY DATA

const CONNECTION_LIST = [{
  id: 1,
  connected: false,
  name: "Miphoshka",
  position: "Visual Designer",
  img: "/static/user/user-11.png"
}, {
  id: 2,
  connected: true,
  name: "Tim Carrey",
  position: "Visual Designer",
  img: "/static/user/user-10.png"
}, {
  id: 3,
  connected: false,
  name: "Edward Norton",
  position: "Visual Designer",
  img: "/static/user/user-9.png"
}, {
  id: 4,
  connected: true,
  name: "Eva Mendes",
  position: "Visual Designer",
  img: "/static/user/user-8.png"
}, {
  id: 5,
  connected: false,
  name: "Vida Lao",
  position: "Visual Designer",
  img: "/static/user/user-7.png"
}, {
  id: 6,
  connected: false,
  name: "Angelina",
  position: "Visual Designer",
  img: "/static/user/user-6.png"
}];

const Connections = () => {
  return <Box py={3}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FlexBetween flexWrap="wrap">
            <H6 fontSize={16} mb={1}>
              My Connections{" "}
              <Span fontSize={14} fontWeight={400} color="text.secondary">
                (100+ Resources)
              </Span>
            </H6>

            <Select defaultValue="active" size="small">
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="deactivate">Deactivate</MenuItem>
            </Select>
          </FlexBetween>
        </Grid>

        {CONNECTION_LIST.map(item => <Grid item md={4} sm={6} xs={12} key={item.id}>
            <ConnectionCard img={item.img} name={item.name} position={item.position} connected={item.connected} />
          </Grid>)}
      </Grid>
    </Box>;
};

export default Connections;