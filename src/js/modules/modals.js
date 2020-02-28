const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                // document.body.classList.add('modal-open') //modal-open класс из бутстрапа
            })
        });

        close.addEventListener("click", () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
            // document.body.classList.remove('modal-open') //modal-open класс из бутстрапа
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";
                // document.body.classList.remove('modal-open') //modal-open класс из бутстрапа
            }

        });
    }


    function showModalByTime(selector, time) {                                          // функция для показа всплывающего окна через интервал time
            setTimeout(() => {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = "hidden";
            }, time)
            
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
    bindModal('.phone_link', '.popup', '.popup .popup_close');// вызываем другое окно при клике на заказать обратный звонок
    showModalByTime('.popup', 3000)
}

export default modals;