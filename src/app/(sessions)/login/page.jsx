import React from 'react';
import { LoginPageView } from "page-sections/sessions/page-view";
import { getServerSession } from "next-auth";
import { options } from "app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

async function LoginPage() {
    const session = await getServerSession(options);
    console.log(session);
    if(session?.user.success){
      redirect("/");
    }
    return (
        <LoginPageView />
    );
}

export default LoginPage;