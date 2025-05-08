import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {isAuthenticated} from "@/lib/actions/auth.action";
import {redirect} from "next/navigation";
import {Button} from "@/components/ui/button";
import Logout from "@/components/Logout";

const RootLayout = async ({children}:{children : React.ReactNode}) => {
    const isUserAuthenticated = await isAuthenticated();
    if(!isUserAuthenticated) redirect("/sign-in");
    return (
        <div className="root-layout">
            <nav className="flex justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="Logo" width={38} height={32} />
                    <h2 className="text-primary-100">Prepwise</h2>
                </Link>
                {isUserAuthenticated && <Logout />}
            </nav>
            {children}
        </div>
    )
}
export default RootLayout
