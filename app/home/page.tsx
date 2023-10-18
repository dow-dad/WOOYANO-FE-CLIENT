import React from 'react'
import Image from 'next/image'

const menuList = [
  {
    id:1,
    contents:"회원정보 관리",
    imageurl:"/images/icon/회원정보관리.png"
  },
  {
    id:2,
    contents:"업체정보 관리",
    imageurl:"/images/icon/업체정보관리.png"
  },
  {
    id:3,
    contents:"리뷰 관리",
    imageurl:"/images/icon/리뷰관리.png"
  },
  {
    id:4,
    contents:"작업자 관리",
    imageurl:"/images/icon/작업자관리.png"
  },
  {
    id:5,
    contents:"예약 관리",
    imageurl:"/images/icon/예약관리.png"
  },
  {
    id:6,
    contents:"정산 관리",
    imageurl:"/images/icon/정산관리.png"
  },
  {
    id:7,
    contents:"서비스 관리",
    imageurl:"/images/icon/서비스관리.png"
  }
]

interface menulistType {
  id:number,
  contents:string,
  imageurl:string
}

function Home() {
  return (
    <div>
      <p className='text-center text-2xl'>
        HOME
      </p>
      <div className='flex justify-center mx-auto'>
        <div className = 'flex-col'>
          {
            menuList.map((item:menulistType)=>(
              <div key={item.id} className='min-w-[280px] ml-9 flex justify-start gap-10 my-[100px] text-xl'>
                <Image
                src={item.imageurl}
                alt={item.contents}
                width={32}
                height={32}
                />
                <p className='pt-1'>
                  {item.contents}
                </p>
              </div>
              
              
            ))
          }

      </div>  
    </div>
    </div>
  )
}

export default Home