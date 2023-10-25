'use client'
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react'

const weekOfData = [
  {
    id:null,
    value:'주기'
  },
  {
    id:1,
    value:'매월 첫째'
  },
  {
    id:2,
    value:'매월 둘째'
  },
  {
    id:3,
    value:'매월 셋째'
  },
  {
    id:4,
    value:'매월 넷째'
  },
  {
    id:5,
    value:'매월 다섯째'
  },
  {
    id:6,
    value:'매월 마지막'
  },
  {
    id:7,
    value:'매주'
  }
]

// interface weekOfDataType {
//   id:number,
//   value:string
// }

function DropDownWeek() {

  const router = useRouter();

  const [selectedValue, setSelectedValue] = useState<string>('주기');

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const index = e.target.selectedIndex;
    const selectedValue = weekOfData[index].value;
    setSelectedValue(selectedValue);
    console.log('Selected:', selectedValue);
  };

  return (
    <div>
      <select onChange={handleSelectChange}>
        {weekOfData.map((item) => (
          <option key={item.id} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
      <p className='mt-3'>주기 : {selectedValue}</p>
    </div>
  );
}

export default DropDownWeek
