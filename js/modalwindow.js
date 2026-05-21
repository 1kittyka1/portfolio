const links = document.querySelectorAll(".myLink");
const modal = document.querySelector('.modalwindow');
const closeBtn = document.querySelector(".btnno");
links.forEach(link=>{
    link.addEventListener("click", async function(e){
    e.preventDefault();

    const url = this.href;

    try{
        const response = await fetch(url, {
            method: "HEAD"
        });

        if(response.ok){
            window.location.href = url;
        }else{
            modal.style.display = "flex";
        }

    }catch{
        // modal.style.display = "flex";
    }
});
})


closeBtn.addEventListener("click", function(){
    modal.style.display = "none";
});