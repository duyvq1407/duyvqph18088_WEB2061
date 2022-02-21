import Navigo from "navigo";
import "../style.css";
import Footer from "./components/footer";
import HomePage from "./pages/home";
import listCatePage from "./pages/admin/categories/list";
import AddCategoriesPage from "./pages/admin/categories/add";
import EditCategoryPage from "./pages/admin/categories/edit";
import AddProductPage from "./pages/admin/products/add";
import listProductPage from "./pages/admin/products/list";
import Dashboard from "./pages/admin/dashboard";
import EditProductPage from "./pages/admin/products/edit";
import ProductPage from "./pages/product";
import DetailProductPage from "./pages/detailProduct";
import Signup from "./pages/signup";
import SignInPage from "./pages/singin";

const router = new Navigo("/", { linksSelector: "a" });
export default router;
const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    document.querySelector("#footer").innerHTML = Footer.render();
    if (content.afterRender) content.afterRender(id);
};
router.on({
    "/": () => {
        print(HomePage);
    },
    "/signin": () => {
        print(SignInPage);
    },
    "/signup": () => {
        print(Signup);
    },
    "/products/:id": ({ data }) => {
        print(ProductPage, data.id);
    },
    "/product/:id": ({ data }) => {
        print(DetailProductPage, data.id);
    },
    "/admin/": () => {
        print(Dashboard);
    },
    "/admin/categories": () => {
        print(listCatePage);
    },
    "/admin/categories/add": () => {
        print(AddCategoriesPage);
    },
    "/admin/categories/:id/edit": ({ data }) => {
        print(EditCategoryPage, data.id);
    },
    "/admin/products": () => {
        print(listProductPage);
    },
    "/admin/products/add": () => {
        print(AddProductPage);
    },
    "/admin/products/:id/edit": ({ data }) => {
        print(EditProductPage, data.id);
    },
});
router.resolve();