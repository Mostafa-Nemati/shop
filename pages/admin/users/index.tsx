import { NextPageWithLayout } from "../../_app";
import AdminPanelLayout from "../../../app/components/adminPanelLayout";

const UserPage: NextPageWithLayout = () => {
    return (
        <div>
            user`s page
        </div>
    )
}
UserPage.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>

export default UserPage