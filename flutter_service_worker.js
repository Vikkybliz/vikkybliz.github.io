'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0caef07ce0f6275ca9a70f4db9415894",
"assets/AssetManifest.json": "f655e4eaa25c0e3fddf7b9b099647adf",
"assets/assets/icons/bank.svg": "4bb72551d2be6f16b5ef863980f6bcc5",
"assets/assets/icons/bicycle.svg": "7cf28bc3c532d2008cd7e0cf6863c981",
"assets/assets/icons/bigpackage.svg": "00530424993e05cf9677c7ab232cd7d1",
"assets/assets/icons/bolt.svg": "2dcc0134d97d689b7eb6d099f1d68392",
"assets/assets/icons/calendar.svg": "6d65eff45b126d199a4a9bff2c5176c4",
"assets/assets/icons/call.svg": "4c3a931f3aa8762637fbf2e4dafa75e1",
"assets/assets/icons/car-off.svg": "f1272c9f4256ec079ed4e800d7c250f6",
"assets/assets/icons/car.svg": "2aa01fead65642519b567a2b7c5f96bd",
"assets/assets/icons/chart.svg": "ac02343b82280637eae20d6374d4118a",
"assets/assets/icons/clock.svg": "55b1205abe91319a229257e6d58d5f43",
"assets/assets/icons/dashboard.svg": "1bfb8d10b5de3bb5e69e34d03472f720",
"assets/assets/icons/delivery_svg.svg": "b07bc3b51f786a499f27b333a4971493",
"assets/assets/icons/email.svg": "29b3b58516625070300417f01fd18d99",
"assets/assets/icons/file.svg": "4559632fb8e7acb95197ca14de189f21",
"assets/assets/icons/home.svg": "b5d35ba9df31cb681a9ed0541ad02523",
"assets/assets/icons/id.svg": "ab4960f0ddc04fc08d19eb3622b8f567",
"assets/assets/icons/legal.svg": "4d086a5c27a2142c139fc51ae4182a52",
"assets/assets/icons/link.svg": "8edc6d4145534364073da5804478b75d",
"assets/assets/icons/lock.svg": "03527804110716802285c6ff55d52275",
"assets/assets/icons/logout.svg": "b1015cfaf4cf6c21be87782224ce3a59",
"assets/assets/icons/mail.svg": "540b65ae6bb4f51402a2602e69fb4e10",
"assets/assets/icons/message.svg": "4741cd91f7462860ce5710e4e001011d",
"assets/assets/icons/message_question.svg": "9dd5ad8a9ce3e8de1739a0082d2734ec",
"assets/assets/icons/motorcycle.svg": "dda58c1d103f727d1513bb2dadf77c01",
"assets/assets/icons/notes.svg": "a00846b8a264bc41969d6e9b35db53ee",
"assets/assets/icons/notification.svg": "fd0a7d8e51bc146ca10a8c1ec47f5bd6",
"assets/assets/icons/package.svg": "3d9e50d5fe6e490800c42226c5f0e86c",
"assets/assets/icons/paypass.svg": "0ccc637eedffc273e1eabe49099d2e72",
"assets/assets/icons/rate.svg": "090e264093274f07cae0c2ce03abc55b",
"assets/assets/icons/route.svg": "5e26194d62e163c64592cb1e814f2cbe",
"assets/assets/icons/scan.svg": "7a538881ae5b0ed9d2a39076e3ff1e28",
"assets/assets/icons/scooter.svg": "ff74a8e25159e38be3abfd0294f3f01c",
"assets/assets/icons/send.svg": "59ba3d6241735df964a32fec02077113",
"assets/assets/icons/settings.svg": "5c3f4f868fa09ecd4a8710a9e5b41c84",
"assets/assets/icons/share-2.svg": "7f28e6f8c406bbfd3c64b8d470e481c3",
"assets/assets/icons/smile.svg": "2d8ab8772337a851320358bd7c45832a",
"assets/assets/icons/support.svg": "2bd42c6c9b98609c0e97fb8d8ecc5e54",
"assets/assets/icons/ticket.svg": "e4402b2ab245db6e4a568e8adf016318",
"assets/assets/icons/tip.svg": "ab98b195ae3a7d6cbad46e59e0da4382",
"assets/assets/icons/truck-delivery.svg": "2eefcda11c942f1bf61ebc91b23563c8",
"assets/assets/icons/truck.svg": "2ada1f741d060de7e6273bb5c9fd72d1",
"assets/assets/icons/user-circle.svg": "a3053e0def0347f859c61c0958468d1e",
"assets/assets/icons/user-plus.svg": "06323f2461e23a747f9313f26996c9f7",
"assets/assets/icons/users.svg": "eb493d364a8acf14057abbf7a483275e",
"assets/assets/icons/verified.svg": "745f45566f5ad62351e5f461d13353d8",
"assets/assets/icons/visa.svg": "12726622c92a1050984c6a69387a5431",
"assets/assets/icons/wallet.svg": "f5962f897f3e7ccbea8c14f1ab89f65e",
"assets/assets/icons/wheel.svg": "c994afcb5800aebc7c54763982d301c7",
"assets/assets/images/add_image.png": "2f2cca61a8d8120f274026f52c616ad9",
"assets/assets/images/car.png": "fcd50c3241b5c0cff315b58133e71c24",
"assets/assets/images/google_icon.png": "93c7f8285b68cab17529e0ce2d268b20",
"assets/assets/images/homepageview.png": "0b18923f493d2fb73bd0966daaf8d8ca",
"assets/assets/images/logo_blue-bg.png": "65dc691e3095074f976f440383ab1c4f",
"assets/assets/images/logo_transparent.png": "e52ef3ed7944621e3daad2fe995f61c9",
"assets/assets/images/logo_white-bg.png": "8fdaf9cbb25f40c29064eeddeb9cf4b9",
"assets/assets/images/map.png": "73a5557dfa2749ec4ae1f6974120c6a3",
"assets/assets/images/mapp.png": "1bc629bb844fcdbad2f847c3cc03bb63",
"assets/assets/images/map_icon.png": "b0712efc776365441b03f710df8cafd0",
"assets/assets/images/map_indicator.png": "cd0d9898ee5e10edc231ca8d23f0d4c7",
"assets/assets/images/onboard1.png": "deb257a656e664a831d48dea37b9b412",
"assets/assets/images/onboard2.png": "2cc54f60cdbf632013655e0f5be5c55a",
"assets/assets/images/onboard3.png": "31a0b49d967f53854452236d7038c9a4",
"assets/assets/images/order_success.png": "ac9d1a23def7afde663cbdee8987e053",
"assets/assets/images/profile.png": "3cab9e843d2cedf5d2cdd343e89528f2",
"assets/assets/images/receive.png": "555b5c4918b0524f454238e1ef1f0ed5",
"assets/assets/images/send.png": "f7d91468440f84f672e0bce5daf487e6",
"assets/assets/images/Shield.png": "9bed94423983db0bf4726b39f0e60279",
"assets/assets/images/smart.png": "fa1489bfc870bfe285b2f79687b8a195",
"assets/assets/images/up.png": "2dcb0eb914af9042b698332bff95302f",
"assets/assets/images/wheel.png": "82313f7fa52f3cf8c2a47798032d107a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b42e94fc631df542b402977ede6e6ab4",
"assets/NOTICES": "3268dc7b57be3992b86181103f6efe3c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d74d05575433ed47aaa51c9dafe608c9",
"/": "d74d05575433ed47aaa51c9dafe608c9",
"main.dart.js": "57f7fb96322c5173cc184f98931add03",
"manifest.json": "b2de238c0140de13494cece25dc720c7",
"version.json": "03c33c1e5137bbf9b394cb85b59261b5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
