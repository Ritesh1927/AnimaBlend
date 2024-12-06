const wrapper = document.querySelector('.login-main');
const login_link = document.querySelector('.login-link');
const register_link = document.querySelector('.register-link');
const account = document.querySelector('.account');
const login_container = document.querySelector('.login-container');
const login_close = document.querySelector('.login-close');

register_link.addEventListener('click', ()=> {
    wrapper.classList.add('active')
});


login_link.addEventListener('click', ()=> {
    wrapper.classList.remove('active')
});

account.addEventListener('click', ()=> {
    login_container.classList.add('active-popup')
});

login_close.addEventListener('click', ()=> {
    login_container.classList.remove('active-popup')
});