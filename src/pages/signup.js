import { signup } from "../api/user";
import Header from "../components/header";

const Signup = {
    async render() {
        return /* html */`
            ${await Header.render()}
            <div class="mt-[130px] border-t-[1px] border-solid border-[#d5d5d5]">
                <div class="grid grid-cols-2 max-w-6xl mx-auto">
                    <div class="pt-[170px]">
                        <div>
                            <h2 class="text-4xl text-black font-bold">Đăng ký</h2>
                        </div>
                    </div>
                    <div class="pt-[50px] pl-[25px] border-l-[1px] border-solid border-[#d5d5d5] ">
                        <div class="md:grid md:gap-6">
                            <form action="#" id="formSignup">
                                <div class="overflow-hidden">
                                    <div class="px-4 py-5 bg-white sm:p-6">
                                        <div class="grid grid-cols-12 gap-6">
                                            <div class="col-span-12">
                                                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                                                <input type="text" name="email" id="email" autocomplete="email"
                                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                            </div>

                                            <div class="col-span-12">
                                                <label for="user"
                                                    class="block text-sm font-medium text-gray-700">Tên tài khoản</label>
                                                <input type="text" name="user" id="username" autocomplete="user"
                                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                            </div>

                                            <div class="col-span-12">
                                                <label for="password"
                                                    class="block text-sm font-medium text-gray-700">Mật khẩu</label>
                                                <input type="password" name="password" id="password" autocomplete="password"
                                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="px-4 py-3 flex justify-between">
                                        <a type="submit" href="/" class="items-center inline-flex justify-center py-2 px-4 text-sm font-medium rounded-md text-black">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                            </svg>  <span class="ml-1">Quay lại trang chủ</span>
                                        </a>
                                        <button type="submit"
                                            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Đăng ký
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    afterRender() {
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", async (e) => {
            e.preventDefault();

            try {
                const data = await signup({
                    username: document.querySelector("#username").value,
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        });
    },
};
export default Signup;