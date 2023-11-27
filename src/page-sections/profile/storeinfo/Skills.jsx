import { ButtonBase, ButtonGroup, Card, Grid, styled, Button } from "@mui/material"; // CUSTOM COMPONENTS
import { FlexBox, FlexBetween } from "components/flexbox";
import { Add } from "@mui/icons-material";
import { H6 } from "components/typography";



import { isDark } from "utils/constants"; // STYLED COMPONENTS
import { useState } from "react"

const ButtonOne = styled(ButtonBase)(({
  theme
}) => ({
  fontSize: 14,
  width: "100%",
  cursor: "auto",
  fontWeight: 500,
  overflow: "hidden",
  whiteSpace: "nowrap",
  padding: ".8rem 1rem",
  textOverflow: "ellipsis",
  borderRadius: "8px 0 0 8px",
  backgroundColor: theme.palette.grey[isDark(theme) ? 600 : 100]
}));
const ButtonTwo = styled(ButtonBase)(({
  theme
}) => ({
  fontSize: 14,
  cursor: "auto",
  fontWeight: 600,
  padding: ".8rem 1rem",
  borderRadius: "0 8px 8px 0",
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.divider
})); // CUSTOM DUMMY DATA LIST

const LIST = [{
  id: 1,
  title: "Graphic Design",
  amount: 40
}, {
  id: 2,
  title: "Font End Dev",
  amount: 32
}, {
  id: 3,
  title: "Figma Design",
  amount: 50
}, {
  id: 4,
  title: "Figma Design",
  amount: 50,
  complete: true
}, {
  id: 5,
  title: "Graphic Design",
  amount: 40
}, {
  id: 6,
  title: "Font End Dev",
  amount: 32
}];

const Skills = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpendModal = () => {
    setIsOpened(!isOpened)
  }

  const renderEditAbleArea = () => {
    return <>
      <div style={{ background: "black", width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: 1200, opacity: 0.6 }}></div>
      <div style={{ backgroundColor: "white", position: "fixed", width: "70vw", height: "80vh", zIndex: 1201, borderRadius: "10px", left: "15%", top: "10%", padding: "10px" }}>


        <FlexBox gap={2} paddingLeft={1} paddingTop={5} flexWrap={"wrap"}>
          <Button type="button" variant="outlined" onClick={() => { handleOpendModal() }}>닫기</Button>
        </FlexBox>
      </div>
    </>
  }

  return <>
    {isOpened ? renderEditAbleArea() : null}
    <Card sx={{
      padding: 3
    }}>
      <FlexBetween mb={3}>
        <H6 fontSize={16}>서비스 가능 지역</H6>
        <Button color="secondary" variant="outlined" startIcon={<Add />} onClick={() => { handleOpendModal() }}>
          추가 및 수정
        </Button>
      </FlexBetween>

      <Grid container spacing={2}>
        {LIST.map(item => <Grid item xl={3} lg={4} sm={6} xs={12} key={item.id}>
          <ButtonGroup fullWidth>
            <ButtonOne disableRipple>{item.title}</ButtonOne>
            <ButtonTwo disableRipple>{item.amount}</ButtonTwo>
          </ButtonGroup>
        </Grid>)}
      </Grid>
    </Card>;
  </>
};

export default Skills;