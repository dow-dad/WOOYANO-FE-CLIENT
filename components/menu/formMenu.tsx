import React from 'react'

function FormMenu() {
  return (
    <div className='flex justify-center items-center '>
      <div className='min-w-[300px] flex justify-start gap-10'>
          <div className='flex flex-col items-center '>
            <div className='w-[25px] h-[25px] rounded-full bg-white border-4 border-blue-400 '></div>
            <p className='flex justify-center'>
              사업자 정보
            </p>
          </div>

          <div className='flex flex-col items-center pr-3'>
            <div className='w-[25px] h-[25px] rounded-full bg-blue-400'></div>
            <p>
              정산 정보
            </p>
          </div>

          <div className='flex flex-col items-center'>
            <div className='w-[25px] h-[25px] rounded-full bg-blue-400'></div>
            <p>
              완료
            </p>
          </div>
        </div>
    </div>
  )
}

export default FormMenu