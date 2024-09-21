function navigateTo(page) {
    window.history.pushState({}, '', page);
    document.title = page === 'index' ? 'الصفحة الرئيسية' : page === 'chat' ? 'الشات الذكي' : 'القوانين';
    fetch(`${page}.html`).then(response => response.text()).then(html => {
        document.body.innerHTML = html;
    }).catch(error => {
        console.error('Error loading page:', error);
    });
}
