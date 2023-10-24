'use client'
import CheckBox from '@/components/button/checkBox';
import DropDownDay from '@/components/button/dropDownDay';
import DropDownWeek from '@/components/button/dropDownWeek';
import { useRouter } from 'next/navigation';
import React from 'react'

function StoreOperForm() {

  const router=useRouter();

  return (
    <div className='flex flex-col items-center my-10'>
      <div className='text-3xl font-bold mb-5'>
          업체 정보
      </div>

      <div className='flex gap-3 my-3'>
        <p className='text-gray-400' onClick = {()=>router.push("/storeinfo")}>매장정보</p>
        <p>|</p>
        <p onClick = {()=>router.push("/storeoper")}>운영정보</p>
      </div>

        <p className='flex my-3'>서비스 가능 지역</p>
        <CheckBox/>
        

      <p className='flex my-5'>정기휴일</p>
      <div className='flex row gap-10'>
      <DropDownWeek/>
      <DropDownDay/>
      </div>
      <p className='flex my-5'>운영시간</p>

      <div className='flex gap-5 min-w-[300px] justify-between mt-[100px]'>
        <button className='border-none bg-gray-300 text-black w-full leading-[50px] rounded-lg ' onClick={()=>router.push("/home")}>
          수정
        </button>

        <button className='border-none bg-gray-300 text-black w-full leading-[50px] rounded-lg ' onClick={()=>router.push("/home")}>
          확인
        </button>
      </div>

    </div>
  )
}

export default StoreOperForm