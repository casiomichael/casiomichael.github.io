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
        $('#body').attr('class', 'daymode');
        bgColor = 'rgb(240,240,240)';
        particleColor = 'rgba(0,0,0,0.2)';
    }
    else {
        $('#nav-nightmode-toggle').find("svg").attr('data-prefix', 'fas');
        $('#nightmode-toggle').find("svg").attr('data-prefix', 'fas');
        bgColor = 'rgb(30,30,30)';
        particleColor = 'rgba(255,255,255,0.25)';
    }

    // ENSURES CLASSES ARE CORRECT FOR DAYMODE/NIGHTMODE
    if (($('#sidebar').hasClass('daymode') == true && $('#navbar').hasClass('daymode') == true) && $('content').hasClass('daymode') == false) {
        $('#content').addClass('daymode');
    }
    
    // ENSURES CLASSES ARE CONSISTENT
    if ($('#sidebar').hasClass('active')){
        $('#content').addClass('expand');
    }
    if ($('#content').hasClass('expand')){
        $('#sidebar').addClass('active');
    }

    // KEEPS SUBMENU EXPANDED IF CURRENT PAGE
    if ($('#nav-exp-dropdown').hasClass('currentPage') || $('#sidebar-exp-dropdown').hasClass('currentPage')) {
        $('#nav-exp-dropdown').attr('aria-expanded', 'true');
        $('#sidebar-exp-dropdown').attr('aria-expanded', 'true');
        $('#nav-expSubmenu').addClass('show');
        $('#sidebar-expSubmenu').addClass('show');
    }
    if ($('#nav-proj-dropdown').hasClass('currentPage') || $('#sidebar-proj-dropdown').hasClass('currentPage')) {
        $('#nav-proj-dropdown').attr('aria-expanded', 'true');
        $('#sidebar-proj-dropdown').attr('aria-expanded', 'true');
        $('#nav-projSubmenu').addClass('show');
        $('#sidebar-projSubmenu').addClass('show');
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
        $('#body').toggleClass('daymode');
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
        $('#body').toggleClass('daymode');
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