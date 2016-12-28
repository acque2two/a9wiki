$(function(){
    var script;
    $('head link:last').after('<link rel="stylesheet" href="/uploads/bootstrap.min.css">');
    
    script = document.createElement("script");
    script.src = "/uploads/jquery-3.1.1.min.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    
    script = document.createElement("script");
    script.src = "/uploads/bootstrap.min.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    
    script = document.createElement("script");
    script.src = "/uploads/mermaid.min.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    
    
    $('#head').addClass('navbar navbar-fixed-top navbar-default navbar-header');
    $('#head h1').addClass('navbar-brand');
    var title = $('#head h1').html();
    $('#head').prepend('<a class="navbar-brand" href="/">' + title + '</a>');
    $('#head h1').remove();
    $('#head .navbar-brand').after('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navigation" aria-expanded="false" aria-controls="navbar" </button>');
    
    $('#head ul').addClass('nav navbar-nav navigation');
    $('#footer .actions .minibutton a').addClass('btn btn-primary');
    $('.minibutton').removeClass('minibutton');
    
    var toc = $( "<div/>", {
                "id": "toc_list"});

    $.each($(".anchor"), function(i, val) {
        console.log(i + ': ' + val.id);
        toc.append("<p class='"+val.parentNode.tagName+"'><a href='" + val.href + "'>"+val.parentNode.textContent+"</a></p>");
    });
    
    $('#wiki-body').append(toc);
    
});