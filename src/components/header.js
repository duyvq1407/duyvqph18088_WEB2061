// import { menu } from "../data";

import NavBar from "./nav";
import PromoBar from "./promo-bar";

const Header = {
    render() {
        return /* html */`
            ${PromoBar.render()}
            ${NavBar.render()}
        `;
    },
};
export default Header;