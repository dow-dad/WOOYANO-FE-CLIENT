// 'use client'
// import { useRouter } from 'next/navigation';
// import React, { useState } from 'react';

// function CheckboxTest() {
//   const router = useRouter();

//   const regionMap = {
//     seoulChecked: '서울',
//     busanChecked: '부산',
//     incheonChecked: '인천',
//     daeguChecked: '대구',
//     gwangjuChecked: '광주',
//     daejeonChecked: '대전',
//     ulsanChecked: '울산',
//     sejongChecked: '세종'
//   };

//   const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

//   const handleCheckboxChange = (region: string) => {
//     if (selectedRegions.includes(region)) {
//       // 이미 선택한 지역이면 제거
//       setSelectedRegions(selectedRegions.filter((r) => r !== region));
//     } else {
//       // 선택한 지역이 아니면 추가
//       setSelectedRegions([...selectedRegions, region]);
//     }
//   };
  
//   const checkboxes = Object.keys(regionMap).map((key) => {
//     const region = regionMap[key];
//     return (
//       <div key={key}>
//         <input
//           type="checkbox"
//           checked={selectedRegions.includes(region)}
//           onChange={() => handleCheckboxChange(region)}
//         />
//         {region}
//       </div>
//     );
//   });

//   return (
//     <div className='flex min-w-[400px]'>
//       <div className='m-auto'>
//         <div className='flex gap-5'>{checkboxes}</div>
//       </div>
//       <div>
//         {/* 선택된 지역들을 표시 */}
//         {selectedRegions.length > 0 ? (
//           <p>선택한 지역: {selectedRegions.join(', ')}</p>
//         ) : (
//           <p>지역을 선택하지 않았습니다.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CheckboxTest;