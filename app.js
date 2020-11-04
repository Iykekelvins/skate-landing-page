const switchBtns = document.querySelectorAll(".switch-btn");
const orderBtn = document.querySelector(".order-btn");
const links = document.querySelectorAll("a");
const toggleBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-times");
const navList = document.querySelector(".nav-list");

switchBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
        if(btn.classList.contains("pink")){
            document.body.style.backgroundColor = "#f777ce";
            document.body.style.color = "#fff";
            links.style.color = "#fff";
            orderBtn.style.color = "#fff";
            orderBtn.style.background = "transparent";
        } 
        
        else if(btn.classList.contains("yellow")){
            document.body.style.backgroundColor = "#fcf15f";
            document.body.style.color = "#fff";
            links.style.color = "#fff";
            orderBtn.style.color = "#fff";
        }
        
        else if(btn.classList.contains("white")){
            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "#B3D4E0";
            orderBtn.style.color = "#B3D4E0"
            orderBtn.style.backgroundColor = "transparent";
        }

        else{
            document.body.style.backgroundColor = "#0392BF";
            document.body.style.color = "#B3D4E0";
            orderBtn.style.color = "#fff";
            orderBtn.style.backgroundColor = "#ED48BA"
        }
    })
})

toggleBtn.addEventListener("click", function(){
    navList.classList.add("show-list");
    toggleBtn.classList.add("hide-bars");
    closeBtn.classList.add("show-times");
})

closeBtn.addEventListener("click", function(){
    navList.classList.remove("show-list");
    toggleBtn.classList.remove("hide-bars");
    closeBtn.classList.remove("show-times");
})