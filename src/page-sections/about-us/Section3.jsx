import { Box, Card, useTheme } from "@mui/material"; // CUSTOM COMPONENTS

import { Carousel } from "components/carousel";
import { NextImage } from "components/next-image";
import { H1, H6, Paragraph } from "components/typography"; // CUSTOM DUMMY DATA

const TEAM_MEMBERS = [{
  id: 1,
  name: "Lucian Obrien",
  designation: "UX Designer",
  image: "/static/user/user-20.png"
}, {
  id: 2,
  name: "Reech Chung",
  designation: "Full Stack Developer",
  image: "/static/user/user-21.png"
}, {
  id: 3,
  name: "Harrison Stain",
  designation: "Marketer",
  image: "/static/user/user-22.png"
}, {
  id: 4,
  name: "Lainey Davidson",
  designation: "UI Designer",
  image: "/static/user/user-23.png"
}, {
  id: 5,
  name: "Reech Chung",
  designation: "Full Stack Developer",
  image: "/static/user/user-20.png"
}];

const Section3 = () => {
  const {
    breakpoints
  } = useTheme(); // carousel breakpoints for responsive

  const carouselBreakpoints = {
    [breakpoints.values.lg]: {
      slidesPerView: 4
    },
    [breakpoints.values.md]: {
      slidesPerView: 3
    },
    [breakpoints.values.sm]: {
      slidesPerView: 2
    },
    [breakpoints.values.xs]: {
      slidesPerView: 1
    }
  };
  return <Box py={10}>
      <Box textAlign="center" mb={2}>
        <H1 fontSize={{
        sm: 52,
        xs: 42
      }} mb={3}>
          Meet Our Team
        </H1>

        <Paragraph color="text.secondary" fontSize={{
        sm: 18,
        xs: 16
      }}>
          If you face any problem, our support team will help you <br />
          within a business working day.
        </Paragraph>
      </Box>

      <Carousel grabCursor rewind pagination breakpoints={carouselBreakpoints}>
        {TEAM_MEMBERS.map(({
        designation,
        id,
        image,
        name
      }) => <Box key={id} px={2} py={4}>
            <Card sx={{
          p: 4,
          boxShadow: 3
        }}>
              <Box height={{
            lg: 250,
            md: 300,
            sm: 375,
            xs: 350
          }} borderRadius={4} overflow="hidden">
                <NextImage alt={name} src={image} width={198} height={250} style={{
              objectFit: "cover"
            }} />
              </Box>

              <Box mt={2} textAlign="center">
                <H6 fontSize={18}>{name}</H6>
                <Paragraph color="text.secondary">{designation}</Paragraph>
              </Box>
            </Card>
          </Box>)}
      </Carousel>
    </Box>;
};

export default Section3;