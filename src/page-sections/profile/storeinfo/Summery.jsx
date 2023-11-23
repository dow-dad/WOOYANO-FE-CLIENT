'use client' 
import { Button, Card } from "@mui/material"; // CUSTOM COMPONENTS
import { H6, Paragraph } from "components/typography";
import { FlexBox, FlexBetween } from "components/flexbox";
import { Add } from "@mui/icons-material";
import { useState } from "react";

const Summery = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpendModal = () => {
    setIsOpened(!isOpened)
  }

  const renderEditStoreText = () => {
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
    {isOpened ? renderEditStoreText() : null}
    <Card sx={{
      padding: 3
    }}>
      <FlexBetween>
        <H6 fontSize={16}>업체 소개글</H6>
        <Button color="secondary" variant="outlined" startIcon={<Add />} onClick={() => { handleOpendModal() }}>
          추가 및 수정
        </Button>
      </FlexBetween>

      <Paragraph color="text.secondary" mt={2} fontWeight={400}>
        우야노 클린은 청소 서비스의 혁신을 추구하는 플랫폼입니다. 최고의 청소 업체를 소비자에게 제공하며, 편리하고 안전한 예약 시스템으로 사용자들에게 간편한 청소 서비스 이용을 제공합니다.
        우수한 서비스 품질과 안정적인 예약 시스템으로, 우리는 사용자와 청소 업체 간의 만족스러운 연결을 선도합니다.
        탁월한 청소 경험을 찾는 사용자들에게 우야노 클린이 선사하는 혁신적인 서비스로 일상을 더욱 쾌적하게 만들어보세요.
      </Paragraph>
    </Card>
  </>
}

export default Summery;