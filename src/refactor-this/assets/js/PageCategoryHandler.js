function PageCategoryHandler() {}

PageCategoryHandler.createNavCategoryItems = () => {
    const navbarNav = document.getElementById('navbar-nav');
    let categories = ['nature', 'architecture', 'fashion'];
    for(const category of categories){
        let categoryToUpperFirstCase = category.charAt(0).toUpperCase() + category.slice(1);
        let categoryItem = `<a class="nav-link" id="${category}" href="?${category}?1">${categoryToUpperFirstCase}</a>`;
        navbarNav.innerHTML += categoryItem;
    }
};

PageCategoryHandler.categorySelector = () => {
    return window.location.search !== '' ? window.location.search.split('?')[1] : '';
};

PageCategoryHandler.categoryHighLighter = () => {
    let selectedCategory = PageCategoryHandler.categorySelector();
    selectedCategory === '' ? '' : document.getElementById(selectedCategory).classList.add('active');
};

PageCategoryHandler.renderByCategory = () => {
    let mainView = document.getElementById('main');
    let selectedCategory = PageCategoryHandler.categorySelector();
    let min = PaginationHandler.pageMinVal();
    let max = PaginationHandler.pageMaxVal();
    selectedCategory === '' ? LandingPage.createLandingPage() : ImageGridHandler.getImageData(selectedCategory, min, max);
    selectedCategory === '' ? '': mainView.innerHTML += PaginationHandler.createPagination();
    PaginationHandler.disablePreviousButton();
};