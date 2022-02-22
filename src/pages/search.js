import Footer from "../components/footer";
import Header from "../components/header";

const SearchPage = {
    async render() {
        const data = JSON.parse(localStorage.getItem("search"));
        return /* html */`
            <main>
                ${await Header.render()}
                <div class="max-w-6xl mx-auto sanphammoi pt-[135px]">
                    <div class="sanphammoi_tiltle px-[40px] text-center pt-10">
                        <h2>
                            <a href="#">Tìm kiếm cho ${JSON.parse(localStorage.getItem("searchinput"))}</a>
                        </h2>
                    </div>
                    <div class="pt-10 grid grid-cols-4 gap-8">
                        ${data.map((product) => `
                            <div class="pro-loop">
                                <div class="product">
                                    <div class="product_img">
                                        <a href="/product/${product.id}">
                                            <div class="figure">
                                                <img src="${product.image}" width="100%">
                                                <img src="${product.image2}" class="image-hover">
                                            </div>
                                        </a>
                                    </div>
                                    <div class="product_detail">
                                        <h3 class="product_detail-name">
                                            <a href="/product/${product.id}">${product.name}</a>
                                        </h3>
                                        <div class="product_detail-price font-bold text-black">
                                            <p>${new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(product.price)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </main>
            ${await Footer.render()}
        `;
    },
};
export default SearchPage;