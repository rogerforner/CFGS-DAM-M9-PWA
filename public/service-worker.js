var version = 'v1::'

var offlineFundamentals = [
    '',
    '/',
    '/css/all-landing.css',
    '/js/app-landing.js'
]

var offLinePage = '<html><head><title>Oops, we are offline!</title></head><body>Oops, we are offline!</body></html>'

self.addEventListener('install',function(event) {
    console.log('Installing')
    //OFFLINE -> instal·lar tot el disponible amb la app online
    event.waitUntil(
        caches.open(version + 'fundamentals').then(function(cache){
            return cache.addAll(offlineFundamentals)
        }).catch(function(err){
            console.log(err)
        })
    )
})

self.addEventListener('activate',function(event) {
    console.log('Activated service worker')
})

self.addEventListener('fetch',function(event) {
    console.log('Fetch service worker')
    console.log(event.request.url)
    const url = new URL(event.request.url)
    if(event.request.url === 'http://localhost:8081/img/arrow1.png'){
        console.log('Prova!!')
        return
    }
})