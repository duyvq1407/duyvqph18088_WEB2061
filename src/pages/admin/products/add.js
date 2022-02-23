/* eslint-disable no-unused-vars */
import axios from "axios";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import $ from "jquery";
import validate from "jquery-validation";
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
                                            <input type="text" name="id" id="id" autocomplete="given-name" readonly placeholder="Autocomplete"
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
                                        <div class="col-span-6">
                                            <label class="block text-sm font-medium text-gray-700">Image</label>
                                            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                <div class="space-y-1 text-center">
                                                    <img src="http://2.bp.blogspot.com/-MowVHfLkoZU/VhgIRyPbIoI/AAAAAAAATtI/fHk-j_MYUBs/s640/placeholder-image.jpg" 
                                                    class="max-h-[70px] mx-auto" id="imgPreview" />
                                                    <div class="flex text-sm text-gray-600">
                                                        <input id="image" name="image" type="file">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                        
                                        <div class="col-span-6">
                                            <label class="block text-sm font-medium text-gray-700">Detail Image</label>
                                            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                <div class="space-y-1 text-center">
                                                    <img src="http://2.bp.blogspot.com/-MowVHfLkoZU/VhgIRyPbIoI/AAAAAAAATtI/fHk-j_MYUBs/s640/placeholder-image.jpg" 
                                                    class="max-h-[70px] mx-auto" id="imgPreview2" />
                                                    <div class="flex text-sm text-gray-600">
                                                        <input id="image2" name="image2" type="file">
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
        const formAdd = $("#form-add-product");
        const imgPost = document.querySelector("#image");
        const imgPost2 = document.querySelector("#image2");
        const imgPreview = document.querySelector("#imgPreview");
        const imgPreview2 = document.querySelector("#imgPreview2");

        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/duyvqph18088/image/upload";
        const CLOUDINARY_PRESET = "y12jh0jj";

        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });
        imgPost2.addEventListener("change", (e) => {
            imgPreview2.src = URL.createObjectURL(e.target.files[0]);
        });
        formAdd.validate({
            rules: {
                name: {
                    required: true,
                    minlength: 5,
                    maxlength: 150,
                },
                detail: {
                    required: true,
                    minlength: 5,
                    maxlength: 150,
                },
                price: {
                    required: true,
                    number: true,
                },
                image: {
                    required: true,
                },
            },
            messages: {
                name: {
                    required: "Bắt buộc phải nhập trường này anh ei",
                    minlength: "Ít nhất phải 5 ký tự anh ei",
                    maxlength: "Không được vượt quá 150 ký tự anh ei",
                },
                detail: {
                    required: "Bắt buộc phải nhập trường này anh ei",
                    minlength: "Ít nhất phải 5 ký tự anh ei",
                    maxlength: "Không được vượt quá 150 ký tự anh ei",
                },
                price: {
                    required: "Bắt buộc phải nhập trường này anh ei",
                    number: "Giá thì nhập số nào anh",
                },
                image: {
                    required: "<br>Chọn ảnh đi anh zai",
                },
            },
            submitHandler: () => {
                async function addProductHandler() {
                    // Lấy giá trị input file
                    const file = imgPost.files[0];
                    const file2 = imgPost2.files[0];

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
                    const formData2 = new FormData();
                    formData2.append("file", file2);
                    formData2.append("upload_preset", CLOUDINARY_PRESET);

                    // call api cloudinary
                    const response2 = await axios.post(CLOUDINARY_API, formData2, {
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
                        image2: response2.data.url,
                    });
                    toastr.success("Thêm sản phẩm thành công");
                    setTimeout(() => {
                        document.location.href = "/admin/products";
                    }, 3000);
                }
                addProductHandler();
            },
        });

        // formAdd.addEventListener("submit", async (e) => {
        //     e.preventDefault();

        //     // Lấy giá trị input file
        //     const file = imgPost.files[0];
        //     const file2 = imgPost2.files[0];

        //     // append vào object formData
        //     const formData = new FormData();
        //     formData.append("file", file);
        //     formData.append("upload_preset", CLOUDINARY_PRESET);

        //     // call api cloudinary
        //     const response = await axios.post(CLOUDINARY_API, formData, {
        //         headers: {
        //             "Content-Type": "application/form-data",
        //         },
        //     });
        //     const formData2 = new FormData();
        //     formData2.append("file", file2);
        //     formData2.append("upload_preset", CLOUDINARY_PRESET);

        //     // call api cloudinary
        //     const response2 = await axios.post(CLOUDINARY_API, formData2, {
        //         headers: {
        //             "Content-Type": "application/form-data",
        //         },
        //     });
        //     addProduct({
        //         name: document.querySelector("#name-product").value,
        //         cate_id: document.querySelector("#cate_Id").value,
        //         price: document.querySelector("#price-product").value,
        //         detail: document.querySelector("#detail-product").value,
        //         image: response.data.url,
        //         image2: response2.data.url,
        //     });
        //     toastr.success("Thêm sản phẩm thành công");
        //     setTimeout(() => {
        //         document.location.href = "/admin/products";
        //     }, 3000);
        // });
    },
};
export default AddProductPage;