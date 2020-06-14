function checkCorrectStates() {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;

    if (w < 768 && $('#content').hasClass('expand') == true) {
        $('#content').removeClass('expand');
        $('#sidebar').removeClass('active');
    }

    // ENSURES CLASSES ARE CORRECT FOR COLLAPSE
    if ($('#sidebar').hasClass('active') == true && $('#content').hasClass('expand') == false) {
        $('#content').addClass('expand');
    }
    else if ($('#sidebar').hasClass('active') == false && $('#content').hasClass('expand') == true) {
        $('#sidebar').addClass('active');
    }
}

window.addEventListener("resize", checkCorrectStates);
checkCorrectStates();