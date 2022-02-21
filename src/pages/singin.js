/* eslint-disable eqeqeq */
/* eslint-disable no-console */
import toastr from "toastr";
import { signin } from "../api/user";
import "toastr/build/toastr.min.css";
import Footer from "../components/footer";
import Header from "../components/header";

const SignInPage = {
    async render() {
        return /* html */`
            ${await Header.render()}
            <div class="mt-[130px] border-t-[1px] border-solid border-[#d5d5d5]">
                <div class="grid grid-cols-2 max-w-6xl mx-auto">
                    <div class="pt-[170px]">
                        <div>
                            <h2 class="text-4xl text-black font-bold">Đăng nhập</h2>
                        </div>
                    </div>
                    <div class="pt-[50px] pl-[25px] border-l-[1px] border-solid border-[#d5d5d5] ">
                        <div class="min-h-full flex items-center justify-center">
                            <div class="max-w-md w-full space-y-8">
                                <form class="mt-8 space-y-6" action="#" id="formSignin">
                                    <input type="hidden" name="remember" value="true">
                                    <div class="grid grid-cols-12 gap-6">
                                        <div class="col-span-12">
                                            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                                            <input type="text" required name="email" id="email" autocomplete="email"
                                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                        </div>
                                        <div class="col-span-12">
                                            <label for="password"
                                                class="block text-sm font-medium text-gray-700">Mật khẩu</label>
                                            <input type="password" required name="password" id="password" autocomplete="password"
                                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                        </div>
                                    </div>
                            
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                                            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                                                Ghi nhớ mật khẩu
                                            </label>
                                        </div>
                                
                                        <div class="text-sm">
                                            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                                                Quên mật khẩu?
                                            </a>
                                        </div>
                                    </div>
                            
                                    <div>
                                        <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#272f54] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                            </span>
                                            Đăng nhập
                                        </button>
                                        <div class="flex justify-around my-4 items-center">
                                            <div class="block w-[100%] bg-slate-600 h-[1px]"></div>
                                            <p class="mx-2">Hoặc</p>
                                            <div class="block w-[100%] bg-slate-600 h-[1px]"></div>
                                        </div>
                                        <a href="/signup" type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#c97804] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                            <!-- Heroicon name: solid/lock-closed -->
                                            </span>
                                            Tạo tài khoản mới
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ${await Footer.render()}
        `;
    },
    afterRender() {
        const formSignin = document.querySelector("#formSignin");
        formSignin.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
            // call api
                const { data } = await signin({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                if (data) {
                    localStorage.setItem("user", JSON.stringify(data.user));
                    toastr.success("Đăng nhập thành công");
                    setTimeout(() => {
                        if (data.user.id === 1) {
                            document.location.href = "/admin/products";
                        } else {
                            document.location.href = "/";
                        }
                    }, 2000);
                }
            } catch (error) {
                toastr.error(error.response.data);
            }
        });
    },
};
export default SignInPage;