import checkNumInputs from "./checkNumInputs";

const changeModalState = state => {
    const windowForm = document.querySelectorAll(".balcon_icons_img");
    const windowWidth = document.querySelectorAll("#width");
    const windowHeight = document.querySelectorAll("#height");
    const windowType = document.querySelectorAll("#view_type");
    const windowProfile = document.querySelectorAll(".checkbox");

    checkNumInputs("#width");
    checkNumInputs("#height");

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, ndx) => {
            item.addEventListener(event, () => {

                switch (item.nodeName) {
                    case "SPAN":
                        state[prop] = ndx;
                        break;
                    case "INPUT":
                        if (item.getAttribute("type") === "checkbox") {
                            ndx === 0
                                ? (state[prop] = "Холодное")
                                : (state[prop] = "Теплое");
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (ndx == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case "SELECT":
                        state[prop] = item.value;
                        break;
                }

                console.log(state);
                
            });
        });
    }

    bindActionToElems("click", windowForm, "form");
    bindActionToElems("input", windowWidth, "width");
    bindActionToElems("input", windowHeight, "height");
    bindActionToElems("change", windowType, "type");
    bindActionToElems("change", windowProfile, "profile");
};

export default changeModalState;
