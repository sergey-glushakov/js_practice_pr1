const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const  header = document.querySelector(headerSelector); // общий блок с кнопками табов
    const  tab = document.querySelectorAll(tabSelector);
    const  content = document.querySelectorAll(contentSelector);
    //const  header = document.querySelector(activeClass);

    function hideTabContent() {
        content.forEach(item =>{
            item.style.display = 'none';
        })

        tab.forEach(item =>{
            item.classList.remove(activeClass); 
        })
    }

    function showTabContent(ndx = 0) {
        content[ndx].style.display = 'block';

        tab[ndx].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target && (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) { // убираю точку в имени класса, приходящего в tabSelector 
            tab.forEach((item, ndx) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(ndx);
                }
            })
        }
    })
};

export default tabs;