"use client"

import React from 'react'
import { usePathname } from 'next/navigation';
import HomeHeader from './homeHeader';

function HeaderTop() {

  const pathname = usePathname();

  return (
    <div>
      {pathname == "/"?
      null:
      <HomeHeader/>
      }
    </div>
  )
}

export default HeaderTop