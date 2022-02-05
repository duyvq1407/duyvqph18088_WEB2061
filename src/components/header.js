import { menu } from "../data";

const Header = {
    render() {
        return /* html */`
            <div class="bg-[#272F54] m-auto">
                <a href="#">
                    <img src="https://caodang.fpt.edu.vn/vinmart/images/icon2a.png" width="120px" class="mx-auto py-[14px]">
                </a>
            </div>
            <div class="bg-[#c97804] flex items-center justify-between py-2 px-6">
                <div id="menu" class="text-sm">
                    ${menu.map((menuItem) =>
    /** html */`
                            <a href = "${menuItem.path}" class="block text-white float-left px-3 hover:underline" > ${menuItem.title}</a> 
                        `).join("")}
                </div>
                <div class="flex ml-6 align-middle justify-center align-items-center">
                    <input type="text" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    <button type="submit" class="mt-1 mx-3 border border-transparent shadow-sm text-[12px] font-medium uppercase rounded-md text-white bg-[#272f54] hover:bg-indigo-700 min-w-[70px]">
                        Tìm kiếm
                    </button>
                </div>
            </div>
        `;
    },
};
export default Header;