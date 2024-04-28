import { useEffect, useState } from "react";
import UserPanelLayout from "../../app/components/userPanelLayout";
import { NextPageWithLayout } from "../_app";
import UserInfo from "../../app/components/panel/userInfo";

const Panel : NextPageWithLayout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])

    if(loading) return <div>loading ....</div>

    return (
        <div>
            <UserInfo />
        </div>
    )
}
Panel.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>

export default Panel