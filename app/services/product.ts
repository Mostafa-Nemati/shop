import callApi from "../../pages/api/callApi";
import { MyFormProductCreate } from "../constant/admin";

export async function GetProducts({ page = 1, per_page = 15 }) {
    let res = await callApi().get(`/products?page=${page}&per_page=${per_page}`);
    return res?.data?.data
}

export async function createProduct( values : MyFormProductCreate ) {
    return await callApi().post('/products/create', {
        ...values,
        body: values.description,
        category : values.category_id
    });

}

export async function DeleteProduct(productId : number ) {
    return await callApi().post(`/products/${productId}/delete`, {})
}