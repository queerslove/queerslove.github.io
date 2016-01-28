$(document).ready(function() {
  if ($('ol:first').css('list-style-type') != 'none') { /* For IE6/7 only. */
    $('ol ol').each(function(i, ol) {
      ol = $(ol);
      var level1 = ol.closest('li').index() + 1;
      ol.children('li').each(function(i, li) {
        li = $(li);
        var level2 = level1 + '.' + (li.index() + 1);
        li.prepend('<span>' + level2 + '</span>');
        var level3 = level2 + '.' + (li.index() + 1);
        li.prepend('<span>' + level4 + '</span>');
        var level4 = level3 + '.' + (li.index() + 1);
        li.prepend('<span>' + level4 + '</span>');
        var level5 = level4 + '.' + (li.index() + 1);
        li.prepend('<span>' + level5 + '</span>');
      });
    });
  }
});