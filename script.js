function dark(){
    const attrBody =document.querySelector("body");
    attrBody.setAttribute("class","atrbdy")

    document.querySelector(".round").style.color = "black";
    var a =document.querySelectorAll(".name-service")
    for(let i=0;i<a.length;i++){
        a[i].style.color="black"
    }
    document.querySelector(".bi-brightness-high").style.display="block"
    document.querySelector(".bi-moon-fill").style.display="none"
    document.querySelector(".circle").style.boxShadow="0px 0px 15px white"
    document.querySelector(".languages").style.boxShadow="0px 0px 8px white"
    document.querySelector(".education").style.boxShadow="0px 0px 8px white"
    document.querySelector(".intro-proj").style.boxShadow="0px 0px 8px white"
    document.querySelector(".blur-div").style.boxShadow="0px 0px 20px white"
    document.querySelector(".boxer").style.backgroundColor="white"


}

function light(){
    const attrBody =document.querySelector("body");
    attrBody.removeAttribute("class","atrbdy")
    document.querySelector("body").style.backgroundColor="white"
    document.querySelector("body").style.color = "black";
    document.querySelector(".bi-brightness-high").style.display="none"
    document.querySelector(".bi-moon-fill").style.display="block"
    document.querySelector(".blur-div").style.boxShadow="0px 0px 10px black"
    document.querySelector(".circle").style.boxShadow="0px 0px 15px black"

}

function hamburger(){
    document.querySelector(".boxer").style.display="block"
    document.querySelector(".boxer").style.width="40%"
    document.querySelector(".boxer").style.position="absolute"
    document.querySelector(".boxer").style.top="90px"
    document.querySelector(".boxer").style.right="10px"
    document.querySelector(".boxer").style.textAlign="center";
    document.querySelector(".bi-x-lg").style.display="block"
    document.querySelector(".bi-x-lg").style.fontSize="30px"
    document.querySelector(".bi-x-lg").style.marginLeft="70px"
    document.querySelector(".bi-list").style.display="none"

}
function hamburgerHide(){
    document.querySelector(".bi-x-lg").style.display="none"
    document.querySelector(".bi-list").style.display="block"
    document.querySelector(".bi-list").style.fontSize="30px"
    document.querySelector(".boxer").style.display="none"
    hambBOX.setAttribute("class","boxer-style-remove")
    // document.querySelector(".bi-moon-fill").style.margin="0px 50px"

}


const text = document.querySelector(".text-round");
text.innerHTML = text.textContent.split('').map(
    (char,i)=>
        `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
).join('');

function submitalert(){
    alert("submitted succesfully !")
}