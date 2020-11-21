/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-cc6fced9'], function (workbox) { 'use strict';

	/**
	* Welcome to your Workbox-powered service worker!
	*
	* You'll need to register this file in your web app.
	* See https://goo.gl/nhQhGp
	*
	* The rest of the code is auto-generated. Please don't update this file
	* directly; instead, make changes to your Workbox build configuration
	* and re-run your build process.
	* See https://goo.gl/2aRDsh
	*/

	workbox.skipWaiting();
	workbox.clientsClaim();
	workbox.registerRoute("/.(?:html|htm|xml)$/", new workbox.StaleWhileRevalidate({
	  "cacheName": "markup",
	  plugins: [new workbox.ExpirationPlugin({
	    maxAgeSeconds: 31536000,
	    purgeOnQuotaError: true
	  })]
	}), 'GET');
	workbox.registerRoute("/.(?css|js)$/", new workbox.StaleWhileRevalidate({
	  "cacheName": "assets",
	  plugins: [new workbox.ExpirationPlugin({
	    maxEntries: 500,
	    maxAgeSeconds: 31536000,
	    purgeOnQuotaError: true
	  })]
	}), 'GET');
	workbox.registerRoute("/.(?png|jpg|jpeg|gif|bmp|webp|svg|ico)$/", new workbox.CacheFirst({
	  "cacheName": "images",
	  plugins: [new workbox.ExpirationPlugin({
	    maxEntries: 500,
	    maxAgeSeconds: 31536000,
	    purgeOnQuotaError: true
	  })]
	}), 'GET');

});
