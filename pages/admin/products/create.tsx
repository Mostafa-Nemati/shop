import { NextPageWithLayout } from "../../_app";
import AdminPanelLayout from "../../../app/components/adminPanelLayout";
import FormProductCreate from "../../../app/components/admin/product/formCreate";


const ProductList: NextPageWithLayout = () => {
    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">ایجاد محصول</h1>
                    </div>
                </div>

                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <FormProductCreate />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
ProductList.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>

export default ProductList