function PaginationHandler () {};


PaginationHandler.createPagination = () => {
    let category = PageCategoryHandler.categorySelector();
    let page;
    category !== '' ? page = window.location.search.split('?')[2] : '';
    let pagination = `<div class="col-md-12">
                        <div class="col-md-1 mx-auto">
                            <nav class="mx-auto" aria-label="...">
                              <ul class="pagination">
                                <li class="page-item">
                                  <a class="page-link" id="previous" href="?${category}?${parseInt(page) - 1}">Previous</a>
                                </li>
                                <li class="page-item">
                                  <a class="page-link" id="next" href="?${category}?${parseInt(page) + 1}">Next</a>
                                </li>
                              </ul>
                            </nav>
                        </div>
                    </div>`;
    return pagination;
}
PaginationHandler.pageMinVal = () => {
    let page = parseInt(window.location.search.split('?')[2]);
    let min = 1;
    let max = 4;
    return page > 1 ? min = max + (3 * (page - 2)) : min = 1;
}
PaginationHandler.pageMaxVal = () => {
    let page = parseInt(window.location.search.split('?')[2]);
    let max = 4;
    return page > 1 ? max = (max + (3 * (page - 1))) : max = 4;
}

PaginationHandler.disablePreviousButton = () => {
    let previousBtn = document.getElementById('previous');
    let page = parseInt(window.location.search.split('?')[2]);
    if(page === 1){
      previousBtn.classList.add('disabled');
    }
}
PaginationHandler.disableNextButton = () => {
    let nextBtn = document.getElementById('next');
    nextBtn.classList.add('disabled');
}