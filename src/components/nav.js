import { getAllCategories } from "../api/categories";
import { searchProduct } from "../api/product";

const NavBar = {
    async render() {
        const { data } = await getAllCategories();
        return /* html */`
            <div class="header fixed top-8 left-0 right-0 z-50 h-[70px] shadow-lg">
                <div class="header_container bg-[#fff] z-1">
                    <div class="container m-auto max-w-6xl grid grid-cols-12 items-center">
                        <div class="col-span-11 header_content h-[130px] transition-all duration-300 flex flex-row items-center justify-start">
                            <div class="logo"><a href="#"><img class="h-[100px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Disney_wordmark.svg/1280px-Disney_wordmark.svg.png"></a></div>
                            <nav class="main_nav ml-[130px]">
                                <div class="close_menu">
                                    <i class="fas fa-times" onclick="closeMenu()"></i>
                                </div>
                                <ul>
                                    <li class="main_nav-item active">
                                        <a href="/">Trang chủ</a>
                                    </li>
                                    <li class="main_nav-item" onclick="openListLink()">
                                        <a href="/" class="flex items-center" aria-readonly="true">Sản phẩm
                                            <svg aria-hidden="true" class="duration-500 ease-in-out transition-all fa-chevron-down h-[14px] ml-1" viewBox="0 0 448 512">
                                                <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                            </svg>
                                        </a>
                                        <ul>
                                            ${data.map((category) => `
                                                <li><a href="/products/${category.id}">${category.name}</a></li>
                                            `).join("")}
                                        </ul>
                                    </li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Giới thiệu</a></li>
                                    <li><a href="#">Liên hệ</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="col-span-1 flex justify-between">
                            <a href="/cart" Id="cart"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg></a>
                            <a href="/signin" Id="account"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg></a>
                            <button><svg onclick="openSearchPanel()"  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg></button>
                        </div>
                    </div>
                </div>
                <style>
                    #search_panel.active {
                        bottom: 0px;
                        opacity: 1;
                        visibility: visible;
                    }
                </style>
                <div id="search_panel" class="bottom-9 opacity-0 relative left-0 w-[100%] bg-[#e4e4e4] -z-10 duration-500">
                    <div class="max-w-6xl mx-auto">
                        <div class="search_panel_content flex flex-row items-center justify-end">
                            <form action="" id="form_search">
                                <input type="text" id="search_input" class="search_input" placeholder="Tìm kiếm...">
                                <button class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Tìm kiếm
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    afterRender() {
        const account = document.querySelector("#account");
        if (JSON.parse(localStorage.getItem("user"))) {
            if (account) {
                account.href = "/account";
            }
        }
        const formSearch = document.querySelector("#form_search");
        const searchinput = document.querySelector("#search_input");
        if (formSearch) {
            formSearch.addEventListener("submit", async (e) => {
                e.preventDefault();
                const { data } = await searchProduct(searchinput.value);
                if (data) {
                    localStorage.setItem("search", JSON.stringify(data));
                    localStorage.setItem("searchinput", JSON.stringify(searchinput.value));
                }
                setTimeout(() => {
                    document.location.href = "/search";
                }, 200);
            });
        }
    },
};
export default NavBar;