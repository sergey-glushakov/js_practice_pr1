const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) { // closeClickOverlay = true при клике на подложку по умолчанию закрывается модальное окно
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]');

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                
                windows.forEach( item => {
                    item.style.display = 'none'
                })
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                // document.body.classList.add('modal-open') //modal-open класс из бутстрапа
            })
        });

        close.addEventListener("click", () => {

            windows.forEach( item => {
                item.style.display = 'none'
            })

            modal.style.display = "none";
            document.body.style.overflow = "";
            // document.body.classList.remove('modal-open') //modal-open класс из бутстрапа
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {

                windows.forEach( item => {
                    item.style.display = 'none'
                })

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
    //showModalByTime('.popup', 3000)
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', '') // модальное окно с формой калькулятором
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false) // модальное окно с формой калькулятором
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false) // модальное окно с формой калькулятором
}

export default modals;