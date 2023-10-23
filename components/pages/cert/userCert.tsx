"use client"

import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react'

interface userCert {
  name:string,
  email:string
}

function UserCert() {

  const [Opened, setOpened] = useState<Boolean>(false);
  const [userCert, setUserCert] = useState<userCert>({
    name:"",
    email:""
  });
  const router = useRouter();

  const handleOpened = () => {
    setOpened(!Opened);
    console.log(userCert);
  }

  const handleOnChange = (e:ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.id;
    console.log(value, id);
    setUserCert({
      ...userCert,
      [id]:value
    })
  }


  return (
    <div className='flex flex-col min-w-[300px] items-center'>

      <div className='flex flex-col items-center my-10 gap-5'>
        <p className='text-3xl font-bold'>
          입점 신청
        </p>

        <p className='text-base'>
          본인확인
        </p>
      </div>

      <div className='flex flex-col gap-5'>
        <p className='flex flex-col'>이름
        <input
        id = "name"
        className ='border-2 border-black w-[300px] h-[35px] pl-3'
        type = "text" 
        placeholder='이름을 입력해주세요.'
        onChange={handleOnChange}
        value = {userCert.name}
        />
        </p>
        <div className='flex min-w-[300px]'>
          <div className='flex flex-col'>
            <p>이메일</p>
              <div className='flex row' >
                <input className='border-2 border-black h-[35px] pl-3 '
                id = "email" 
                type = "text" 
                placeholder='이메일을 입력해주세요.' 
                onChange={handleOnChange}
                value = {userCert.email}
                />

                <button className='ml-2 border-2 border-none bg-gray-300 h-[35px] rounded-lg' onClick={handleOpened}>
                  인증요청
                </button>
                {/* 인증요청 버튼을 누르면 구분선 아래에 있는 항목에 따라 정렬이 변함 -> 어떻게 수정? */}
              </div>

              <div className = {`flex flex-col mt-[50px] gap-3 ${Opened?null:"hidden"}`}>

                <div className='border-t border-black mt-3'/>
      
                <div className = 'flex mt-[30px]'>
                  <input type = "text" placeholder='인증번호' className='border-2 border-black w-[200px] mx-auto mt-2 h-[35px] pl-3 mb-7'/>
                  <button className='ml-2 border-none bg-gray-300 text-black w-[100px] mx-auto h-[50px] rounded-lg pl-1'>
                  인증번호<br/> 
                  재요청
                  </button>
                </div>
                
                <button className='mt-[100px] border-none bg-gray-300 text-black w-full mx-auto h-[50px] rounded-lg pl-3'
                  onClick={()=>router.push("/signup/basicform")}>
                  인증하기
                </button>

              </div>
          </div>
        </div>

      </div>

    </div>

  )
}

export default UserCert