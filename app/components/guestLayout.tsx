import { ReactNode } from "react";
import { NextPageWithLayout } from "../../pages/_app";
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/router";

interface props {
    children: ReactNode
}

const GuestLayout = ({ children }: props) => {
    const router = useRouter();
    const { user, error, loading } = useAuth();
    if (user) {
        router.push('/panel');
        return <></>
    }

    return (
        <div className="w-full text-2xl">
            {children}
        </div>
    )
}
export default GuestLayout