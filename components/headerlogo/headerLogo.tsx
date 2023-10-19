import React from 'react'
import Image from 'next/image'

function HeaderLogo() {
  return (
    <div className='flex justify-center'>
      <Image
        alt={"로고"}
        src={"/images/logo/logo2.png"}
        width={200}
        height={200}
        />
    </div>
  )
}

export default HeaderLogo