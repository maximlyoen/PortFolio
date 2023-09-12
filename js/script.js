var typed = new Typed(".typing",{
    strings:["Maxim Lyoen","Développeur"],
    typeSpeed:80,
    BackSpeed:20,
    loop:true
})
document.getElementById("language").innerHTML = 'Français';
document.getElementById("language").onclick = function(){
    button = document.getElementById("language");
    if(button.textContent == "English"){
        button.textContent = 'Français';
    }else{
        button.textContent = 'English';
    }
}

/*def changeLanguage():
    if document.getElementById("language").innerHTML == "English":
        
    else:
   */     