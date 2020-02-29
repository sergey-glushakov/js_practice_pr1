const forms = () => {
    const form = document.querySelectorAll("form");
    input = document.querySelectorAll("input");

    const message = {
        loading: "Загрузка...",
        success: "Спасибо!Скоро мы с вами свяжемся",
        failure: "Что-то пошло не так..."
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent(message.loading);
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    }

    const clearInputs = () => {
        imputs.forEach(item => {
            item.value = '';
        })
    }



    form.forEach(item => {
        item.addEventListener('submit', (e => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = newData(item);

            postData("assets/server.php", formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => (statusMessage.textContent = message.failure))
                .finaly(params => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                    
                });
        }))
    })
};

export default forms;