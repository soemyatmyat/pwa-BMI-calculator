const hIn=document.getElementById('hIn')
const wIn=document.getElementById('wIn')
const bmi=document.getElementById('bmi');

//output.style.visibility = 'hidden';


hIn.addEventListener('input', (e) => {
  let hInVal=hIn.value/100
  let wInVal=wIn.value
  let hInSqr=hInVal*hInVal
  if (hInVal != "" && wInVal !="") {
    bmi.innerHTML=(wInVal/hInSqr).toFixed(2)
  }
  e.preventDefault();
});

wIn.addEventListener('input', (e) => {
    let hInVal=hIn.value/100
    let wInVal=wIn.value
    let hInSqr=hInVal*hInVal
    if (hInVal != "" && wInVal !="") {
      bmi.innerHTML=(wInVal/hInSqr).toFixed(2)
    }
    e.preventDefault();
});
  

// Feature detection - check if browser supports push messaging.
const check=() => {
    if (!('serviceWorker' in navigator)) {
        throw new Error('Service Worker is not supported on this browser.')
    } else {
        return ('serviceWorker' in navigator)
    }
}

// Register a Service Worker
const registerServiceWorker=async () => { 
    //register the serviceworker, supply where serviceworker file is located
    const swRegistration = await navigator.serviceWorker.register('/sw.js',{scope:'/pwa-BMI-calculator/'}).then(function(registration) {
        registration.addEventListener('updatefound',function(){
            console.log('[Service Worker] A new service worker is being installed')
        })
        console.log('[Service Worker] Registration succeeded', registration);
      }, /*catch*/ function(error) {
        console.log('[Service Worker] registration failed:', error);
    })
    return swRegistration
}

//1. load the service worker js and register it
const main = async () => { //async loading the service worker
    check()
    const swRegistration = await registerServiceWorker()
}

// consolidate the functions to trigger upon page load

window.addEventListener('load',()=>{
    main()
})
