$(document).ready(function () {
    // STORES COOKIES TO REMEMBER STATE ON PAGE REFRESH
    var nightmode_class = Cookies.get('nightmode_class');
    if (nightmode_class) {
        $('#sidebar').attr('class', nightmode_class);
        $('#navbar').attr('class', nightmode_class);
    }

    // CHANGES ICONS FOR SIDEBAR DAYMODE
    if ($('#sidebar').hasClass('daymode') && $('#navbar').hasClass('daymode')) {
        $('#nightmode-toggle').find("svg").attr('data-prefix', 'far');
        $('#nav-nightmode-toggle').find("svg").attr('data-prefix', 'far');
        bgColor = 'rgb(240,240,240)';
        particleColor = 'rgba(0,0,0,0.2)';
    }
    else {
        $('#nav-nightmode-toggle').find("svg").attr('data-prefix', 'fas');
        $('#nightmode-toggle').find("svg").attr('data-prefix', 'fas');
        bgColor = 'rgb(30,30,30)';
        particleColor = 'rgba(255,255,255,0.25)';
    }

    // ENSURES CLASSES ARE CORRECT FOR COLLAPSE
    if ($('#sidebar').hasClass('active') == true && $('#content').hasClass('expand') == false) {
        $('#content').addClass('expand');
    }
    else if ($('#sidebar').hasClass('active') == false && $('#content').hasClass('expand') == true) {
        $('#sidebar').addClass('active');
    }

    // ENSURES CLASSES ARE CORRECT FOR DAYMODE/NIGHTMODE
    if (($('#sidebar').hasClass('daymode') == true && $('#navbar').hasClass('daymode') == true) && $('content').hasClass('daymode') == false) {
        $('#content').addClass('daymode');
    }


    // TOGGLES CLASSES
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('expand');
    });
    $('#navbarCollapse').on('click', function () {
        $('#navbar-elements').toggleClass('collapsed');
    });
    $('#nightmode-toggle').on('click', function () {
        $('#sidebar').toggleClass('daymode');
        $('#navbar').toggleClass('daymode');
        $('#content').toggleClass('daymode');
        if ($('#sidebar').hasClass('daymode')) {
            $('#nightmode-toggle').find("svg").attr('data-prefix', 'far');
            $('#nav-nightmode-toggle').find("svg").attr('data-prefix', 'far');
            bgColor = 'rgb(240,240,240)';
            particleColor = 'rgba(0,0,0,0.15)';
        }
        else {
            $('#nightmode-toggle').find("svg").attr('data-prefix', 'fas');
            $('#nav-nightmode-toggle').find("svg").attr('data-prefix', 'fas');
            bgColor = 'rgb(30,30,30)';
            particleColor = 'rgba(255,255,255,0.25)';
        }
        Cookies.set('nightmode_class', $('#sidebar').attr('class'));
    });
    $('#nav-nightmode-toggle').on('click', function () {
        $('#sidebar').toggleClass('daymode');
        $('#navbar').toggleClass('daymode');
        $('#content').toggleClass('daymode');
        if ($('#sidebar').hasClass('daymode')) {
            $('#nightmode-toggle').find("svg").attr('data-prefix', 'far');
            $('#nav-nightmode-toggle').find("svg").attr('data-prefix', 'far');
            bgColor = 'rgb(240,240,240)';
            particleColor = 'rgba(0,0,0,0.15)';
        }
        else {
            $('#nightmode-toggle').find("svg").attr('data-prefix', 'fas');
            $('#nav-nightmode-toggle').find("svg").attr('data-prefix', 'fas');
            bgColor = 'rgb(30,30,30)';
            particleColor = 'rgba(255,255,255,0.25)';
        }
        Cookies.set('nightmode_class', $('#navbar').attr('class'));
    });
});