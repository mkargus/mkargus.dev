if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
    console.log("[PWA] active service worker found, no need to register");
  } else {
    // Register the service worker
    navigator.serviceWorker
      .register("sw_builder.js", {
        scope: "./"
      })
      .then(function (reg) {
        console.log("[PWA] Service worker has been registered for scope: " + reg.scope);
      });
  }
}
