'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

function StoreInfoForm() {

  const router=useRouter();

  return (
    <div className='flex flex-col items-center my-10'>

      <div className='text-3xl font-bold mb-5'>
          업체 정보
      </div>

      <div className='flex gap-3 mb-5'>
        <p onClick = {()=>router.push("/storeinfo")}>매장정보</p>
        <p>|</p>
        <p className='text-gray-400' onClick = {()=>router.push("/storeoper")}>운영정보</p>
      </div>

      <div>
        <p className='flex mb-3'>업체명</p>
        <input className='flex mb-3 border-2 border-black w-[300px] mx-5 h-[35px] pl-3' type = "text" placeholder='업체명을 입력해주세요.'/>
        <p className='flex mb-3'>로고 이미지</p>
        <input className='flex mb-3 border-2 border-black w-[300px] mx-5 h-[35px] pl-3' type = "text" placeholder='로고 이미지를 첨부해주세요.'/>
        <p className='flex mb-3'>사업장 주소</p>
        <input className='flex mb-3 border-2 border-black w-[300px] mx-5 h-[35px] pl-3' type = "text" placeholder='사업장 주소를 입력주세요.'/>
        <p className='flex mb-3'>업체 소개</p>
        <textarea className='flex mb-3 border-2 border-black w-[300px] mx-5 pt-1 pl-3' placeholder='업체 소개글을 입력해주세요.'/>
        <p className='flex mb-3'>업체 소개 사진</p>
        <input className='flex mb-3 border-2 border-black w-[300px] mx-5 h-[35px] pl-3' type = "text" placeholder='업체 소개사진을 첨부해주세요.'/>
      </div>

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

export default StoreInfoForm