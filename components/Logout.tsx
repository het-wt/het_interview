"use client";

import {Button} from "@/components/ui/button";
import {clearAllCookies} from "@/lib/actions/auth.action";

const Logout = () => {

    const logoutFunction =  async () => {
        await clearAllCookies();
    }

    return (
        <Button className="btn-primary" onClick={logoutFunction}>Logout</Button>
    )
}
export default Logout
