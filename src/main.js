import Navigo from "navigo";
import "../style.css";

const router = new Navigo("/", { linksSelector: "a" });
export default router;
const print = async (content, id) => {
    document.querySelector("#header").innerHTML = .render();
    document.querySelector("#app").innerHTML = await content.render(id);
    document.querySelector("#footer").innerHTML = Footer.render();
    if (content.afterRender) content.afterRender(id);
};
router.on({
    "/": () => {
        // print(HomePage);
    },
});
router.notFound(() => print(NotFoundPage));
router.resolve();