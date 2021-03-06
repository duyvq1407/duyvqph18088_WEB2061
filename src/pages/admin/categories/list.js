/* eslint-disable no-alert */
import toastr from "toastr";
import { getAllCategories, removeCategory } from "../../../api/categories";
import HeaderAdmin from "../../../components/header_admin";
import "toastr/build/toastr.min.css";
import { reRender } from "../../../../utils";

const listCatePage = {
    async render() {
        const { data } = await getAllCategories();
        return /* html */`
            ${HeaderAdmin.render()}
            <header class="bg-white shadow mb-5">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-900">Categories</h1>
                <a href="/admin/categories/add" class="text-indigo-600 hover:text-indigo-900 block">Add Category</a>
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
                                    </th>\
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                    </th>
                                    <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                ${data.map((category) => `
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">${category.id}</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <p class="text-sm text-gray-900 truncate hover:text-clip">${category.name}</p>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="/admin/categories/${category.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                            <button data-id="${category.id}" class="ml-2 btn btn-remove text-indigo-600 hover:text-indigo-900">Remove</button>
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
        // L???y to??n b??? button c?? class .btn
        const btns = document.querySelectorAll(".btn");
        btns.forEach((buttonElement) => {
            // l???y id button th??ng qua thu???c t??nh data-id
            const { id } = buttonElement.dataset;
            buttonElement.addEventListener("click", () => {
                // Xoa phan tu trong mang dua tren ID
                const confirm = window.confirm("Are you sure you want to delete this item?");
                if (confirm) {
                    // call api x??a
                    removeCategory(id);
                    toastr.success("B???n ???? x??a th??nh c??ng");
                    reRender(listCatePage, "#app");
                }
            });
        });
    },
};
export default listCatePage;