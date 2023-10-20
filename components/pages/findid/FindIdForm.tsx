import React from 'react'
import Link from 'next/link'

function FindIdForm() {
  return (
    <div className='flex flex-col items-center'>

      <div className='flex row gap-3 mt-[60px] mb-[60px]'>
        <p>
          아이디 찾기
        </p>
        <p>
          |
        </p>
        <p className='text-gray-400'><Link href = "/findpw">
          비밀번호 찾기
          </Link>
        </p>
      </div>

      <div className='flex-col'>
        <p className='flex mb-3'>이름</p>
        <input className='flex mb-3 border-2 border-black w-[300px] mx-5 h-[35px] pl-3 ' type = "text" placeholder='이름을 입력해주세요.' />
        
        <p className='flex mb-3'>사업자등록번호</p>
        <input className='border-2 border-black w-[300px] mx-5 h-[35px] pl-3' type = "text" placeholder='사업자등록번호를 입력해주세요.'/>
      </div>
        
      <div className='flex mt-8'>
      <button className='border-none bg-gray-300 text-black w-[350px] mx-auto h-[50px] rounded-lg pl-3'><Link href = "/findidresult">
        아이디 찾기
      </Link>
      </button>
      </div>
      

    </div>
  )
}

export default FindIdForm