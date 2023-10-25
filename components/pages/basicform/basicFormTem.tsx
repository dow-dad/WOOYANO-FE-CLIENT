'use client'
import router from 'next/router'
import { useRouter } from 'next/navigation';
import React from 'react'

const basicForm = [
  {
    id:1,
    contents:"이메일"
  },
  {
    id:2,
    contents:"패스워드"
  },
  {
    id:3,
    contents:"대표자명"
  },
  {
    id:4,
    contents:"상호명"
  },
  {
    id:5,
    contents:"사업자 전화번호"
  },
  {
    id:6,
    contents:"사업자 주소"
  },
  {
    id:7,
    contents:"사업자번호"
  },
  {
    id:8,
    contents:"사업자등록증 사본파일"
  },
]

interface basicFormType {
  id:number,
  contents:string
}

function BasicFormTem() {
  const router=useRouter();
  return (
    <div className='flex flex-col items-center'>

      <div className='flex flex-col items-center my-10 gap-5'>
        <p className='text-3xl font-bold'>
          입점 신청
        </p>

        <p className='text-base'>
          사업자 정보
        </p>
      </div>

      {
        basicForm.map((item:basicFormType)=>(
          <div key={item.id}>
            <p>
              {item.contents}
            </p>

            <div className='mb-5 min-w-[300px]'>
            <input className='flex mb-3 border-2 border-black w-full h-[35px] pl-3' type = "text" placeholder={item.contents}/>
            </div>
          </div>
        ))
      }

      <button className='border-none bg-gray-300 text-black w-[350px] mt-[100px] h-[50px] rounded-lg pl-3' onClick={()=>router.push("/signup/bankform")}>
        다음
      </button>

  </div>
  )
}

export default BasicFormTem