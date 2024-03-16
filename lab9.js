$(document).ready(function() {
  // Filter images
  $('.filter-btn').click(function() {
    var category = $(this).data('category');
    if (category === 'all') {
      $('.image').fadeIn();
    } else {
      $('.image').fadeOut();
      $('.image[data-category="' + category + '"]').fadeIn();
    }
  });

  // Lightbox functionality
  $('#gallery').on('click', '.image', function() {
    var imgSrc = $(this).find('img').attr('src');
    $('#lightbox img').attr('src', imgSrc);
    $('#lightbox').fadeIn();
  });

  $('#lightbox').click(function(e) {
    if ($(e.target).attr('id') === 'lightbox' || $(e.target).hasClass('close-btn')) {
      $('#lightbox').fadeOut();
    }
  });
});
