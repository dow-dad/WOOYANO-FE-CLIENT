import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { Paragraph } from "components/typography"; // CUSTOM ICON COMPONENTS


const DayPicker = () => {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const [selectedDays, setSelectedDays] = useState([]);

  const handleDayClick = (day) => {
    if (selectedDays.includes(day)) {
      // 이미 선택된 요일인 경우 선택 해제
      setSelectedDays(selectedDays.filter(selectedDay => selectedDay !== day));
    } else {
      // 선택되지 않은 요일인 경우 선택 추가
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <Box>
      <Paragraph>요일 선택</Paragraph>
      <Box>
        {daysOfWeek.map((day, index) => (
          <Button
            key={index}
            variant="contained"
            onClick={() => handleDayClick(day)}
            style={{
              backgroundColor: selectedDays.includes(day) ? 'lightblue' : 'white',
              marginRight: '8px',
              marginBottom: '8px',
            }}
          >
            {day}
          </Button>
        ))}
      </Box>
      <Paragraph>선택한 요일: {selectedDays.join(', ') || '없음'}</Paragraph>
    </Box>
  );
};

export default DayPicker;