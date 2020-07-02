'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "6b848d47eeb04d776f3c88144699f750",
"/": "6b848d47eeb04d776f3c88144699f750",
"main.dart.js": "22dea4b467f712d56217f10eb9d74771",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
".git/config": "d6e811dfd1db52995ca243e0f35b8872",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/68/1881d53ea93142079d07c1bae1585bbd07bd05": "41f530a209af9b153674d4810b13cba4",
".git/objects/68/23bf5d98e7094838065030189016be15eaeb4c": "65414263c97aa5aaf1138c1c63db83ac",
".git/objects/9e/672f8c616ab7f4757404e67037a33fe2b1d2d4": "65c4be65613291ba33e8704bbeeb5032",
".git/objects/04/2acf76b0213933417038a5e884b68dd66b57af": "ec37361bf775f145507152d325ab92e1",
".git/objects/6a/00dcae932dadf0b7fdb691195e3d9ba86f217b": "b7084cc4cbfac98fb9054dbee1c9c5c2",
".git/objects/56/f9d14d8832d3b6c47fc884db32fe97d7305887": "4e138e3ffb9d6f004b45f1b06a1f15c2",
".git/objects/93/9f360195b8f3a15d4d0fd87b3757d55cbb3cd3": "4f69d532468fe133a5a0465a698be5e8",
".git/objects/33/177f939e9223a275abcee4b706485e23a89db7": "d7a02dd11e5269575839c56f33a2f1b2",
".git/objects/d0/a89ff8ba1f31798716689bcd45782f355bcf80": "2bf862c4291fb632550b5b6bb5c0af0e",
".git/objects/be/f84be6e6a4f91ed3a78a589ffa2f54e675a7d9": "608b103d8cf06950c47af63ae3aad4d1",
".git/objects/b4/aac4989bb5d1666cd05f82e8d47773066043ca": "47fcbaa3814a6c814c5a4e3c544eab8c",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/f3/ab1895971ade5a06293a8e5dc150596ab2b05c": "7beca15b752aedb6037a8636dc05607d",
".git/objects/eb/76313e82b9e5d8e81baf50e919ed867d9d3f1d": "4109840b8648777d761bc05b92ab4f2a",
".git/objects/c9/d395f393def4cfc084359bd4efa76606c40959": "ee8aa5b322373836fa9e1ae765c8fa7b",
".git/objects/e3/535b46841db2503e9d9cc2cec68e5cf4cf1a84": "9b6fe25153fcf246ce697091bbf667e2",
".git/objects/cf/755ed723bc1e0f1aaa177004307bfc79a7a549": "4ddccec8eaeed140d3e2d11ca0bd82e5",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/65e0026f5f708e3c886963e12a59bd1948760e": "67f85fa6cd71bfca43e3727c8d265f4f",
".git/objects/73/90d1acf1e6751c9cf87e1b3a12ae0fe4937b82": "0a3add9c98cae819054dd169dd1b10b2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/16ae70e7564b04f7d4906f8c7bc3af8ad6de3d": "e1c1da6e930b9796a00c528a219f9bc8",
".git/objects/21/1722d7433baf2481243a23838cb664bee1e50d": "cb3db77d1dfd1fd227292bf34a111c28",
".git/objects/44/44967ab6286dc28627b5e3971d5477e58e898f": "592508e1f7e3bdbc5d04ae79f205cde3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/91/ad699450d56b711a3f2e4a31469296b8b34fcf": "382f0d7a3d8a98481e758ab3ddd2ae4f",
".git/objects/5b/334dbea4c076847ae0256732481826c7e82d7d": "28d9b506273f0a642f977d4a5090aae8",
".git/objects/06/b17bc6219e0ab6112e81d3309a2e64ee5cff6a": "16bf8b304780f5281cedc293f48f1b0f",
".git/objects/39/e38a445062d4af1d5d66f78e8fb34feaef8efb": "a88ff47811b472f70c5a142f0f5ed749",
".git/objects/99/99ee2ca9f2c74eed68f5930d51a74440c00b2c": "053a6669ec1dfe5c0a923ceec75c8d15",
".git/objects/0f/fdce26a73686b6e6bf625f29afe782a7b7740a": "9dbe2bfdfdedf9516b0f94c843ab74cf",
".git/objects/b1/569dc5c1df3073a14860769e425a8186a29094": "af3384813400770eed91add1654bdcff",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/d2/9d248cf364fba106eb9d54294e053e1f42fdfa": "68233d0c3c616ac3dcfe067da4267b03",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a1/455f40da96a2a6fde44bc20c045b2a5ff4dba9": "52dd5241a1a9289e87b7fe0295df199b",
".git/objects/f9/c2945462b7adeef7882a2d0a4d570c6b0e36b3": "84d638c8b02398365a05a669585baf83",
".git/objects/f9/3cd37698964bd2ec9547b5417c4541707775ae": "2243e871a4f0997deaf312bd4f353ecb",
".git/objects/f7/47014284088fcb0d1089092a7a8068d0479bad": "a72ca724095ec06bfda3344d423a7927",
".git/objects/fa/f456843a2ada549d8de99267e7ff4bb1d3032d": "89d9d3ecbf1b46daeb45f9f4fdc7ad78",
".git/objects/48/c221cf1202519b5c9c9005ddd9f012d6cb1060": "053e67cedb372e207c7b0003c48f6718",
".git/objects/1e/b8478c952b83576572691c22fe4f4b1d576873": "e938270000c58b1c4156c568ed277e21",
".git/objects/8d/1539461806542cd36ce2d5232b08cf91543ebd": "10b0af2c810007d2fde97a85a16066db",
".git/objects/12/1cfcc5f45ac8e6db0c5b8d453d9bfcdca2c08d": "4be77ccc22e2d73d8d0e5fcbdb5b2ab1",
".git/objects/71/5e8f55e9ba20bd1d6b1694951e4579ee97dc70": "f63f95f290c211adc26b98f488ec1f95",
".git/objects/49/537b8b7cf738ca92a0a5add3391535d7d59fea": "1f15bf64f7650bd44c9c4ccea959e8d3",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/8b/bf4d2c3db80725399d4a21da6764c82f2117d0": "c6c2962ca17ddbe03f8bdf3eb602f1fc",
".git/objects/7f/0a9e48728f20ca825e699ae2824c837ec65a1d": "934fc5ce42505f80c86bb75e3c79f5f5",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "b1743ad4bb9f5e95cdb4d35ddba02197",
".git/logs/refs/heads/master": "b1743ad4bb9f5e95cdb4d35ddba02197",
".git/logs/refs/remotes/origin/master": "2a46c2795221152a3be6ba66d8e1c285",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "2dd8977de548658621fc72af35cac344",
".git/refs/remotes/origin/master": "2dd8977de548658621fc72af35cac344",
".git/index": "af0d3f488c235408a2440f50253841bd",
".git/COMMIT_EDITMSG": "971636edd7c1b3028ee137db33b67e3e",
"assets/AssetManifest.json": "ccc0871b76edf8038ffefddf5414a5ce",
"assets/NOTICES": "9c913f41702dd9cecdd3926ad511d393",
"assets/FontManifest.json": "592290621294619b16740a9d89232ba6",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/shape1.jpg": "52b01d2ca4f6d737548f2d45e049e6b2",
"assets/assets/space.jpg": "f6b5128727af07fe7c627370e99d0ab2",
"assets/assets/about.html": "cca535e84bb3f1ad20cd1423638d0253",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/erik.jpeg": "dc50173eebd54d31cb44e6a608b8fcfc",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/works/astter.png": "999f7e82d2e546160c6a065efe3e79ef",
"assets/assets/works/MZ.png": "18c1ae8ae7efd954b982eae9c0cfa387",
"assets/assets/works/va.png": "a28ea181257b52d1226623c543f2e1d5",
"assets/assets/works/doorio.png": "4167fb8e8f3930b0534c648329b25d0a",
"assets/assets/FontManifest.json": "59c37979205b4b43589051e92e27cbcd",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
