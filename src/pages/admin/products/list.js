/* eslint-disable no-alert */
import toastr from "toastr";
import { reRender } from "../../../../utils";
import "toastr/build/toastr.min.css";
import { getAllProducts, removeProduct } from "../../../api/product";
import HeaderAdmin from "../../../components/header_admin";

const listProductPage = {
    async render() {
        const { data } = await getAllProducts();
        return /* html */`
            ${HeaderAdmin.render()}
            <header class="bg-white shadow mb-5">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-900">Product</h1>
                <a href="/admin/products/add" class="text-indigo-600 hover:text-indigo-900 block">Add Product</a>
            </div>
            </header>
            <div class="flex flex-col max-w-7xl mx-auto">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Id
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Cate_Id
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Price
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Detail
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Image
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Detail Image
                                    </th>
                                    <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                ${data.map((product) => `
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">${product.id}</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <p class="text-sm text-gray-900 truncate hover:text-clip">${product.name}</p>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap max-w-[400px]">
                                            <p class="text-sm text-gray-900 truncate hover:text-clip">${product.cate_id}</p>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap max-w-[400px]">
                                            <p class="text-sm text-gray-900 truncate hover:text-clip">${product.price}</p>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap max-w-[400px]">
                                            <p class="text-sm text-gray-900 truncate hover:text-clip">${product.detail}</p>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <img src="${product.image}" class="max-h-[70px]">
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <img src="${product.image2}" class="max-h-[70px]">
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="/admin/products/${product.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                            <button data-id="${product.id}" class="ml-2 btn btn-remove text-indigo-600 hover:text-indigo-900">Remove</button>
                                        </td>
                                    </tr>
                                `).join("")}
                    
                                <!-- More people... -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    afterRender() {
        // Lấy toàn bộ button có class .btn
        const btns = document.querySelectorAll(".btn");
        btns.forEach((buttonElement) => {
            // lấy id button thông qua thuộc tính data-id
            const { id } = buttonElement.dataset;
            buttonElement.addEventListener("click", () => {
                // Xoa phan tu trong mang dua tren ID
                const confirm = window.confirm("Bạn có muốn xóa hay không?");
                if (confirm) {
                    // call api xóa
                    removeProduct(id)
                        .then(() => toastr.success("Bạn đã xóa thành công"))
                        .then(() => reRender(listProductPage, "#app"));
                }
            });
        });
    },
};
export default listProductPage;