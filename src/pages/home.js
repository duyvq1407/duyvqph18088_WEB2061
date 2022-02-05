import Banner from "../components/banner";

const HomePage = {
    async render() {
        return /* html */`
            <main class="mt-2">
                ${Banner.render()}
                <div id="news">
                </div>
            </main>
        `;
    },
};
export default HomePage;