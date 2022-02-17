import instance from "./instance";

export const getAllCategories = () => {
    const url = "/categories";
    return instance.get(url);
};
export const getCategory = (id) => {
    const url = `/categories/${id}`;
    return instance.get(url);
};
export const addCategory = (category) => {
    const url = "/categories";
    return instance.post(url, category);
};
export const removeCategory = (id) => {
    const url = `/categories/${id}`;
    return instance.delete(url);
};
export const updateCategory = (category) => {
    const url = `/categories/${category.id}`;
    return instance.put(url, category);
};