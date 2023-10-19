'use client'
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react'

interface pwForm{
  email:string,
  clientNumber:string
}

function FindPasswordForm() {
  const [Opened,setOpened]=useState<Boolean>(false);
  const [pwForm,setPwForm]=useState<pwForm>({
    email:"",
    clientNumber:"",
  });
  const router=useRouter();


  const handleOpened =()=>{
    setOpened(!Opened);
    console.log(pwForm);
  }

  const handleOnChange=(e:ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.id;
    console.log(value,id);
    setPwForm({
      ...pwForm,
      [id]:value
    })
  }

  
  

  return (
    <div className='flex flex-col items-center'>

      <div className='flex row gap-3 mt-[60px] mb-[60px]'>
        <p className='text-gray-400' onClick={()=>router.push("/findid")}>
          아이디 찾기
          
        </p>
        <p>
          |
        </p>
        <p onClick={()=>router.push("/findpassword")}>
          비밀번호 찾기
        </p>
      </div>

      <div className='flex-col'>
        <p className='flex mb-3'>아이디(이메일)</p>
        <input 
        id="email"
        className='flex mb-3 border-2 border-black w-[300px] mx-5 h-[35px] pl-3 ' 
        type = "text" 
        placeholder='아이디(이메일)를 입력해주세요.' 
        onChange={handleOnChange}
        value={pwForm.email}
        />
        
        <p className='flex mb-3'>사업자등록번호</p>
        <input 
        id='clientNumber'
        className='border-2 border-black w-[300px] mx-5 h-[35px] pl-3' 
        type = "text" 
        placeholder='사업자등록번호를 입력해주세요.'
        onChange={handleOnChange}
        value={pwForm.clientNumber}
        />
        
      </div>

      <div className='mt-7 mb-7 text-sm'>
        <button onClick={handleOpened}>
          인증요청
        </button>
      </div>
      <div className={`flex flex-col gap-3 ${Opened?null:"hidden"}`}>
        <div className='flex'>
          <input type="text" placeholder='인증번호' className='border-2 border-black w-[200px] mx-auto mt-2 h-[35px] pl-3 mb-7'/>
          <div className='justify-center'>
            <button className='border-none bg-gray-300 text-black w-[100px] mx-auto h-[50px] rounded-lg pl-1'>
              인증번호<br/> 
              재요청
            </button>
          </div>
        </div>
        <button className='border-none bg-gray-300 text-black w-[350px] mx-auto h-[50px] rounded-lg pl-3' onClick={()=>router.push("/chgpw")}>인증완료</button>
      </div>
      

    </div>
  )
}

export default FindPasswordForm