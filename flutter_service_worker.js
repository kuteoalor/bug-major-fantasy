'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "980bffe1404d71ba492b4f8108879849",
".git/config": "448e0afc884e5de59a900bdc146d8a28",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "eca115cf80117605bd1201e4bf391162",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d68aa0a736e3eaf0f0d18ae33183d5bd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a3ca1be407077786646e51b83040f532",
".git/logs/refs/heads/wtf": "a3ca1be407077786646e51b83040f532",
".git/logs/refs/remotes/origin/wtf": "f698c8a0983f11bc5c6c7a497a67dfaf",
".git/objects/05/e617cbd59796937bb8744e07d68d14ecb3d9ec": "ede29881b5f91274ebfabe31ce0f539a",
".git/objects/0f/204b5e96685ae49d9b69bea71743c12369efc0": "c661b8f9d3b3e0d82e46fc04e0110d14",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/12/2fbdbb08ab487415a5bdaf80d4704cd834f9f0": "f2ec03fb3b01a17210588a7c76ddc3a9",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/642ac9238298ff4f78184ffd16004df3d8aa55": "dab9f1ca0d1993f4d6486a68548b61e5",
".git/objects/1f/3f50e111e328101c28439c861587edfcfed5e3": "09712b5d87d1a89edac3194e27d23d99",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/715e2d385fc8ce47920b53f575ec997e17c0a3": "4d736b864721f03ff3a5f58793f7709a",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/d83960b3b2f8685915ead09ae5fbc0d0117c09": "7007c8c515abef97a1d6cacfaef5857c",
".git/objects/25/3ca8bd25a62ca72e8ea61268c51652c6288ffc": "bd90cb632f6ddda936f01b4e1163d865",
".git/objects/2d/bac640294a7ab9c02dc1ab4674a08c6d5b9967": "3ef4833a658bd612d278943318b1091c",
".git/objects/2d/e82a5e753c7ee51db209af58c6333f33400e4a": "f309d1f366e5d54d9133e55658ff72e7",
".git/objects/30/3f23cf67292757881ff021cf7cdace31fd2902": "ed1679e629d0658047f8de11d8bf7c65",
".git/objects/33/118dd333e860bb7192f3a6b405b44fea0ca05d": "f2666cb8027f903da33d277937cc34ed",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/46/3a126dbf32082b982dbec4a686782a4c48ec57": "92ffd32f92810186962579eb8f3f9683",
".git/objects/47/4282b5b78e56e225b5656653b3e40364f5e291": "b524286737721991e53cedea37029c07",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/56/c79922e4b522d06c9b224fc8f76bb3eaf97fdf": "eb59d3190a81dfbcd47aab2b6e64c4e8",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/3abf3b6d7c7b5c7235a77d8d0af3da464bc2f7": "70d243fabebceb5764094f15401ad55a",
".git/objects/58/7e2ecfca3560367dbc30cb02d93c259fbd281e": "6f7802f95a5df54090fee4c60926bfd3",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5b/c6e6b04fbf7f918a7945324d52ac4a845397b9": "1547597bd4097e53729d93ee625b9df6",
".git/objects/5d/d21381d57efc077f11e8c18511b3924fe19ee7": "a3b179a0fb01f433fe82eb6d7f6bb5a8",
".git/objects/5e/c50eaeba7a7010dccf4ef762fa9b51c7384c20": "373a1c37ba74d04e56007b34f66f8887",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/67/5178c6c39aaba55af26f82bb59a3a0d7fbd1cb": "5a900f39a5dd809f2f1799c3488aeeb6",
".git/objects/6b/637dfbc2bf861e82170df0a7f8b9e71285e335": "47613abc90678f80561c5b070ce7d99d",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/75/8c3fab0bb28091b240d04afb869a865c9f65f2": "f93ba2e007082a7377bb98f8f44ab074",
".git/objects/76/8c1299f82dc0ed078735c101908db47c8c0c78": "577c0661aadaddda7a66f629cc25b410",
".git/objects/7a/c1338f7013d3bbbc248d434e70754b1a13dadb": "4ad3adc7ab3976df379ea9c8f52be856",
".git/objects/7b/cbf9ccd00133d02b16fbe18e0cd14d394cad45": "b789ae6698bb7920fa7a37b6d8630c75",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7e/8bccd7b6905266111c4ad79a87216a83875a39": "9321ee1805046729634a7d408b974c0e",
".git/objects/80/69cc37495bb40b10e5b432eb3856e06893d938": "98586e167a45e8aeff68699be9021914",
".git/objects/87/577497737cdeb7590fab550bf1101325c8a094": "87a9d38dd62af13e37d3d2ffde9adf51",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/1d532e53c8022600d7c67a6915a487e5668950": "b1a74770fcc3d55901ea9ac263f48c8e",
".git/objects/9b/748aacd1b445fbf0e8f933c43a56728c79da09": "2d48f4ed8ef2285c1a530d7f5bc1c239",
".git/objects/9d/1b6d44016d17ec16a245746148d6fe723d2c25": "cc1f66d9d435498ca80650274ea83291",
".git/objects/b2/10e9ab92a68caa98f49e8f5e37c7b24e7319ef": "a8f8a84420e4625b27233d408e6613d4",
".git/objects/b2/d4ae9605b50cdae2edca795ad3a59ad071be3c": "911d004c1b6df4db611f38d25fbaf756",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/316bb4fa613f66ec945fe3b7c6dd1640a04e57": "e39e4dda4377e57e1a35f5c376547143",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/e6e96326454b39ce05c5ad838abcc520ec0d31": "145dd25202812cb31121d2272ac1c8c6",
".git/objects/c3/37613614d41cbfb27173993c0e5e5964638db2": "73a7da267aa7239fb757ea781097aba0",
".git/objects/c3/4557266c860d9cf0a9e3657f5dd0ddbbdb0ee2": "3ea88d495a224007d979a3d867693d8e",
".git/objects/c6/3c9aaec81d6d8a9cc3c2d2025f9a68d18efca0": "bb5c9cbe1dab2290ca6907321044cccc",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/417797557f72fdc6e63c017b8a09c86e62e494": "f7a6d8034c1582adbf52ec6bce78942b",
".git/objects/e2/ab26c4a64950f450440083a4706be2fa5c90c5": "82962727106a1b9e16c7f37b421920f3",
".git/objects/e5/af90ed331d58c3de803a67377da6ad4c8106a3": "0e6be8e226102308d6cd300483cb984f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/183f8520ff8bbb35f1776ed3580fe738fd6ccf": "0d5f9716d2db774b2735a42e533a5ccc",
".git/objects/f8/35bbf84e53b795765fd3bfd3e24f8efcaa438f": "a40b0e576f61c5d3150498ee55389cb0",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/objects/ff/e02942b9ade9281f50ecde09bf2c4494cff12a": "b2b8bca5286943606948131dc16f58d1",
".git/refs/heads/wtf": "79e91bf0ae8700c29144bc9396504f88",
".git/refs/remotes/origin/wtf": "79e91bf0ae8700c29144bc9396504f88",
"assets/AssetManifest.bin": "3865731c284c9cb62142cf899876f363",
"assets/AssetManifest.bin.json": "7ff3a146dd348b466b7da58bc2cad44a",
"assets/AssetManifest.json": "0099367c69f72748c7707c60e701d867",
"assets/assets/images/bug.png": "f60e00163264e9c81e99dfa440535683",
"assets/assets/images/google.png": "2be70f8a16eecc5ca5fca95be5d4dad9",
"assets/assets/images/image.png": "2d668ffe041458ccabc7706001938500",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "b368e2197c9d98a5d5ced0cd83c4bc5f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "cca37530151ae8cf346151a8701ac66a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5fa66da7253abdbcaa9fbd230f2a1f68",
"/": "5fa66da7253abdbcaa9fbd230f2a1f68",
"main.dart.js": "fd3846a6587f1b05ed7d178df3bc034f",
"manifest.json": "be6bf26ceff972641579dd6108327c94",
"version.json": "835c2e176bb08a860d1911180d5f5b0e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
