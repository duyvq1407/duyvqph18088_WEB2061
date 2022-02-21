import { getAllCategories, getCategory } from "../api/categories";
import { getProductsByCateId } from "../api/product";
import Footer from "../components/footer";
import Header from "../components/header";

const ProductPage = {
    async render(id) {
        const { data } = await getProductsByCateId(id);
        const categories = await (await getAllCategories()).data;
        const cateName = (await getCategory(id)).data.name;
        return /* html */`
                ${await Header.render()}
                <div class="dieuhuong bg-[#f5f5f5] mt-[130px] mb-6">
                    <div class="max-w-6xl text-left mx-auto">
                        <p class="py-4 text-black leading-6 text-[14px]">Trang chủ / Danh mục / <span style="color: #777;">${cateName}</span></p>
                    </div>
                </div>
                <div class="max-w-6xl mx-auto grid grid-cols-3">
                    <div class="col-span-1 text-left">
                        <nav class="m-0 pr-[15px]">
                            <h2 class="font-bold text-xl text-black">Danh mục</h2>
                            <hr class="my-3 border-0 border-t-2">
                            <ul>
                                ${categories.map((category) => `
                                    <li class="ml-2 py-[15px] block border-dashed border-b-[1px] border-[#e7e7e7]"><a class="text-[13px] font-medium text-[#272727]" href="/products/${category.id}">${category.name}</a></li>
                                `).join("")}
                            </ul>
                        </nav>
                    </div>
                    <div class="col-span-2">
                        <div>
                            <h2 class="font-bold text-[20px] block ml-24 text-black mb-6">${cateName}</h2>
                        </div>
                        <div class="col-span-12 ml-24 grid grid-cols-4 gap-8">
                            ${data.slice(0, 21).map((product) => `
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
                    ${await Footer.render()}                    
                </div>
                 `;
    },
};
export default ProductPage;