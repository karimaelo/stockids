function isAuthenticated() {
    var isAuth = localStorage.getItem("isAuthenticated");
    if (isAuth != "true") {
        window.location.href = "#login";
    }
}
