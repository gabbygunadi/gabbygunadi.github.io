var CACHE_STATIC_NAME = 'static-v4';
var CACHE_DYNAMIC_NAME = 'dynamic-v2';
var cached_urls = [
  '/pmobweb',
  '/pmobweb/panel-left.html',
  '/pmobweb/index.html',
  '/pmobweb/headlines.html',
  '/pmobweb/offline.html',
  '/pmobweb/indonesia.html',
  '/pmobweb/business.html',
  '/pmobweb/entertainment.html',
  '/pmobweb/health.html',
  '/pmobweb/science.html',
  '/pmobweb/sports.html',
  '/pmobweb/technology.html',
  '/pmobweb/world.html',
  '/pmobweb/src/js/app.js',
  '/pmobweb/src/js/nativedroid2.js',
  '/pmobweb/src/js/ww.js',
  '/pmobweb/src/vendor/waves/waves.min.js',
  '/pmobweb/src/vendor/wow/wow.min.js',
  '/pmobweb/nd2settings.js',
  '/pmobweb/bower.json',
  '/pmobweb/src/vendor/waves/waves.min.css',
  '/pmobweb/src/vendor/wow/animate.css',
  '/pmobweb/src/css/nativedroid2.css',
  '/pmobweb/src/css/nativedroid2.color.blue-grey.css',
  '//ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css',
  'http://code.jquery.com/jquery-1.11.1.min.js',
  '//code.jquery.com/ui/1.11.4/jquery-ui.min.js',
  '//ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js',
  '//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css'
];

self.addEventListener('install', function(event) {
  console.log("install");
  try {
    console.log('typeof System in install', typeof System);
  } catch (e) {}

  console.log('caching');
  event.waitUntil(
    caches.open('dynamic-v2').then(function(cache) {
      console.log('caching - getting');
      return cache.addAll(cached_urls);
    }).catch(function(error) {
      console.log('error', error)
    })
    );
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  event.waitUntil(
    caches.keys()
    .then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
          console.log('[Service Worker] Removing old cache.', key);
          return caches.delete(key);
        }
      }));
    })
    );
  return self.clients.claim();
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request)
        .then(function(res) {
          return caches.open('dynamic-v2')
          .then(function(cache) {
            cache.put(event.request.url, res.clone());
            return res;
          })
        })
        .catch(function(err) {

          return caches.open(CACHE_STATIC_NAME)
          .then(function(cache) {
            return cache.match('/offline.html');
          });


        });
      }
    })
    );
});