let submitButton = document.getElementById('submit-button')
let usernameInput = document.getElementById('username')
let passwordInput = document.getElementById('password')
let passConfirmInput = document.getElementById('password-confirm')

submitButton.onclick = function(event) {
    event.preventDefault()
    checkUsernameInput(usernameInput)
    checkPasswordInput(passwordInput)
    checkPasswordConfirm(passwordInput, passConfirmInput)
}

function checkUsernameInput(username) {
    if (!username.value) {
        username.nextElementSibling.innerText = 'الزامی'
        username.parentElement.classList.add('has-error')
        return false
    }
    username.nextElementSibling.innerText = ''
    username.parentElement.classList.remove('has-error')
    return true
}

function checkPasswordInput(password) {
    let value = password.value
    if (!value) {
        password.nextElementSibling.innerText = 'الزامی'
        password.parentElement.classList.add('has-error')
        return false
    }

    /*      REGEX FOR CHECK PASS
            /^               : Start
            (?=.{8,})        : Length
            (?=.*[a-zA-Z])   : Letters
            (?=.*[\d])       : Digits
            (?=.*[!#$%&? "]) : Special characters
            $/               : End
            (/^
            (?=.*[\d])              should contain at least one digit
            (?=.*[a-z])             should contain at least one lower case
            (?=.*[A-Z])             should contain at least one upper case
            [a-zA-Z0-9]{8,}         should contain at least 8 from the mentioned characters
            $/)
            Example:-   /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/
    */

    let regex = /^(?=.*[\d])(?=.*[a-zA-Z])[\w!@#$%^&*]{8,}$/
    if (!regex.test(value)) {
        password.nextElementSibling.innerText = 'رمز عبور باید شامل حداقل ۸ کاراکتر و حداقل یک حرف و یک عدد باشد'
        password.parentElement.classList.add('has-error')
        return false
    }
    password.nextElementSibling.innerText = ''
    password.parentElement.classList.remove('has-error')
    return true
}

function checkPasswordConfirm(password, passConfirm) {
    if (!passConfirm.value) {
        passConfirm.nextElementSibling.innerText = 'الزامی'
        passConfirm.parentElement.classList.add('has-error')
        return false
    }
    if (password.value !== passConfirm.value) {
        passConfirm.nextElementSibling.innerText = 'رمزهای وارد شده یکسان نیستند'
        passConfirm.parentElement.classList.add('has-error')
        return false
    }
    passConfirm.nextElementSibling.innerText = null
    passConfirm.parentElement.classList.remove('has-error')
    return true
}