import toastr from "toastr";
import { getCategory, updateCategory } from "../../../api/categories";
import HeaderAdmin from "../../../components/header_admin";
import "toastr/build/toastr.min.css";

const EditCategoryPage = {
    async render(id) {
        const { data } = await getCategory(id);
        return /* html */`
            ${HeaderAdmin.render()}
            <header class="bg-white shadow mb-5">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <h1 class="text-3xl font-bold text-gray-900">
                Add Category
                </h1>
                <a href="/admin/categories/" class="text-indigo-600 hover:text-indigo-900 block">List Category</a>
            </div>
            </header>
            <div class="mt-10 sm:mt-0 max-w-7xl mx-auto">
                <div class="md:grid md:gap-6">
                    <div class="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" id="form-edit-cate">
                            <div class="shadow overflow-hidden sm:rounded-md mt-10">
                                <div class="px-4 py-5 bg-white sm:p-6">
                                    <div class="grid grid-cols-12 gap-6">
                                        <div class="col-span-12">
                                            <label for="first-name" class="block text-sm font-medium text-gray-700">ID</label>
                                            <input type="text" name="full-name" id="full-name" autocomplete="given-name" readonly placeholder="${data.id}"
                                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                        </div>

                                        <div class="col-span-12">
                                            <label for="title" class="block text-sm font-medium text-gray-700">Name</label>
                                            <input type="text" name="name" id="name-cate" autocomplete="name" value="${data.name}"
                                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                        </div>
                                    </div>
                                </div>
                                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Sửa sản phẩm
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit-cate");
        formEdit.addEventListener("submit", (e) => {
            e.preventDefault();
            updateCategory({
                id,
                name: document.querySelector("#name-cate").value,
            });
            toastr.success("Sửa thành công");
            setTimeout(() => {
                document.location.href = "/admin/categories";
            }, 3000);
        });
    },
};
export default EditCategoryPage;