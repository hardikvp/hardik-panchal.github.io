// Image loader for GitHub Pages compatibility
(function() {
  function loadImage(src, retryCount = 0) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => {
        if (retryCount < 3) {
          // Try alternative paths
          const paths = [
            src,
            '/' + src,
            './' + src,
            '../' + src
          ];
          const nextPath = paths[retryCount + 1] || src;
          console.log('Retrying image load:', nextPath);
          loadImage(nextPath, retryCount + 1).then(resolve).catch(reject);
        } else {
          reject(new Error('Failed to load image after 3 retries'));
        }
      };
      img.src = src;
    });
  }

  // Make it globally available
  window.loadImageReliably = loadImage;
})();
