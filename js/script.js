
function navClickHandler(evt) {
    $('nav li.current').removeClass('current');
    $(evt.target).parent().addClass('current');
    // set heading 
    $('#heading').text($(evt.target).text());

    // Get and filter link text
    let category = $(evt.target).text().toLowerCase().replace(' ', '-');
    
    //remove hidden addClass
    if (category === 'all-projects') {
        $('#gallery li:hidden').fadeIn('slow').removeClass('hidden');
    } else {
        $('#gallery li').each(function() {
            if(!$(this).hasClass(category)) {
                $(this).hide().addClass('hidden');
            } else {
                $(this).fadeIn('slow').removeClass('hidden');
            }
        })
    } //stop link behavior
    return false; 
}

function mouseEnterHandler(evt) {
    // get data atrr values
    
    var title = $(evt.target).parent().data('title');
    var description = $(evt.target).parent().data('desc');
    // validation
    
    if (description == null) {
        description = 'Click to enlarge';
    
    }
    if(title == null) {
        title = '';
      
    }
    
    //create overlay div\
    $(evt.target).parent().parent().append('<div class="overlay"></div>');
    // get overlay div
    var overlay = $(evt.target).parent().parent().children('.overlay');
    // add html to overlay
    overlay.html('<h3>'+title+'</h3><p>'+description+'</p>');
    // fade in overlay
    overlay.fadeIn(800);
}

function mouseLeaveHandler(evt) {
     //create overlay div\
  
    $(evt.target).parent().parent().append('<div class="overlay"></div>');
    // get overlay div
    var overlay = $(evt.target).parent().parent().children('.overlay');
    // fade out
    overlay.fadeOut(100);
}

$(document).ready(function() {
    $('nav a').on('click', navClickHandler);
    $('ul#gallery li').on('mouseenter', mouseEnterHandler)
    $('ul#gallery li').on('mouseleave', mouseLeaveHandler)
});