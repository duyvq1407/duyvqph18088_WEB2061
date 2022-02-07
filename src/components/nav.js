const NavBar = {
    render() {
        return /* html */`
            <div class="header fixed top-8 left-0 right-0 z-100 h-[70px] shadow-lg">
                <div class="header_container bg-[#fff] z-1">
                    <div class="container m-auto max-w-[1028px]">
                        <div class="row">
                            <div class="col-12">
                                <div class="header_content h-[130px] transition-all duration-300 flex flex-row items-center justify-start">
                                    <div class="logo"><a href="#"><img class="h-[100px]" src="https://purepng.com/public/uploads/large/purepng.com-disney-logologobrand-logoiconslogos-251519939495wtv86.png"></a></div>
                                    <nav class="main_nav ml-[130px]">
                                        <div class="close_menu">
                                            <i class="fas fa-times" onclick="closeMenu()"></i>
                                        </div>
                                        <ul>
                                            <li class="main_nav-item active">
                                                <a href="index.php">Trang chủ</a>
                                            </li>
                                            <li class="main_nav-item" onclick="openListLink()">
                                                <a href="index.php" class="flex items-center" aria-readonly="true">Sản phẩm
                                                    <svg aria-hidden="true" class="duration-500 ease-in-out transition-all fa-chevron-down h-[14px] ml-1" viewBox="0 0 448 512">
                                                        <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                                    </svg>
                                                </a>
                                                <ul>
                                                    <li><a href="#">Tee | Áo thun</a></li>
                                                    <li><a href="#">Pant | Quần</a></li>
                                                    <li><a href="#">Jacket | Áo khoác</a></li>
                                                    <li><a href="#">Accessories | Phụ kiện</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Giới thiệu</a></li>
                                            <li><a href="#">Liên hệ</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="search_panel">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="search_panel_content d-flex flex-row align-items-center justify-content-end">
                                    <form action="">
                                        <input type="text" class="search_input" placeholder="Tìm kiếm...">
                                        <button class="btn btn-dark" name="btn_search" style="height: 40px;">Tìm kiếm</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
};
export default NavBar;