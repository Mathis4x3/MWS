let bulles = document.getElementsByClassName("bulle");
for (let i = 0; i < bulles.length; i++) {
    setInterval(() => {
        let transform = bulles[i].style.transform;
        if(transform === "rotate(10deg)") {
            bulles[i].style.transform = "rotate(-10deg)";
        }else{
            bulles[i].style.transform = "rotate(10deg)";
        }
    }, 1000);
}