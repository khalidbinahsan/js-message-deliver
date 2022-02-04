// immediate invoke function
(function() {
    const form = document.querySelector('.message-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const msg_box = document.querySelector('.msg-box');
        const get_msg = document.querySelector('#message');
        const show_msg = document.querySelector('.msg-show-box');
        const warn_msg = document.querySelector('.warning-msg');
        msg_box.style.height = '250px';
        if (get_msg.value === '') {
            warn_msg.classList.add('show');
            show_msg.textContent = '';
            setTimeout(() => {
                warn_msg.classList.remove('show');
                msg_box.style.height = '200px';
            }, 9000);
        } else {
            show_msg.textContent = get_msg.value;
            warn_msg.classList.remove('show');
            get_msg.value = '';
        }

    });
})();