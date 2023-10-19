import React from 'react'
import Link from 'next/link'

function FindIdResult() {
  return (
    <div className='flex flex-col items-center'>

      <p className='flex font-bold mt-[60px] mb-[40px]'>
        이메일 찾기 결과
      </p>

      <p className='text-gray-400 text-center text-sm mb-[40px]'>
        회원님의 정보로<br/>
        가입된 이메일이 있습니다.
      </p>

      <div className='mb-[50px]'>
        tjdwjs9903@naver.com
      </div>

      <p className='text-gray-400 text-xs mb-1'>
        비밀번호가 기억나지 않으세요?
      </p>

      <div className='flex flex-col gap-5 text-sm text-blue-600'>
        <button>
          비밀번호 찾기<Link href = "/findpw">
        </Link>
        </button>
{/* 비밀번호 찾기 클릭 시 비밀번호 찾기 페이지로 이동하지 않음 */}
        <button className='border-none bg-gray-300 text-black w-[350px] mx-auto h-[50px] rounded-lg pl-3'><Link href = "/login">
          로그인
          </Link>
        </button>
      </div>

    </div>
  )
}

export default FindIdResult