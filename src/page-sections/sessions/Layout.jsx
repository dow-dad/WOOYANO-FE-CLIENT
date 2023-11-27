import { Fragment } from "react";
import { Grid, Box, Divider } from "@mui/material"; // CUSTOM COMPONENTS

import { H3, H6, Paragraph } from "components/typography";
import { FlexRowAlign } from "components/flexbox"; 
import { FlexBetween, FlexBox } from "components/flexbox";

const Layout = ({
  children,
  login
}) => {
  return <Grid container height="100%">
      <Grid item md={6} xs={12}>
        <FlexRowAlign bgcolor="primary.main" height="100%" borderRadius={4}>
          <Box color="white" p={4} maxWidth={700}>
            {login ?
            <FlexBox gap={1}>
              <Box
                sx={{
                  width: { xs: 120, md: 160 },
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <img alt="quickframe" src="/static/logo/character.svg" style={{ width: '100%', height: 'auto' }} />
              </Box>
              <Paragraph sx={{
                fontWeight :{xs:200, md:400},
                fontSize : {xs:24, md:32},
                my : "auto"
              }}>Hi, Welcome<br/><strong>Wooyano!</strong>
                </Paragraph>
            </FlexBox>
             : <Fragment>
                <H3 mt={3} fontWeight={600} maxWidth={450}>
                  Technology is best when it brings people together.
                </H3>

                <Divider sx={{
              borderColor: "primary.400",
              borderWidth: 1,
              my: 3
            }} />
              </Fragment>}
            <Box mt={4} mb={2} textAlign={"center"}>
              <H6 fontSize={20}>우야노에 오신걸 환영합니다!</H6>
            </Box>
          </Box>
        </FlexRowAlign>
      </Grid>

      <Grid item md={6} xs={12}>
        <FlexRowAlign bgcolor="background.paper" height="100%">
          {children}
        </FlexRowAlign>
      </Grid>
    </Grid>;
};

export default Layout;