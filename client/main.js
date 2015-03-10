'use strict';

$(document).ready(function() {
  $('#go').click(go);
});

function go() {
  var input = $('#input').val();
  var rev = input.split(',').reverse();
  console.log(rev);

  for (var i = 0; i < rev.length; i++) {
    var base = rev[i];
    var sq = base * base;
    console.log(sq);

    var $left = $('<input type="button" id="update" value ="Left" />');
    $left.addClass('left');
    var $right = $('<input type="button" id="update" value ="Right" />');
    $right.addClass('right');
    var $div = $('<div>');
    $div.addClass('box');
    $div.text(sq);
    $('#boxes').append($div);
    $div.append('<br />', $left, $right);

    $left.click(function() {
      var $curr = $(this).parent();
      console.log($curr);
      var $prevBox = $(this).parent().prev();
      console.log($prevBox);

      $curr.insertBefore($prevBox);
    });

    $right.click(function() {
      var $curr = $(this).parent();
      console.log($curr);
      var $nextBox = $(this).parent().next();
      console.log($nextBox);
      $curr.after($nextBox);

      $curr.insertAfter($nextBox);
    });
  }
}
