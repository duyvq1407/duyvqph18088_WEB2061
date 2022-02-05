import Navigo from "navigo";
import "../style.css";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/home";
import PromoBar from "./components/promo-bar";

const router = new Navigo("/", { linksSelector: "a" });
export default router;
const print = async (content, id) => {
    document.querySelector("#promo-bar").innerHTML = PromoBar.render();
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#app").innerHTML = await content.render(id);
    document.querySelector("#footer").innerHTML = Footer.render();
    if (content.afterRender) content.afterRender(id);
};
router.on({
    "/": () => {
        print(HomePage);
    },
});
// router.notFound(() => print(NotFoundPage));
router.resolve();