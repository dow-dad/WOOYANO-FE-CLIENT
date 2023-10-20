import React from 'react'
import BasicFormTem from '@/components/pages/basicform/basicFormTem'
import ProgressBar from '@/components/ui/formMenu2'

function BasicForm() {
  return (
    <div>
      <ProgressBar completed={1} total={3}/>
      <BasicFormTem/>
    </div>
  )
}

export default BasicForm