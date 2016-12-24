$(function(){
    $('head link:last').after('<link rel="stylesheet" href="/uploads/bootstrap.min.css">');
    $('head link:last').after('<script type="text/javascript" src="/uploads/bootstrap.min.js"></script>');
    
    $('#head').addClass('navbar navbar-fixed-top navbar-default navbar-header');
    $('#head h1').addClass('navbar-brand');
    var title = $('#head h1').html();
    $('#head').prepend('<a class="navbar-brand">' + title + '</a>');
    
});