import Link from 'next/link'
import React from 'react'

function ChgPw() {
  return (
    <div className='flex flex-col items-center'>
      <div className = 'flex font-bold mt-[60px] mb-[40px]'>
        <p>
          비밀번호 변경
        </p>
      </div>

      <p className='text-gray-400 text-sm mb-[40px]'>
        인증이 완료되었습니다.<br/>
        비밀번호를 변경해주세요.
      </p>

      <div className='flex-col'>
        <p className='flex mb-3'>새 비밀번호</p>
        <input className='flex mb-3 border-2 border-black w-[300px] mx-5 h-[35px] pl-3 ' type = "text" placeholder='새 비밀번호를 입력해주세요.' />
        
        <p className='flex mb-3'>새 비밀번호 확인</p>
        <input className='border-2 border-black w-[300px] mx-5 h-[35px] pl-3' type = "text" placeholder='새 비밀번호를 다시 입력해주세요.'/>
      </div>

      <div className='flex mt-8'>
      <button className='border-none bg-gray-300 text-black w-[350px] mx-auto h-[50px] rounded-lg pl-3'><Link href = "/login">
        변경하기
      </Link>
      </button>
      </div>

    </div>
  )
}

export default ChgPw