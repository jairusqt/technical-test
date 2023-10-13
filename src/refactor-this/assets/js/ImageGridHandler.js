function ImageGridHandler() {}

ImageGridHandler.getImageData = (category, min, max) => {
  let imageContainer = document.getElementById('imageContainer');
  ImageGridHandler.createLoader();
  let isPromiseFulfilled = false;
  let counter = 0;
  ImageGridHandler.displayLoader(isPromiseFulfilled);
    for (let i = min; i < max; i++) {
      ImageDataGetter.getImagesByCategory(category, i)
        .then((result) => {
            let imageContainer = document.getElementById('imageContainer');
            for(const image of result){
              counter ++;
              imageContainer.innerHTML += `
              <div class="col col-md-4 position-relative" style="height: 400px; padding: 10px;">
                <img class="image shadow" src="${image.url}" alt="${image.name}" style="height: 100%; object-fit: cover; width: 100%;" />
                <div class="position-absolute top-50 start-50 translate-middle middle">
                  <button id="btnDownload" class="btn btn-outline-dark shadow" data-url="${image.url}" data-name="${image.name}">
                    <span class="material-symbols-outlined">
                      download
                    </span>
                  </button>
                  <button id="btnImageView" class="btn btn-outline-dark" data-bs-toggle="modal" data-url="${image.url}" data-name="${image.name}" data-bs-target="#imageViewerModal">
                    <span class="material-symbols-outlined">
                      open_in_full
                    </span>
                  </button>
                </div>
              </div>`;
              if(counter > 1){
                isPromiseFulfilled = true;
                ImageGridHandler.displayLoader(isPromiseFulfilled);
              }
            }
            if(result.length < 3){
              PaginationHandler.disableNextButton();
            }
        })
    }
    
}

ImageGridHandler.createLoader = () => {
  let imageContainer = document.getElementById('imageContainer');
  imageContainer.innerHTML += `
                    <div id="loader" class="d-flex justify-content-center" style="height: 100vh">
                      <div class="spinner-grow p-3" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      <div class="spinner-grow p-3" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      <div class="spinner-grow p-3" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </div>
  `;
}

ImageGridHandler.displayLoader = (promise) => {
  let loader = document.getElementById('loader');
  promise === true ? loader.classList.add('d-none') : loader.classList.remove('d-none');
  if(promise){
    ImageGridHandler.createDownloadButton();
    ImageGridHandler.createImageViewerButton();
  }
}

ImageGridHandler.createDownloadButton = () => {
  let button = document.querySelectorAll('#btnDownload');
  for(let b of button){
    b.addEventListener('click', function (e){
      e.preventDefault();
      let name = b.getAttribute('data-name');
      let url = b.getAttribute('data-url');
      
      fetch(url)
      .then(response => response.blob())
      .then(blob => {
        let a = document.createElement('a');
        let blobUrl = URL.createObjectURL(blob);
        a.href = blobUrl;
        a.download = name;
        a.click();
        URL.revokeObjectURL(blobUrl);
      })
      .catch(error => {
        console.error('Error fetching the image:', error);
      });

    });
  }
  ImageGridHandler.createImageViewerButton = () => {
    let button = document.querySelectorAll('#btnImageView');
    for(let b of button){
      b.addEventListener('click', function (e){
        let name = b.getAttribute('data-name');
        let url = b.getAttribute('data-url');
        let imageView = document.getElementById('imageView');
        let imageLabel = document.getElementById('imageLabel');
        imageView.innerHTML = `
          <img class="image shadow" src="${url}" alt="${name}" style="height: 100%; object-fit: cover; width: 100%;" />
        `
        imageLabel.textContent = name;
      });
    }
  }
  
}
