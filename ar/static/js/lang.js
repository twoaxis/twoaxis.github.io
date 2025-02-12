document.getElementById("lang").addEventListener("click", function() {

    localStorage.setItem('lang', 'en');
    window.location.href = '../en/';
});