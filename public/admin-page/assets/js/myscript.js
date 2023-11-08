const buttonEl =
    document.querySelector("button");
const modelEl =
    document.querySelector("model.content");

const openModel = () => {
    modelEl.classList.add("open");
};
const closeModel = (e) => {
    if (e.target.classList.content("open"))
        modelEl.classList.remove("open");
};
buttonEl.addEventListener("click", openModel);
window.addEventListener("click", closeModel);