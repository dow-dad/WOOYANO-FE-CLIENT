'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function Checkbox() {

  const router=useRouter();

  const [seoulChecked, setSeoulChecked] = useState(false);
  const [busanChecked, setBusanChecked] = useState(false);
  const [incheonChecked, setIncheonChecked] = useState(false);
  const [daeguChecked, setDaeguChecked] = useState(false);
  const [gwangjuChecked, setGwangjuChecked] = useState(false);
  const [daejeonChecked, setDaejeonChecked] = useState(false);
  const [ulsanChecked, setUlsanChecked] = useState(false);
  const [sejongChecked, setSejongChecked] = useState(false);



  const handleSeoulChange = () => {
    setSeoulChecked(!seoulChecked);
  };

  const handleBusanChange = () => {
    setBusanChecked(!busanChecked);
  };

  const handleIncheonChange = () => {
    setIncheonChecked(!incheonChecked);
  };

  const handleGwangjuChange = () => {
    setGwangjuChecked(!gwangjuChecked);
  };

  const handleDaejeonChange = () => {
    setDaejeonChecked(!daejeonChecked);
  };

  const handleDaeguChange = () => {
    setDaeguChecked(!daeguChecked);
  };

  const handleUlsanChange = () => {
    setUlsanChecked(!ulsanChecked);
  };

  const handleSejongChange = () => {
    setSejongChecked(!sejongChecked);
  };

  return (
    <div className='flex min-w-[400px]'>
      <div className='m-auto'>
        <div className='flex gap-5'>

          <div>
            <input
              type="checkbox"
              checked={seoulChecked}
              onChange={handleSeoulChange}
            />
            서울
          </div>

          <div>
            <input
              type="checkbox"
              checked={busanChecked}
              onChange={handleBusanChange}
            />
            부산
          </div>

          <div>
            <input
              type="checkbox"
              checked={incheonChecked}
              onChange={handleIncheonChange}
            />
            인천
          </div>

          <div>
            <input
              type="checkbox"
              checked={daeguChecked}
              onChange={handleDaeguChange}
            />
            대구
          </div>
        </div>

        <div className='flex gap-5'>
          <div>
            <input
              type="checkbox"
              checked={gwangjuChecked}
              onChange={handleGwangjuChange}
            />
            광주
          </div>

          <div>
            <input
              type="checkbox"
              checked={daejeonChecked}
              onChange={handleDaejeonChange}
            />
            대전
          </div>

          <div>
            <input
              type="checkbox"
              checked={ulsanChecked}
              onChange={handleUlsanChange}
            />
            울산
          </div>

          <div>
            <input
              type="checkbox"
              checked={sejongChecked}
              onChange={handleSejongChange}
            />
            세종
          </div>
        </div>

        <p>서비스 가능 지역 : {getSelectedRegions()}</p>

      </div>
    </div>
  );

  function getSelectedRegions() {
    const selectedRegions = [];
    if (seoulChecked) {
      selectedRegions.push('서울');
    }
    if (busanChecked) {
      selectedRegions.push('부산');
    }
    if (incheonChecked) {
      selectedRegions.push('인천');
    }
    if (daeguChecked) {
      selectedRegions.push('대구');
    }
    if (gwangjuChecked) {
      selectedRegions.push('광주');
    }
    if (daejeonChecked) {
      selectedRegions.push('대전');
    }
    if (ulsanChecked) {
      selectedRegions.push('울산');
    }
    if (sejongChecked) {
      selectedRegions.push('세종');
    }

    if (selectedRegions.length === 0) {
      return '선택해주세요.';
    } 
    else {
      return selectedRegions.join(', '); // 선택한 지역을 쉼표로 구분된 문자열로 반환
    }
  }

}

export default Checkbox;