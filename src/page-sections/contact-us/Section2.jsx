import { Box, Button, Card, Container, Grid, Stack, TextField, styled } from "@mui/material";
import Iframe from "react-iframe"; // CUSTOM COMPONENTS

import { H1 } from "components/typography"; // CUSTOM UTILS METHOD

import { isDark } from "utils/constants"; // STYLED COMPONENT

const StyledTextField = styled(TextField)({
  ".MuiOutlinedInput-root": {
    backgroundColor: "white",
    borderRadius: 8
  }
});

const Section2 = () => {
  return <Box bgcolor={theme => isDark(theme) ? "grey.800" : "grey.50"} py={12} mt={12}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item md={6} xs={12}>
            <H1 mb={5} fontSize={{
            sm: 52,
            xs: 42
          }}>
              Say Hello!
            </H1>

            <form>
              <Stack spacing={3} sx={{
              mb: 5
            }}>
                <StyledTextField fullWidth placeholder="Name" name="name" />
                <StyledTextField fullWidth placeholder="Email" name="email" type="email" />
                <StyledTextField fullWidth placeholder="Subject" name="subject" />
                <StyledTextField multiline fullWidth rows={4} name="message" placeholder="Message" />
              </Stack>

              <Button>Submit</Button>
            </form>
          </Grid>

          <Grid item md={6} xs={12}>
            <Card>
              <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10171.65762602485!2d-74.04850673629463!3d40.71687384971685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1683481372848!5m2!1sen!2sbd" width="100%" height="450" loading="lazy" allowFullScreen styles={{
              border: 0,
              display: "block",
              padding: 3,
              borderRadius: 16
            }} />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>;
};

export default Section2;