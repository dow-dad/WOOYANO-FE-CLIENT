import Link from 'next/link'
import React from 'react'

function LoginForm() {
  return (
    <div className='flex flex-col items-center'>
        <div className='flex justify-center mx-auto mt-[100px] mb-[50px] items-center border-2 border-black text-2xl w-[200px] h-[150px]'>
            <p>
                WOOYANO
            </p>
        </div>

        <div className='mb-[50px]'>
            <p className="flex justify-center text-lg">
                로그인
            </p>
        </div>

        <div className='flex flex-col gap-5'>
            <p className='flex flex-col'>아이디(이메일)
            <input className='border-2 border-black w-[300px] mx-auto h-[35px] pl-3 ' type = "text" placeholder='아이디(이메일)를 입력해주세요.' />
            </p>
            <p className='flex flex-col'>패스워드
            <input className='border-2 border-black w-[300px] mx-auto h-[35px] pl-3' type = "text" placeholder='패스워드를 입력해주세요.'/>
            </p>
        </div>

        <div className='flex flex-col px-[130px] pt-10 gap-3'>
            <button className='border-none bg-gray-300 text-black w-[350px] mx-auto h-[50px] rounded-lg pl-3'><Link href = "/home">
                로그인
                </Link>
            </button>
            <button className='border-none bg-gray-300 text-black w-[350px] mx-auto h-[50px] rounded-lg pl-3'><Link href = "/signup">
                회원가입
                </Link>
            </button>

        <div className='text-[11px] flex justify-center pt-5 gap-3'>
            <p><Link href = "/findid">아이디 찾기</Link></p>
            <p>|</p>
            <p><Link href = "/findpassword">패스워드 찾기</Link></p>
        </div>

        </div>

    </div>
  )
}

export default LoginForm