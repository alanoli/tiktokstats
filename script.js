document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".tiktokbtn").item(0).addEventListener("click", () => openLink("https://www.tiktok.com/@thetiktokstats"));
    document.querySelectorAll(".facebookbtn").item(0).addEventListener("click", () => openLink("https://www.facebook.com/thetiktokstats"));
    document.querySelectorAll(".instagrambtn").item(0).addEventListener("click", () => openLink("https://www.instagram.com/thetiktokstats/"));
    document.querySelectorAll(".instagrambtn").item(1).addEventListener("click", () => openLink("https://www.instagram.com/thetiktokstats/"));
    document.querySelectorAll(".openwpp").item(0).addEventListener("click", openWpp);
});

function openLink(url) {
    console.log("url");
    window.open(url, "_blank");
}

function openWpp() {
    let input = document.querySelectorAll("#freeinput").item(0);
    if (input.value === "") {
        return;
    }
    let message = "Gostaria do report gratuito para este @: " + input.value;
    window.open("https://api.whatsapp.com/send?phone=+5531996219428&text=Oi!%0D%0A" + message, "_blank");
}