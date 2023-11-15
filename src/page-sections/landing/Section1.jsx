import Image from "next/image";
import { Box, Button, Card, Container, Stack, keyframes, styled } from "@mui/material"; // CUSTOM COMPONENT

import { H1, Paragraph } from "components/typography"; // CUSTOM DEFINED HOOK

import useNavigate from "hooks/useNavigate";
const shine = keyframes`
0% {
  background-position: 0% 50%;
}
100% {
  background-position: 100% 50%;
}
`;
const animated = keyframes`
0% {
	background-position: 0 0;
}
50% {
  background-position: 300% 0%;
}
100% {
	background-position: 0 0;
}
`; // STYLED COMPONENTS

const MainTitle = styled(H1)(() => ({
  background: `linear-gradient(300deg, #6950E8 0%,#FB6186 25%, #6950E8 50%, #FB6186 75%,#6950E8 100%)`,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textFillColor: "transparent",
  backgroundSize: "150% auto",
  animation: `${shine} 2s ease-in-out infinite alternate`
}));
const ImageBox = styled(Box)(({
  theme
}) => {
  const color = `${theme.palette.primary[600]}, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.success.main}, ${theme.palette.warning.main}, ${theme.palette.error.main}, ${theme.palette.info.main}, ${theme.palette.primary[400]}`;
  const COMMON_STYLE = {
    top: -3,
    left: -3,
    content: "''",
    borderRadius: 16,
    background: `linear-gradient(45deg, ${color})`,
    position: "absolute",
    backgroundSize: "300%",
    width: "calc(100% + 6px)",
    height: "calc(100% + 6px)",
    animation: `${animated} 20s linear infinite`
  };
  return {
    position: "relative",
    ":before": { ...COMMON_STYLE
    },
    ":after": { ...COMMON_STYLE,
      filter: "blur(8px)"
    }
  };
});
const ShadowBox = styled(Box)(({
  value
}) => ({
  background: `rgba(255,255,255, ${value || 0.012})`,
  borderRadius: 24,
  padding: 32
}));

const Section1 = () => {
  const navigate = useNavigate();
  return <Box bgcolor="#1C113D" py={4}>
      <Container maxWidth="md">
        <Box textAlign="center" mb={5}>
          <Paragraph color="white" fontSize={42} fontWeight={600}>
            Power up <br /> Productivity with
          </Paragraph>

          <MainTitle fontSize={92} fontWeight={800}>
            QuickFrame
          </MainTitle>

          <Paragraph color="white" fontSize={18} mt={1}>
            Choose from React CRA or Next.js versions, <br /> with both RTL support and Dark/Light
            themes included.
          </Paragraph>

          <Stack mt={6} direction="row" gap={2} alignItems="center" justifyContent="center">
            <Button onClick={() => navigate("/components")} sx={{
            paddingInline: 3,
            paddingBlock: 1
          }}>
              Browse Components
            </Button>

            <Button variant="outlined" onClick={() => navigate("/dashboard")} sx={{
            paddingInline: 3,
            paddingBlock: 1
          }}>
              View Demo
            </Button>
          </Stack>
        </Box>

        <ShadowBox value={0.012}>
          <ShadowBox value={0.02}>
            <ShadowBox value={0.025} textAlign="center">
              <ImageBox>
                <Card alt="demo" width={1178} height={1024} component={Image} src="/static/landing/dashboard.jpg" sx={{
                zIndex: 1,
                height: "auto",
                width: "100%",
                display: "block",
                position: "relative",
                minHeight: {
                  lg: 374,
                  xs: 200
                }
              }} />
              </ImageBox>
            </ShadowBox>
          </ShadowBox>
        </ShadowBox>
      </Container>
    </Box>;
};

export default Section1;