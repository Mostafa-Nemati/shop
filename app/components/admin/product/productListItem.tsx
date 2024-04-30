import { useState } from "react"
import Product from "../../../models/product"
import DeleteConfirmation from "../../../shared/deleteconfirmation";
import { DeleteProduct } from "../../../services/product";
import { toast } from "react-toastify";
import { ValidationError } from "yup";
import Link from "next/link";

interface props {
    product: Product,
    mutateProducts : any
}

export default function ProductListItem({ product, mutateProducts }: props) {
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState<boolean>(false);

    const deleteHandler = async () => {
        try {
            await DeleteProduct(product.id);
            await mutateProducts();
            toast.success('محصول با موفقیت حذف شد');
            setShowDeleteConfirmation(false)

        } catch (error) {
            if(error instanceof ValidationError) {
                Object.entries(error.message).forEach( ( [key , value] ) => toast.error(value as string))
                return;
            }
            toast.error('متاسفانه مشکلی در حذف محصول وجود دارد.')

            console.log(error)
        }
    }

    return (
        <tr>
            <td className="hidden">
                {
                    showDeleteConfirmation && 
                    <DeleteConfirmation 
                        title={`حذف محصول ${product?.title}`}
                        description="آیا از حذف محصول مورد نظر خود اطمینان دارید یا خیر؟ در صورت تایید اطلاعات قابل بازگشت نخواهد بود"
                        handleTrue={deleteHandler}
                        handleCancel={() => setShowDeleteConfirmation(false)}
                    />
                }
            </td>

            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                {product.id}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.title}</td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <Link href={`/admin/products/${product.id}/edit`}>
                <a href="#" className="text-indigo-600 hover:text-indigo-900 ml-4">
                    ویرایش
                </a>
                </Link>
               
                <button onClick={() => setShowDeleteConfirmation(true)} className="text-indigo-600 hover:text-indigo-900">
                    حذف
                </button>
            </td>
        </tr>
    )
}