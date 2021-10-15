$(function(){
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

  // $('#list, .red-box, .green-box, form').empty();


  // var galleryImage=$('.gallery').find('img').first();
  // var images=[
  //             './images/laptop-mobile_small.jpg',
  //             './images/laptop-on-table_small.jpg',
  //             './images/people-office-group-team_small.jpg',
  //            ];
             
  // var i=0;
  // setInterval(()=>
  // {
  //   i=(i+1) % images.length;
  //   galleryImage.fadeOut(function(){
  //       $(this).attr("src", images[i]);
  //       $(this).fadeIn();
  //   });
  // },1000);






  // 5. Manipulating the DOM II – Changing Element Data and CSS
  // alert("he");
  // $(".gallery").css("dispaly", "none");

  // var redBox = $(".red-box");
  // alert(redBox.css("width"))   
  // alert(redBox.width());   
  // var properties = $('p').css(["font-size","color","line-height"]);
  // console.log(properties);

  // $('p').addClass('fancy-text');
  // $("li li").addClass(function(index) 
  // { 
  //   $(this).addClass("item-"+ index);  
  // });

  // $('div').addClass(function (index, currentClass)
  //   { 
  //     if(currentClass==="dummy")
  //     {
  //       return "red-box";
  //     }
  //   });


    // $('dummy').removeClass("red-box").addClass("green-box");
  // var gallery = $(".gallery");
  //   var images=[
  //               './images/laptop-mobile_small.jpg',
  //               './images/laptop-on-table_small.jpg',
  //               './images/people-office-group-team_small.jpg',
  //              ];
  
  // gallery.data("availableImages", images);
  // // console.log(gallery.data("availableImages"));
  // gallery.data("name", "testing images");
  // console.log(gallery.data());
  // gallery.removeData("name");
  // console.log(gallery.data());




  // var firstPar = $("p:first");
  // console.log(firstPar.html());
  // console.log(firstPar.text());
  // $("p:first").html( firstPar.html() +"this was appended");


  // Events

// $("#btn-click").click(function (e) { 
//   e.preventDefault();
//   alert("hello");
// });

// $(".green-box").hover(function () {
//     // over
//     $(this).text("hover over");
//   }, function () {
//     // out
//     $(this).text("hover out");
//   }
// );

// $(".blue-box").mouseenter(function () { 
//   $(this).fadeTo(500, 0.5);  
// });

// $(".blue-box").mouseleave(function () { 
//   $(this).fadeTo(500, 1);
// });

// Delegated events


// $("p").click(function (e) { 
//   e.preventDefault();
//   $(this).slideUp();
// });


// $("#content").on("click","p", function () {
//   $(this).slideUp();
// });


// $("#content").append("<p>this is dynamically added</p>");

// Passing data to user on some event'

// $("#btn-click").click({
//   user:"Daniyal"
// },  function (e) { 
//   e.preventDefault();
//   greetUser(e.data);
// });

// function greetUser(userData)
// {
//   username= userData.user || "anonyms";
//   alert("hello "+ username)
// }

// var galleryImages = $(".gallery").find("img");
// galleryImages.css("width", "33%").css("opacity","0.7");

// galleryImages.mouseenter(function () { 
//   $(this).stop().fadeTo(500,1);  
// });

// galleryImages.mouseleave(function () { 
//   $(this).stop().fadeTo(500,0.7);  
// });

// galleryImages.click(function (e) { 
//   e.preventDefault();
//   var source=$(this).attr("src");
//   var image= $("<img>").attr("src", source).css("width", "100%");
//   $(".lightbox").empty().append(image).fadeTo(2000);
// });

  // var inputFields=$("input:text, input:password, textarea");
  
  // inputFields.focus(function (e) 
  // { 
  //   e.preventDefault();
  //   $(this).css("box-shadow","0 0 4px red");
  // });

  // inputFields.blur(function (e) { 
  //   e.preventDefault();
  //   $(this).css("box-shadow","none");    
  // });


  // $("#name").blur(function () { 
  // var text = $(this).val();
  // if(text.length <3)    
  //   $(this).css("box-shadow","","0 0 4px #811");
  // else
  //   $(this).css("box-shadow","","0 0 4px #181");      
  // });

  // $("#checkbox").change(function () { 

  //   var isChecked =$(this).is(":checked");
  //   if (isChecked) 
  //   {
  //     alert("checked");
      // $(this).add("label[for=''cb]").css("box-shadow","","0 0 4px #811");
  //   } 
  //   else 
  //   {
  //     alert("unchecked");
      // $(this).add("label[for=''cb]").css("box-shadow","","0 0 4px #181");      
  //   }    
  // });

  // $("#form").submit(function (e) { 

  //   var text= $("#message");
  //   if(text.val().trim()=="")
  //   {
  //     e.preventDefault();
  //     text.css("box-shadow","","0 0 4px #811");
  //   }
  //   else{
  //     alert("data");
  //     text.css("box-shadow","","0 0 4px #181");
  //   }    
  // });


    // AJAX

    // $("#code").load("js/script.js");

    // $("#code").load("js/script.js", function(response,status){

    //   if(status=="error")
    //   {
    //     alert("doesnt exist");
    //   }
    //   else{
    //     console.log(response)
    //   }
    // })

    // var flickrAPI= "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    // $.getJSON(flickrAPI,{
    //   // options
    //   tags:"sun",
    //   tagmode:"any",
    //   format:"json"

    // }).done( function(data){
    //   // success
    //   console.log(data);
    //   // $.each(data.items, function (indexInArray, valueOfElement) { 
    //   //   console.log(valueOfElement)   
    //   // });

    // }).fail(function (){
    //   alert("Error")
    // })

  // var pokemonAPI= "https://pokeapi.co/api/v2/generation/1"    

  // $.getJSON(pokemonAPI).done(function (data){
  //     console.log(data);
  //     $.each(data.pokemon_species, function (index, pokemon) { 
  //         var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  //         console.log(name);
  //         var p =$("<p>").html(`Pokemon specie no: ${index+1} is ${name}`);
  //         p.appendTo("#pokemon");        
  //     });

    })




















  });