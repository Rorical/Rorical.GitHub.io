var CACHE_NAME = 'shutdown-v1'
this.addEventListener("install", function(event) {
	this.skipWaiting();
	console.log("install service worker");
	caches.open(CACHE_NAME);

	let cacheResources = ["index.html","js/index.js","js/main.js","css/font.ttf","css/font-eng.ttf","css/style.css"];
	event.waitUntil(
		caches.open(CACHE_NAME).then(cache => {
			cache.addAll(cacheResources);
		})
	)
})
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(cacheRes) {
			if (cacheRes) {
				return cacheRes;
			}
			var request = event.request.clone();
			return fetch(request).then(function(httpRes) {
				if (!httpRes || httpRes.status !== 200) {
					return httpRes;
				}
				var responseClone = httpRes.clone();
				caches.open(CACHE_NAME).then(function(cache) {
					cache.put(event.request, responseClone);
				});
				return httpRes;
			});
		})
	);
})
