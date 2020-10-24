if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service.js').then(function() { 
        console.log("Service Worker Registered")
    });
}
document.querySelector("#showClick").addEventListener("click",showPost)
countdown()
