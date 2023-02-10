let navigation = document.querySelector(".navigation");
let close = document.querySelector(".close");
navigation.onclick = () =>{
    navigation.classList.add("active")
}
    close.onclick = () =>{
    navigation.classList.remove("active")
}
