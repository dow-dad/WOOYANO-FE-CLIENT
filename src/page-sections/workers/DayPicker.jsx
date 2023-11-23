import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { Paragraph } from "components/typography"; // CUSTOM ICON COMPONENTS

const DayPicker = () => {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const [selectedDays, setSelectedDays] = useState([]);

  const handleDayClick = (index) => {
    if (selectedDays.includes(index)) {
      // 이미 선택된 요일인 경우 선택 해제
      setSelectedDays(selectedDays.filter(selectedDay => selectedDay !== index));
    } else {
      // 선택되지 않은 요일인 경우 선택 추가
      setSelectedDays([...selectedDays, index]);
    }
    console.log(selectedDays.sort())
  };

  return (
    <Box>
      <Paragraph>요일 선택</Paragraph>
      <Box mx={10}>
        {daysOfWeek.map((day, index) => (
          <Button
            key={index}
            variant="contained"
            onClick={() => handleDayClick(index)}
            style={{
              backgroundColor: selectedDays.includes(index) ? 'lightblue' : 'black',
              marginRight: '8px',
              marginBottom: '8px',
            }}
          >
            {day}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default DayPicker;