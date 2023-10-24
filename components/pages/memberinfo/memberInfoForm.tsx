'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const memberInfoForm = [
  {
    id:1,
    contents:"대표자명"
  },
  {
    id:2,
    contents:"이메일"
  },
  {
    id:3,
    contents:"비밀번호"
  },
  {
    id:4,
    contents:"사업자 전화번호"
  },
  {
    id:5,
    contents:"상호명"
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
  }
]

interface memberInfoFormType {
  id:number,
  contents:string
}

function MemberInfoForm() {

  const router=useRouter();

  return (
    <div className='flex flex-col items-center'>
      
      <p className='text-3xl font-bold my-10'>
          회원 정보
      </p>

      {
        memberInfoForm.map((item:memberInfoFormType)=>(
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

export default MemberInfoForm