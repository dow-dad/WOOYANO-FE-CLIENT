'use client'
import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function RouterBack() {
  const router=useRouter();
  
  return (
    <>
      <div className='w-2 pt-1' onClick={()=>router.back()}>
        <Image
        alt={"뒤로가기 사진"}
        src={"/images/button/back2.png"}
        width={1000}
        height={1000}
        />
      </div>
    </>
  )
}

export default RouterBack