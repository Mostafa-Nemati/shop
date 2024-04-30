import { NextPageWithLayout } from "../../../_app";
import AdminPanelLayout from "../../../../app/components/adminPanelLayout";
import FormProductCreate from "../../../../app/components/admin/product/formCreate";
import { useRouter } from "next/router";
import useSWR from "swr";
import { url } from "inspector";
import { GetSingleProduct } from "../../../../app/services/product";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ValidationError } from "yup";
import { toast } from "react-toastify";
import FormProductEdit from "../../../../app/components/admin/product/formEdit";


const ProductEdit: NextPageWithLayout = ({ productId } : InferGetServerSidePropsType<typeof getServerSideProps >) => {
    const router = useRouter();
    const { data, error } = useSWR({ url: `/admin/products/${productId}/edit`, productId }, GetSingleProduct);
    if (error instanceof ValidationError) {
        router.push('/admin/products/404');
        toast.error('چنین محصولی وجود ندارد');
        return <></>
    }

    const isLoading = !data && !error

    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">ویرایش محصول</h1>
                    </div>
                </div>

                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                {
                                    isLoading
                                        ? <span>loading ...</span>
                                        : <FormProductEdit product={data.product} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
ProductEdit.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    return {
        props: {
            productId: query?.productId
        }
    }
}

export default ProductEdit