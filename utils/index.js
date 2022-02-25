/* eslint-disable import/prefer-default-export */
// export const reRender = async (component, domElement) => {
//     if (component) {
//         document.querySelector(domElement).innerHTML = await component.render();
//         if (component.afterRender) component.afterRender();
//     }
// };
export const reRender = async (component, dom, id = "") => {
    document.querySelector(dom).innerHTML = await component.render(id);
    if (component.afterRender) component.afterRender(id);
};