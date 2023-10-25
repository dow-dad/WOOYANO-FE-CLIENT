import BankFormTem from '@/components/pages/bankform/bankFormTem'
import ProgressBar from '@/components/ui/progressBar'
import React from 'react'

function BankForm() {
  return (
    <div>
      <ProgressBar completed={2} total={3}/>
      <BankFormTem/>
    </div>
  )
}

export default BankForm