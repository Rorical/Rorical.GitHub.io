var isWeixin = function () {
    var ua = navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) == "micromessenger";
};

function download(){
    var all = document.querySelectorAll(".annoucement.willhide")
    for(var i = 0; i < all.length; i++){
        all[i].classList.add("hide")
    }
    setTimeout(()=>{
        if(isWeixin()){
            document.getElementsByClassName("forwechat").item(0).style = "display:block;"
        }else{
        
            all = document.querySelectorAll(".annoucement.willshow")
            for(var i = 0; i < all.length; i++){
                all[i].classList.remove("hide")
            }
            
            var href = "https://cdn.jsdelivr.net/gh/rorical/lanternapp/lantern.apk"

            var eleLink = document.createElement('a');
            eleLink.setAttribute("href", href);
            eleLink.setAttribute("download","");
            eleLink.style.display = 'none';
            document.body.appendChild(eleLink);
            eleLink.click();
            document.body.removeChild(eleLink);
        }
    },800)
    
    
}