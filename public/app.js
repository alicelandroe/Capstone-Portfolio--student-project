const user = document.querySelector(".message-user__searchbox");
const message = document.querySelector(".message-user__textbox");
const send = document.querySelector(".send-button");


send.addEventListener('click', (e) => {
    if (user.value === "" && message.value === "") {
         alert("Skriv in din email och ett meddelande till mig! :)");
     } 
    else if (user.value === "" && message.value !== "") {
        alert("Snälla skriv in din email adress! :)");
    } 
    else if (user.value !== "" && message.value === "") {
        alert("Skriv ett meddelande till mig! :)");
    } 
    else {
        alert(`Jag har fått ditt meddelande, tack! :)`);
    }
});
