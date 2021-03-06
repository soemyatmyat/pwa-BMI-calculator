const cacheName='BMI-calculator'
// let's cache the HTML, CSS, JS and any static files that make up the application shell
// un-comment next line for localhost
/*
const appShellFiles=[
    '../index.html',
    './', //alias for index.html
    '../css/style.css',
    '../js/app.js',
    '../img/icons/favicon.ico',
    '../img/icons/android-chrome-192x192.png',
    '../img/icons/android-chrome-512x512.png'
]
*/
const ghpath='/pwa-BMI-calculator';
const appShellFiles=[
    `${ghpath}/index.html`,
    `${ghpath}/`, //alias for index.html
    `${ghpath}/css/style.css`,
    `${ghpath}/js/app.js`,
    `${ghpath}/img/icons/favicon.ico`,
    `${ghpath}/img/icons/android-chrome-192x192.png`,
    `${ghpath}/img/icons/android-chrome-512x512.png`
]

//1. Install the service worker 
self.addEventListener('install',(e)=> {
    console.log('[Service Worker] Installation Complete')
    e.waitUntil((async ()=>{
        const cache=await caches.open(cacheName)
        console.log('[Service Worker] Caching...')
        await cache.addAll(appShellFiles)
        console.log('[Service Worker] Cache Complete')
    })())
})

//2. Activate the service worker
self.addEventListener('activate',(e)=>{
    console.log('[Service Worker] Activated')
})


//3. trigger based - fetch event fires every time any resources controlled by a sw is fetched
self.addEventListener('fetch',(e)=>{
    console.log('[Service Worker] Fetching Info...')
})
