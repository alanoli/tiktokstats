const sendMessage = () => {
    let message = "Gostaria do report, meu @ é: ";
    window.open("https://api.whatsapp.com/send?phone=+5531996219428&text=Oi!%0D%0A" + message, "_blank");
}

export default sendMessage;