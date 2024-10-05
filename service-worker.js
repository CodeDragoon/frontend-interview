
const urlsToCache = [
    '*.js',
    '*.css',
    '*.png',
    '*.html'
]

const cacheVersion = 'v5'
// new

const cacheName = `cache-sw-${cacheVersion}`

self.addEventListener('install', (event) => {
    console.log('service worker was installed', event)

    const addResource = async () => {
        const cache = await caches.open(cacheName);
        await cache.addAll(urlsToCache)
    }

    event.waitUntil(addResource())
})


self.addEventListener('activate', (event) => {
    console.log('service worker was activate', event)

})


