function chatLink(){
    const url = 'https://wa.me/'
    const countryCode = document.getElementById("countrycode").value;
    const phoneNumber = document.getElementById("phonenumber").value;
    const chatURL = url + countryCode + phoneNumber
    console.log('function invoked');
    console.log(chatURL);
    return chatURL
}
document.getElementById("chatbutton").onclick = function () { const chatURL = chatLink();
    location.href = chatURL;
};