import React from 'react'
import { WorkerList2PageView } from "page-sections/workers/page-view";
import { getServerSession } from "next-auth";
import { options } from "app/api/auth/[...nextauth]/options";

async function workerList() {
    const session = await getServerSession(options);
    const serviceId = session?.user.result.serviceIdList[0] || 0
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/client/address/mypage/service/worker/list/${serviceId}`;
    if(serviceId === 0) {
        console.log("매장을 먼저 등록해주세요.")
    } else {
        const res = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${session?.user.result.token}`,
            },
          });
          console.log(url)
          if (res.ok) {
            const data = await res.json();
            console.log("data:", data);
            console.log("serviceId",serviceId);
            return data;
          } else {
            console.error("Failed to fetch data:", res.status, res.statusText);
          }
    }
};



async function WorkerList2Page() {
    const data = await workerList();
    // console.log("data:",data);

    return(
        <>
        <WorkerList2PageView />
        </>
    )
}
export default WorkerList2Page;

