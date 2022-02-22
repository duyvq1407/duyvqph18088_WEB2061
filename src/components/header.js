import NavBar from "./nav";
import PromoBar from "./promo-bar";

const Header = {
    async render() {
        return /* html */`
            ${PromoBar.render()}
            ${await NavBar.render()}
        `;
    },
    afterRender() {
        NavBar.afterRender();
    },
};
export default Header;