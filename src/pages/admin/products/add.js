import axios from "axios";
import HeaderAdmin from "../../../components/header_admin";
import { getAllCategories } from "../../../api/categories";
import { addProduct } from "../../../api/product";

const AddProductPage = {
    async render() {
        const { data } = await getAllCategories();
        return /* html */`
            ${HeaderAdmin.render()}
            <header class="bg-white shadow mb-5">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-900">
                Add Product
                </h1>
                <a href="/admin/products/" class="text-indigo-600 hover:text-indigo-900 block">List Products</a>
            </div>
            </header>
            <div class="mt-10 sm:mt-0 max-w-7xl mx-auto">
                <div class="md:grid md:gap-6">
                    <div class="mt-5 mx-2 md:mt-0 md:col-span-2">
                        <form action="#" id="form-add-product">
                            <div class="shadow overflow-hidden sm:rounded-md mt-10">
                                <div class="px-4 py-5 bg-white sm:p-6">
                                    <div class="grid grid-cols-12 gap-6">
                                        <div class="col-span-12">
                                            <label for="first-name" class="block text-sm font-medium text-gray-700">ID</label>
                                            <input type="text" name="full-name" id="full-name" autocomplete="given-name" readonly placeholder="Autocomplete"
                                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                        </div>

                                        <div class="col-span-12">
                                            <label for="title" class="block text-sm font-medium text-gray-700">Name</label>
                                            <input type="text" name="name" autocomplete="name" id="name-product"
                                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                        </div>
                                        <div class="col-span-12">
                                            <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
                                            <select id="cate_Id" name="category" autocomplete="category-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                ${data.map((category) => `
                                                    <option value="${category.id}">${category.name}</option>
                                                `).join("")}
                                            </select>
                                        </div>
                                        <div class="col-span-12">
                                            <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                                            <input type="text" name="price" autocomplete="price" id="price-product"
                                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                        </div>
                                        <div class="col-span-12">
                                            <label for="detail" class="block text-sm font-medium text-gray-700">Detail</label>
                                            <input type="text" name="detail" autocomplete="detail" id="detail-product"
                                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                        </div>
                                        <div class="col-span-12">
                                            <label class="block text-sm font-medium text-gray-700">Image</label>
                                            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                <div class="space-y-1 text-center">
                                                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <div class="flex text-sm text-gray-600">
                                                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                                    </label>
                                                    <p class="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Thêm sản phẩm
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add-product");
        const imgPost = document.querySelector("#file-upload");

        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/duyvqph18088/image/upload";
        const CLOUDINARY_PRESET = "y12jh0jj";

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Lấy giá trị input file
            const file = imgPost.files[0];

            // append vào object formData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            // call api cloudinary
            const response = await axios.post(CLOUDINARY_API, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            addProduct({
                name: document.querySelector("#name-product").value,
                cate_id: document.querySelector("#cate_Id").value,
                price: document.querySelector("#price-product").value,
                detail: document.querySelector("#detail-product").value,
                image: response.data.url,
            });
            document.location.href = "/admin/products";
        });
    },
};
export default AddProductPage;