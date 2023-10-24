'use client'
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useRef } from 'react'

function FileUpload() {

  const router=useRouter();

  const fileInputRef = useRef(null);

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedfile = e.target.files?.[0];
    console.log("선택된 파일 : ", selectedfile);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current; // 파일 업로드 버튼을 클릭하기 위해 input 요소를 클릭
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>파일 선택</button>
      <input
        type="file"
        accept="image/*" // 허용할 파일 형식 지정 (예: 이미지 파일만)
        style={{ display: 'none' }} // 숨겨진 input 요소
        onChange={handleFileInputChange}
        ref={fileInputRef}
      />
    </div>
  )
}

export default FileUpload
{/* <button type="button" class="btn-file" onclick="$('#Filedata').click();">파일 선택</button> */}