import Navigo from "navigo";
import "../style.css";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/home";
import listCatePage from "./pages/admin/categories/list";
import AddCategoriesPage from "./pages/admin/categories/add";
import EditCategoryPage from "./pages/admin/categories/edit";
import AddProductPage from "./pages/admin/products/add";
import listProductPage from "./pages/admin/products/list";
import Dashboard from "./pages/admin/dashboard";
import EditProductPage from "./pages/admin/products/edit";

const router = new Navigo("/", { linksSelector: "a" });
export default router;
const print = async (content, id) => {
    document.querySelector("#header").innerHTML = await Header.render();
    document.querySelector("#app").innerHTML = await content.render(id);
    document.querySelector("#footer").innerHTML = Footer.render();
    if (content.afterRender) content.afterRender(id);
};
router.on({
    "/": () => {
        print(HomePage);
    },
    "/admin/": () => {
        print(Dashboard);
        document.querySelector("#header").innerHTML = "";
    },
    "/admin/categories": () => {
        print(listCatePage);
        document.querySelector("#header").innerHTML = "";
    },
    "/admin/categories/add": () => {
        print(AddCategoriesPage);
        document.querySelector("#header").innerHTML = "";
    },
    "/admin/categories/:id/edit": ({ data }) => {
        print(EditCategoryPage, data.id);
        document.querySelector("#header").innerHTML = "";
    },
    "/admin/products": () => {
        print(listProductPage);
        document.querySelector("#header").innerHTML = "";
    },
    "/admin/products/add": () => {
        print(AddProductPage);
        document.querySelector("#header").innerHTML = "";
    },
    "/admin/products/:id/edit": ({ data }) => {
        print(EditProductPage, data.id);
        document.querySelector("#header").innerHTML = "";
    },
});
router.resolve();