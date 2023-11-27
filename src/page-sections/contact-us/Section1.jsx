import { Box, Container, Grid } from "@mui/material";
import { PlaceOutlined } from "@mui/icons-material"; // CUSTOM COMPONENTS

import { H1, Paragraph } from "components/typography";
import { FlexBox } from "components/flexbox";

const Section1 = () => {
  return <Container maxWidth="lg">
      <H1 mt={10} fontSize={{
      sm: 52,
      xs: 42
    }}>
        Explore Our World
      </H1>

      <Paragraph mb={8} fontSize={18} color="text.secondary">
        We'd love to talk about how we can help you.
      </Paragraph>

      <Grid container spacing={5}>
        <Location country="United States" address={<>
              4100 Walcott Ave NE, <br /> 87109, New York, USA. <br /> (505) 855-5500 <br />
              info@onion.usa
            </>} />

        <Location country="United Kingdom" address={<>
              20 New Bond St <br />
              W1S 2UE, London, UK. <br />
              020 3214 9200 <br />
              info@onion.uk
            </>} />

        <Location country="Canada" address={<>
              118-1959 152 St <br />
              Surrey, British Columbia <br /> V4A 9E3, Canada. <br />
              (604) 536-8244 <br />
              info@onion.canada
            </>} />

        <Location country="Brazil" address={<>
              Praça Júlio de Castilhos, 52 <br />
              Moinhos de Vento, Porto Alegre <br />
              90430-020, Brazil. <br />
              (51) 3312-2815 <br />
              info@onion.brazil
            </>} />
      </Grid>
    </Container>;
};

const Location = ({
  country,
  address
}) => {
  return <Grid item lg={3} sm={6} xs={12}>
      <FlexBox gap={1} alignItems="flex-start">
        <PlaceOutlined sx={{
        color: "grey.500",
        fontSize: 25
      }} />

        <Box>
          <Paragraph lineHeight={1} fontSize={20} fontWeight={600}>
            {country}
          </Paragraph>

          <Paragraph mt={2} fontSize={16} color="text.secondary">
            {address}
          </Paragraph>
        </Box>
      </FlexBox>
    </Grid>;
};

export default Section1;