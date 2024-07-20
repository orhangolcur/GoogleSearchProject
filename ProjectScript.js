document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    if (query) {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = searchUrl;
        document.getElementById('search-input').value = "";
    } else {
        alert('Please enter a search term');
    }
});

document.getElementById('image-search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    if (query) {
        const searchUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
        window.location.href = searchUrl;
        document.getElementById('search-input').value = "";
    } else {
        alert('Please enter a search term');
    }
});

document.getElementById('feeling-lucky-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    if (query) {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=1`;
        window.location.href = searchUrl;
        document.getElementById('search-input').value = "";
    } else {
        alert('Please enter a search term');
    }
});
