
            <div class="header_container">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="header_content d-flex flex-row align-items-center justify-content-start">
                            <div class="logo"><a href="./index.php"><img src="<?= $IMAGE_URL ?>/logo1.png"></a></div>
                            <nav class="main_nav">
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
                            <div class="header_extra ml-auto">
                                <div class="shopping_cart">
                                    <a href="#" onclick="document.querySelector('.show-cart').style.right = '0';">
                                        <i class="fas fa-shopping-bag"></i>
                                        <div>Cart <span>(0)</span></div>
                                    </a>
                                </div>
                                <div class="icon_user">
                                    <button class="btn" type="submit">
                                        <a href="<?= $SITE_URL ?>/?btn_login"> <i class="fas fa-user"></i></a>
                                    </button>
                                </div>
                                <div class="search">
                                    <div class="search_icon">
                                        <i class="fas fa-search" onclick="openSearchPanel()"></i>
                                    </div>
                                </div>
                                <div class="menu_nav">
                                    <i class="fa fa-bars" aria-hidden="false" onclick="openMenu()"></i>
                                </div>
                            </div>
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