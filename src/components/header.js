// import { menu } from "../data";

import NavBar from "./nav";
import PromoBar from "./promo-bar";

const Header = {
    async render() {
        return /* html */`
            ${PromoBar.render()}
            ${await NavBar.render()}
        `;
    },
};
export default Header;