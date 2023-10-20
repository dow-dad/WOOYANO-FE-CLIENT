'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const bankform = [
  {id:1,
  contents:"은행명"
  },
  {id:2,
  contents:"예금주명"
  },
  {id:3,
  contents:"계좌번호"
  },
  {id:4,
  contents:"통장사본"
  },
]

interface bankFromType {
  id:number,
  contents:string
}

function BankFormTem() {
  const router=useRouter();

  return (
    <div className='flex flex-col items-center'>
      
      <p className='text-center text-2xl my-10'>
        입점 신청
      </p>

      {
        bankform.map((item:bankFromType)=>(
          <div key={item.id}>
            <p>
              {item.contents}
            </p>

            <div className='mb-5 min-w-[300px]'>
            <input className='flex mb-3 border-2 border-black w-full h-[35px] pl-3 ' type = "text" placeholder={item.contents}/>
            </div>
          </div>
        ))
      }
      <div className='flex gap-5 min-w-[300px] justify-between mt-[100px]'>
        <button className='border-none bg-gray-300 text-black w-full leading-[50px] rounded-lg ' onClick={()=>router.push("/signup/basicform")}>
          이전
        </button>

        <button className='border-none bg-gray-300 text-black w-full leading-[50px] rounded-lg ' onClick={()=>router.push("/signup/result")}>
          다음
        </button>
      </div>

    </div>
  )
}

export default BankFormTem