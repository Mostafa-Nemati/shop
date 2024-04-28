import { NextPageWithLayout } from "../_app";
import AdminPanelLayout from "../../app/components/adminPanelLayout";

const AdminPanel: NextPageWithLayout = () => {
    return (
        <div>
            user Admin
        </div>
    )
}
AdminPanel.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>

export default AdminPanel