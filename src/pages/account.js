/* eslint-disable eqeqeq */
/* eslint-disable no-console */
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Footer from "../components/footer";
import Header from "../components/header";

const AccountPage = {
    async render() {
        return /* html */`
            ${await Header.render()}
            <div class="mt-[130px] border-y-[1px] border-solid border-[#d5d5d5]">
                <div class="grid grid-cols-2 max-w-6xl mx-auto">
                    <div class="justify-center flex items-left flex-col">
                        <div>
                            <h2 class="text-4xl text-black font-bold">Thông tin tài khoản</h2>
                        </div>
                        <div class="w-12 mt-5 h-1 bg-black shadow"></div>
                    </div>
                    <div class="py-12 pl-[25px] border-l-[1px] border-solid border-[#d5d5d5] ">
                        <div class="layout-account_right">
                            <h3 class="mb-6 text-black"><b class="font-bold">Tên tài khoản</b> : ${JSON.parse(localStorage.getItem("user")).username}</h3>
                            <h3 class="mb-6 text-black"><b class="font-bold">Email</b> : ${JSON.parse(localStorage.getItem("user")).email}</h3>
                            <button id="logout" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Đăng xuất
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            ${await Footer.render()}
        `;
    },
    afterRender() {
        const logout = document.querySelector("#logout");
        logout.addEventListener("click", () => {
            localStorage.removeItem("user");
            toastr.success("Đăng xuất thành công");
            setTimeout(() => {
                document.location.href = "/signin";
            }, 3000);
        });
    },
};
export default AccountPage;