"use strict";var precacheConfig=[["/blog-live/index.html","1a1f1014e8449fc513f1b9ec4bb28e6d"],["/blog-live/static/css/main.0638a768.css","cd340624772e55f5319da4c680ceb7a7"],["/blog-live/static/js/main.09c9aa02.js","e020abb10bfaeecd2b12ac566b06d84d"],["/blog-live/static/media/aeromobil.0e8f28cd.jpg","0e8f28cd497abbe395dc85f218ffb6b9"],["/blog-live/static/media/avatar.fb1d4b87.jpg","fb1d4b8745519d40a58438473aee4b32"],["/blog-live/static/media/avatars.a1f57b68.jpg","a1f57b681159684d97c00b007b95090a"],["/blog-live/static/media/biotech.70c92b48.jpg","70c92b483b38eaa2a3723f2c276a3fa3"],["/blog-live/static/media/circuitboard.4ede5981.jpg","4ede5981e835682010930c8ee2205b92"],["/blog-live/static/media/clamp.40004a7c.jpg","40004a7c41a7dba6b75eeb30eeb926f9"],["/blog-live/static/media/driverless-car.7de39fb3.jpg","7de39fb3fbeb659c2c3f033ff4819023"],["/blog-live/static/media/dutch-ballooning-fire.1e26081d.jpg","1e26081d388f12dce9093b8a93d6d315"],["/blog-live/static/media/electric-bus.3cbc028d.jpg","3cbc028db916e232ccaabca656111ab8"],["/blog-live/static/media/innovation.a074ed1c.jpg","a074ed1c841860223f0e183d6f307675"],["/blog-live/static/media/innovations.8a85ef5a.jpg","8a85ef5aa4476996b26e79cd6a29147b"],["/blog-live/static/media/laser.70ff1abe.jpg","70ff1abebe56e03a769febb33f7b01df"],["/blog-live/static/media/meeting.e1192923.jpg","e11929238b7ce4a56eeac492b3fcd512"],["/blog-live/static/media/mind-the-gap.2725ab3c.jpg","2725ab3c00cafa3e8571111ce8709155"],["/blog-live/static/media/modern-building.1190ae40.jpg","1190ae403144b1fd1df43018b943a290"],["/blog-live/static/media/nano.93a660dc.jpg","93a660dc6ee3cd3801f5c2aed600acd8"],["/blog-live/static/media/nanotechnology.e094d86a.jpg","e094d86a7a790dede6772fb491dffe52"],["/blog-live/static/media/neural.d6765260.jpg","d676526061de04b730860a78c5f7ce3e"],["/blog-live/static/media/open-hard-disk-drive.6deb8b41.jpg","6deb8b416ded43f7eee54a9af19cb519"],["/blog-live/static/media/photon.92ccd806.jpg","92ccd80638d615a2c80c6d9966f5e8c7"],["/blog-live/static/media/project-debater.e2971efb.jpg","e2971efb466e1f0e9712d80cca384e06"],["/blog-live/static/media/robot-doctor.8eeebdb3.jpg","8eeebdb3000e24b413ba1906b6c4db21"],["/blog-live/static/media/silence.d12d68dd.jpg","d12d68dde98ed536c5204cfb1e68d23a"],["/blog-live/static/media/skyscrapers.6c0551b6.jpg","6c0551b6018eb7bdee8ffee3b2a1580a"],["/blog-live/static/media/smart-city.ed66aa34.jpg","ed66aa342dd015e26f80ded82c74330d"],["/blog-live/static/media/soldiers.e554faf1.jpg","e554faf12eae69bb8260c070c664a1ae"],["/blog-live/static/media/superbacterias.97c59c74.jpg","97c59c74ff51059c5db221d4424e5d89"],["/blog-live/static/media/tunnel.2527d3e4.jpg","2527d3e4f0c37bd54c06ca543f0e52a9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var i="/blog-live/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});