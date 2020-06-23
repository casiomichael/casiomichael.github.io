function checkCorrectStates() {
    var w = window.innerWidth;
    var h = window.innerHeight;


    if (w >= 950 && w < 1300) {
        $('#content').addClass('expand');
        $('#sidebar').addClass('active');
        console.log('here');
    }
    else if (w < 950){
        $('#content').removeClass();
        $('#sidebar').removeClass('active');
    }
    // ENSURES CLASSES ARE CORRECT FOR DAYMODE/NIGHTMODE
    if (($('#sidebar').hasClass('daymode') == true && $('#navbar').hasClass('daymode') == true) && $('content').hasClass('daymode') == false) {
        $('#content').addClass('daymode');
    }
}

window.addEventListener("resize", checkCorrectStates);
checkCorrectStates();