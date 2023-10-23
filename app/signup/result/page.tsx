import ResultTem from '@/components/pages/result/resultTem'
import ProgressBar from '@/components/ui/progressBar'

import React from 'react'

function Result() {
  return (
    <div>
      <ProgressBar completed={3} total={3}/>
      <ResultTem/>
    </div>
  )
}

export default Result