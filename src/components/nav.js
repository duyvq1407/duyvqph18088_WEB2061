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
                                                <a href="index.php" aria-readonly="true">Sản phẩm
                                                    <i class="fas fa-chevron-down" style="font-size: 14px;"></i>
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