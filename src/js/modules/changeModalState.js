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
                if (elem.length > 1) {
                    state[prop] = ndx; 
                    
                    
                } else {
                    state[prop] = item.value;
                    console.log(item.value);
                    
                }
                console.log(state);    
                state[prop] = ndx;
            });
        });
    }

    bindActionToElems("click", windowForm, "form");
    
    bindActionToElems("input", windowWidth, "width");

    bindActionToElems("input", windowHeight, "height");
};

export default changeModalState;
