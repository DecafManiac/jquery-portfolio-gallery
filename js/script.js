
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

$(document).ready(function() {
    $('nav a').on('click', navClickHandler);
    
});