/*------------------------------------*\
    Main JS 
\*------------------------------------*/

/**
 *  Generate random Value from array helper function
 */

function randomValueFromArray(arrayObj) {
  return  Math.floor( Math.random() * arrayObj.length );
}



(function($) {
  // use ajax request to simulate dynamic loading actions for 
  // buttons and to show loading spinner, graphics, etc..

  // create loadmore Button Refrence.
  var $loadMore_button = $('#loadmore');
  var $loadMore_text = $('#loadtext');

  // add event
  $loadMore_button.on('click', function(e) {
    e.preventDefault();
    console.log("Load More Clicked!");

    // Change button / action element text.
    this.textContent="Loading...";


    // show .loading-text, add anim class
    // setTimeout for delay
    // remove class
    // is animated class
    $('#loadtext').addClass('is--anim');

    setTimeout( function () {
      // is animated class
      $('#loadtext').removeClass('is--anim');
    }, 600);


//
// loadImage();
//

//
//  END loadImage();
//


    setTimeout( function () {
      $loadMore_button.text('Load More Again.');
    }, 800);


    var num_page = parseInt( $('#num_page').text(), 10);
    // since we converted num_page into a number we can do operations.
    var update_num = (num_page) + 1;

    // add max at 10 for number counter
    if(update_num <= 10) {

      $('#num_page').text(update_num);
      // $('#num_page2').text(update_num);
      console.log(update_num);
      // console.log("Max out at 10.");
    }



  });   


})(jQuery);

