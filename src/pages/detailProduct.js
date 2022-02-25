/* eslint-disable object-shorthand */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import toastr from "toastr";
import { addToCart } from "../../utils/cart";
import { getCategory } from "../api/categories";
import { getProduct, getProductsByCateId } from "../api/product";
import Footer from "../components/footer";
import Header from "../components/header";

const DetailProductPage = {
    async render(id) {
        const { data } = await getProduct(id);
        const productRelated = await (await getProductsByCateId(data.cate_id)).data;
        const cateName = (await getCategory(data.cate_id)).data.name;
        return /* html */`
            ${await Header.render()}
            <div class="dieuhuong bg-[#f5f5f5] mt-[130px] mb-6">
                <div class="max-w-6xl text-left mx-auto">
                    <p class="py-4 text-black leading-6 text-[14px]">Trang chủ / Danh mục / ${cateName} / <span style="color: #777;">${data.name}</span></p>
                </div>
            </div>
            <div class="grid grid-cols-12 max-w-6xl mx-auto gap-4">
                <div class="col-span-7">
                    <img src="${data.image}" />
                </div>
                <div class="col-span-5 text-black text-left">
                    <div class="col-md-5 col-xs-12">
                        <div class="border-b-[1px] border-dotted border-[#d5d5d5]">
                            <h1 class="text-xl font-bold pb-3">${data.name}</h1>
                            <input type="text" value="${data.id}" name="ma_hh" hidden>
                        </div>
                        <div class="border-b-[1px] border-dotted border-[#d5d5d5]">
                            <h4 class="text-xl font-bold py-3">${new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(data.price)}</h4>
                        </div>
                        <div class="d-flex align-items-center" style="margin: 20px 0;">
                            <div class="text-left">
                                <input type="number" id="quantity" class="rounded-lg max-h-[38px] max-w-[70px]" value="1" min="1">
                            </div>
                        </div>
                        <div class="d-flex align-items-center" style="margin: 20px 0;">
                            <div class="text-left">
                                <button id="btnAddToCart" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="max-w-6xl mx-auto sanphammoi">
                <div class="sanphammoi_tiltle px-[40px] text-center pt-10">
                    <h2>
                        <p class="text-black">Sản phẩm liên quan</p>
                    </h2>
                    <div class="view-all">
                        <a href="/products/${data.cate_id}">Xem thêm</a>
                    </div>
                </div>
                <div class="pt-10 grid grid-cols-4 gap-8">
                    ${productRelated.filter((item) => item.name !== data.name).slice(0, 4).map((product) => `
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
        `;
    },
    afterRender(id) {
        const quantity = document.querySelector("#quantity");
        const size = document.getElementsByName("size");
        const btnAddToCart = document.querySelector("#btnAddToCart");
        let sizechecked;
        btnAddToCart.addEventListener("click", async () => {
            console.log(sizechecked);
            const { data } = await getProduct(id);
            addToCart({ ...data, quantity: quantity.value ? +quantity.value : 1 }, () => {
                toastr.success(`Thêm  ${data.name} vào giỏ hàng thành công!`);
            });
        });
    },
};
export default DetailProductPage;