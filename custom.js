$(function(){
    $('head link:last').after('<link rel="stylesheet" href="/uploads/bootstrap.min.css">');
    $('head script:last').after('<script type="text/javascript" src="/uploads/bootstrap.min.js"></script>');
    $('head script:last').after('<script type="text/javascript" src="/uploads/mermaid.min.js"></script>');
    
    
    $('#head').addClass('navbar navbar-fixed-top navbar-default navbar-header');
    $('#head h1').addClass('navbar-brand');
    var title = $('#head h1').html();
    $('#head').prepend('<a class="navbar-brand" href="/">' + title + '</a>');
    $('#head h1').remove();
    $('#head .navbar-brand').after('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navigation" aria-expanded="false" aria-controls="navbar" </button>');
    
    $('#head ul').addClass('nav navbar-nav navigation');
    $('#footer .actions .minibutton a').addClass('btn btn-primary');
    $('.minibutton').removeClass('minibutton');
    
    
});