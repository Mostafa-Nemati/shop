import Spinner from "../icons/spinner"

interface props {
className ? : string
}

export default function LoadingBox({ className }: props) {
    return (
        <div className={`w-full bg-gray-50 text-sm border border-opacity-10 border-black rounded-md flex items-center font-bold px-3 py-4 ${className ?? ''} `}>
            <Spinner className="w-4 h-4 !text-sky-500 ml-2" />
            <span className="text-gray-600">درحال دریافت کردن اطلاعات</span>
        </div>
    )
}