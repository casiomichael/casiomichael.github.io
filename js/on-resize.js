function checkCorrectStates() {
    var w = window.innerWidth;
    var h = window.innerHeight;


    if (w >= 768 && w < 1300) {
        $('#content').addClass('expand');
        $('#sidebar').addClass('active');
        console.log('here');
    }
    else if (w < 768){
        $('#content').removeClass();
        $('#sidebar').removeClass('active');
    }
}

window.addEventListener("resize", checkCorrectStates);
checkCorrectStates();