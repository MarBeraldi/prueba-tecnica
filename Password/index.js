const alphabet = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    specialChars: "!@#$%ˆ&*-_+=?",
    numbers: "0123456789"
}
function verifyCase(pass, alphabet) {
    var result = false;
    for (value in pass) {
        if (alphabet.includes(pass.charAt(value)))
            result = true;
        if (result)
            break;
    }
    return result;
}
function verifyLenght(pass,conditions) {
    conditions[0].innerHTML= 'Minimum 16 characters';
    conditions[0].style.color = pass.length >= 16 ? 'green' : 'red';
}
function verifyUpperCase(pass,conditions) {
    conditions[1].innerHTML= 'A capital (uppercase) letter';
    conditions[1].style.color = verifyCase(pass, alphabet.upperCase) ? 'green' : 'red';
}
function verifyLowerCase(pass,conditions) {
    conditions[2].innerHTML= 'A lowercase letter';
    conditions[2].style.color = verifyCase(pass, alphabet.lowerCase) ? 'green' : 'red';
}
function verifyNumber(pass,conditions) {
    conditions[3].innerHTML= 'A number';
    conditions[3].style.color = verifyCase(pass,alphabet.numbers)? 'green' :'red';

}
function verifyHasFourNumbers(pass,conditions) {
    var count = 0;
    for (value in pass) {
        if (!isNaN(pass[value])) {
            count++;
        }
    }
    conditions[4].innerHTML= 'Must have four numbers';
    if (count >= 4){
        conditions[4].style.color = 'green';
    }else{
        conditions[4].style.color = 'red';
    }
}
function verifyConsecutive(pass,conditions) {
    var result = false;
    for (let i = 0; i < pass.length - 1; i++) {
        if (pass[i] === pass[i + 1])
            result = true;
    }
    conditions[5].innerHTML= 'Must not have consecutive equal numbers';
    conditions[5].style.color = result ? 'red' : 'green';
}
function verifySpecialChars(pass,conditions) {
    let count = 0;

    for (let i = 0; i < pass.length; i++) {
        const currentChar = pass[i];
        const nextChar = pass[i + 1];

        if (alphabet.specialChars.includes(currentChar) && alphabet.specialChars.includes(nextChar)) {
        }

        if (alphabet.specialChars.includes(currentChar)) {
            count++;
        }
    }
    if (count >= 2) {
        conditions[6].innerHTML= 'Must contain at least two special characters';
        conditions[6].style.color = 'green';
    }else
    {
        conditions[6].innerHTML= 'Must contain at least two special characters';
        conditions[6].style.color ='red';
    }
}
function verifyNotZero(pass,conditions) {
    conditions[7].innerHTML= 'The number zero cannot be used';
    conditions[7].style.color = !pass.includes('0')  ? 'green' : 'red';
}
function verifyNotSpace(pass,conditions) {
    conditions[8].innerHTML= 'Cannot place spaces';
    conditions[8].style.color = !pass.includes(' ')  ? 'green' : 'red';
}

function verify(){
    const conditions = [
        document.getElementById('minimumCharacters'),
        document.getElementById('uppercaseLetter'),
        document.getElementById('lowercaseLetter'),
        document.getElementById('HasFourNumbers'),
        document.getElementById('noConsecutiveLetter'),
        document.getElementById('noConsecutiveNumbers'),
        document.getElementById('specialChars'),
        document.getElementById('notZero'),
        document.getElementById('notSpace'),
    ];
    let password = document.getElementById('pass').value;
    document.getElementById('div').style.display="block"
    document.getElementById('text').innerHTML='Password must contain the following:',
    verifyLenght(password,conditions);
    verifyLowerCase(password,conditions);
    verifyUpperCase(password,conditions);
    verifyNumber(password,conditions);
    verifyHasFourNumbers(password,conditions);
    verifyConsecutive(password,conditions);
    verifySpecialChars(password,conditions);
    verifyNotZero(password,conditions);
    verifyNotSpace(password,conditions);
}