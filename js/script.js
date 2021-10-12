$(()=>{
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $(".red-box").fadeOut(2000);
  // $('.blue-box').show();
  // $('.blue-box').toggle();


  // $('.blue-box').slideUp(4000);
  // $('.blue-box').slideDown(4000);

  // $('p').hide();
  // $('p').slideDown(2000);

  // $('.blue-box').animate({
  //   "margin-left":"+=200px"
  // },3000,"linear");

  // $('.blue-box').animate({
  //   "margin-left":"+=200px",
  //   "height":"50px",
  //   "width": "50px",
  //   "opacity":"0"
  // },2000,"swing");

  // $(".red-box").fadeTo(1000,0.2);
  // $(".green-box").delay(1000).fadeTo(1000,0.45);
  // $(".blue-box").delay(2000).fadeTo(1000,0.6).faceOut().delay(1000).fadeIn();    



  // $(".red-box").fadeTo(1000,0.2, ()=>
  // {
  //   $(".green-box").fadeTo(1000,0.45,()=>{
  //     $(".blue-box").fadeTo(1000,0.6);
  //   })
  // });


  // $('p').css('background-color', 'yellow');
  // $('p:last').css('background-color', 'green');
  // $('li').css('background-color', 'blue');
  // $('li:even').css('background-color', 'purple');
  // $('input:password').css('background-color', 'brown');


  // $('#list').find('li').css('background-color', 'green');
  // $('#list').parents().css('background-color', 'green');
  // $('#list').parents('div').css('background-color', 'green');
  // $('#list').parent().css('background-color', 'Chocolate');
  // $('#list').children().css('background-color', 'gold');
  // $('#list').siblings().css('background-color', 'silver');
  // $('#list').siblings(':header').css('background-color', 'pink');
  // $('#list').next().css('background-color', 'gold');

  // $('#list').find('li').filter(':even').css('background-color', 'green');

  // $('li').filter(index=>{
  //   return index %3===1;
  // }).css('background-color', 'green');

  // $('li').first().css('background-color', 'green');
  // $('li').eq(2).css('background-color', 'green');

  // $('li').not(index=>{
  //   return index % 3 === 3;
  // }).css('background-color', 'green');


// 4. Manipulating the DOM I – Inserting, Replacing and Removing Elements

  // $('ul ul:first').append('<li> Im the last subitem </li>');
  // $('<li> Im the last subitem</li>').appendTo('ul ul:first');

    // $('ul ul').prepend('<li> Im the first subitem </li>');

  // $('.blue-box').after(`<div class='blue-box'>Blue's Friend</div>`);
  // $('.red-box').before(`<div class='red-box'>Red's Friend</div>`);

  // $('.blue-box').after($('.red-box'));





  // $('li').replaceWith(`<li> Replaced with </li>`);

  // var firstItem = $('li:first');
  // $('p:first').replaceWith(firstItem)

  // $(".red-box, .blue-box").replaceWith("<div class='green-box'>green box</div>")
  // $("<div class='green-box'>green box</div>").replaceAll(".red-box, .blue-box");


  // $('li').remove();
  // $('form').children().not('input:text,br, textarea').remove();

  // var detachedItem = $('.red-box').detach();
  // $('#list').append(detachedItem);

  // $('#list, .red-box, .green-box').empty();

















});