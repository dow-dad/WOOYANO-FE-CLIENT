"use client";
import React from "react";
import DaumPostcode from "react-daum-postcode";

function PostCodeDaum({
  isView,
  setIsView,
  setAddressInfo,
}) {
  const complete = (data) => {
    setAddressInfo(data);
    setIsView(false);
  };

  return (
    <>
      {isView && (
        <div>
          <DaumPostcode autoClose onComplete={complete} />
        </div>
      )}
    </>
  );
}

export default PostCodeDaum;
