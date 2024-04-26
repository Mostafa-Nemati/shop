import { ReactNode } from "react";
import { NextPageWithLayout } from "../../pages/_app";
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/router";

interface props {
    children : ReactNode
}

const UserPanelLayout = ({ children } : props) => {
    const router = useRouter();
    const { user, error, loading } = useAuth();

    if(loading) return <h1>Loading ...</h1>
    if(error) {
        router.push('/auth/login')
        return <></>
    }
    console.log(user)

    return (
        <div className="w-full text-2xl">
            { children }
        </div>
    )
}
export default UserPanelLayout