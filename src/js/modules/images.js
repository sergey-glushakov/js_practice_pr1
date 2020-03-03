const images = () => {
    const imgPopup = document.createElement("div"); // создаю popup с показываемым изображением
    const workSection = document.querySelector(".works"); // общая секция с картинками
    const bigImage = document.createElement("img"); // большое изображение

    imgPopup.classList.add("popup");
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = "center";
    imgPopup.style.alignItems = "center";
    imgPopup.style.display = "none";

    imgPopup.appendChild(bigImage);

    workSection.addEventListener("click", e => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains("preview")) {
            imgPopup.style.display = "flex";
            document.body.style.overflow = "hidden";
            const path = target.parentNode.getAttribute("href");
            bigImage.setAttribute("src", path);
        }

        if (target && target.matches("div.popup")) { // совпадение
            imgPopup.style.display = "none";
            document.body.style.overflow = "";
        } // если пользователь клацает не в картинку
    });
};

export default images;
