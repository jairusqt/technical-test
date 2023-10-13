function MainViewRenderer() {};

MainViewRenderer.prototype.render = () => {
    let mainView = document.getElementById('main');
    let nav = `<nav class="navbar shadow navbar-expand-lg bg-light bg-gradient sticky-top">
                <div class="container-fluid">
                  <a class="navbar-brand" href="?"><em>Photo Gallery App</em></a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav" id="navbar-nav">
                    </div>
                  </div>
                </div>
              </nav>`;
    let imageContainer = `<div class="container">
                  <div class="col-md-12 row mx-auto p-5" id="imageContainer">
                  </div>
               </div>`;
    let landingPage = `<div id="landingPage">
                        
                      </div>`;
    let ImageViewer = `<div class="modal fade" id="imageViewerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5" id="imageLabel"></h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div id="imageView" class="modal-body" style="height: 800px;">

                            </div>
                          </div>
                        </div>
                      </div>`
    mainView.innerHTML = nav;
    mainView.innerHTML += landingPage;
    mainView.innerHTML += imageContainer;
    mainView.innerHTML += ImageViewer;

    PageCategoryHandler.createNavCategoryItems();
    PageCategoryHandler.categoryHighLighter();
    PageCategoryHandler.renderByCategory();
}