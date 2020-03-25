$('.login').on('click', function () {
    window.location.href = '..\\login.html';
    return false;
});

// make the next button appear
function makeVisible(){
  document.getElementById("nav-btn-right").style.visibility = "visible";
}
