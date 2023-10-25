'use client'
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react'

const dayOfData = [
  {
    id:null,
    value:'요일'
  },
  {
    id:1,
    value:'월요일'
  },
  {
    id:2,
    value:'화요일'
  },
  {
    id:3,
    value:'수요일'
  },
  {
    id:4,
    value:'목요일'
  },
  {
    id:5,
    value:'금요일'
  },
  {
    id:6,
    value:'토요일'
  },
  {
    id:7,
    value:'일요일'
  }
]

// interface dayOfDataType {
//   id:number,
//   value:string
// }

function DropDownDay() {
  
    const router = useRouter();

    const [selectedValue, setSelectedValue] = useState<string>('요일');

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
      const index = e.target.selectedIndex;
      const selectedValue = dayOfData[index].value;
      setSelectedValue(selectedValue);
      console.log('Selected:', selectedValue);
    };

    return (
      <div>
        <select onChange={handleSelectChange}>
          {dayOfData.map((item) => (
            <option key={item.id} value={item.value}>
              {item.value}
            </option>
          ))}
        </select>
        <p className='mt-3'>요일 : {selectedValue}</p>
      </div>
  )
}

export default DropDownDay