// select all red shapes inside the orange container
$('#orange-container .red.shape')
// select all medium or small shapes
// inside the green container
$(`#green-container .medium.shape,
  #green-container .small.shape `)
// Select all shapes inside any container
$('.container .shape')
// 👇 with plain JavaScript
// document.querySelectorAll('.container .shape')

// select all link tags
$('a')
// select all link inside li tags
// selects all descendant a inside of li tags
$('li a')
// selects all children a inside of li tags
$('li > a')
// count all small blue circles
$('.small.blue.circle').length
$('.blue.circle').length

//get href attribute of first link on page
$('a').first().attr('href')
//when reading an attribute, class or anything else
//only the first node of the collection will be read
$('a').attr('href')
//set href attribute on all links on the page
// writing works on all nodes of the collection
$('a').attr('href', 'http://www.nyan.cat')

// Remove the "blue" class from all shapes and replace it with
// the "red" class
// const $blueShapes = $('.blue.shape').removeClass('blue')
// $blueShapes.addClass('red')
// jQuery allows to chain methods
// nearly every DOM method returns the jQuery collection
$('.blue.shape').removeClass('blue').addClass('red')

// Remove all shapes in the orange container
$('#orange-container .shape').remove()
// 👇 in plain javascript vs jQuery 👆
/*
document.querySelectorAll('#orange-container').forEach(
function (node) { node.remove() }
)
*/

// set the class attribute on all links to "highlight" with
// the attr method
$('a').attr('class', 'highlight')

// set the class attribute on all shapes to "highlight" with
// the attr method
// writing to the class attribute this way will overwrite
// all the classes
// this is not the recommended way to modify classes
$('.shape').attr('class', 'highlight')

// replace all "circle" classes with the "diamond" class
$('.circle').removeClass('circle').addClass('diamond')

// toggle the highlight class on all buttons
// adds class if it doesn't exist
// removes it if it exists
$('button').toggleClass('highlight')

// get html contents of reset button
$('#reset').html()

// get the html of all links
// will get html only for first anchor
$('a').html()
// get clever for the rest
// you use map on jQuery collections
// but, the nodes passed as arguments are not
// jQuery wrapped collections
// use the $ function on them to fix that
$('a').map(function (i, node) { return $(node).html() })

// change the reset button to read "Launch Doggos!"
$('#reset').html('Launch Doggos!')

// select only "grey" shapes in the "green" container with
// children
$('#green-container').children()
// select parents of "blue" circles
$('.blue.circle').parent()

//get the html of the table
$('table').html()
//replace contents of every td with yass
$('td').html('yass')
// select all shapes in the purple container
// using the children method
$('#purple-container .shape > *').parent() // for other interpretation
$('#purple-container').children('.shape')
// select parents of all td tags
$('td').parent()

// create a small blue diamond with $
$(`<div class="small blue diamond shape"></div>`)
// append small blue diamonds to all containers
$('.container')
  .append($(`<div class="small blue diamond shape"></div>`));
// prepend a new link to link list with href http://www.nyan.cat
$('ul')
 .prepend($(`<li><a href="http://www.nyan.cat">Nyan Cat</a></li>`))

// create a div with the container class
// then, prepend it to the first section of the body
// then, append a small black circle to it
$('body > section')
  .first()
  .prepend(
    $('<div class="container"></div>')
      .append(
        `<div class="small black circle shape"></div>`
      )
      .append(
        `<div class="small black circle shape"></div>`
      )
      .append(
        `<div class="small black circle shape"></div>`
      )
      .append(
        `<div class="small black circle shape"></div>`
      )
  )

document.addEventListener('DOMContentLoaded', function () {
  // put code in here that needs to run after the entire
  // is loaded
})
// 👆 plain JavaScript vs jQuery 👇
$(function () {
  // when your mouse enters any blue circle, log "Blue Circle: Go away!"
  $('.blue.circle').on('mouseenter', function (event) {
    console.log("Blue Circle: Go away!")
  })
  // 👇 plain JavaScript vs jQuery 👆
  /*
  document.querySelectorAll('.blue.circle').forEach(function (node) {
    node.addEventListener('mouseenter', function (event) {
      console.log("Blue Circle: Go away!")
    })
  })
  */

  // when your mouse leaves any blue circle, log "Blue Circle: Goodbye!" to the console
  $('.blue.circle').on('mouseleave', function (event) {
    console.log("Blue Circle: Goodbye!")
  })

  // When button 1 is clicked, remove all shapes
  $('#button-1').on('click', function (event) {
    $('.shape').remove()
  })

  // when button-2 is clicked, disable button-2
  $('#button-2').on('click', function (event) {
    const {currentTarget} = event;
    // currentTarget is a regular node (it does not have any jQuery methods)
    // call $ on it 👇 to turn into a jQuery collection
    // then, you'll be able to use all fancy & dandy jQuery methods with it
    $(currentTarget).attr('disabled', true);
  })

  // when button-3 is clicked, set the button message to
  // "Button 3 was clicked!"
  // (NEW!) Destructuring the argument itself
  // You can use destructuring in the arguments of a function
  // the below function, will expect that the first argument
  // will be an object with a currentTarget property
  // and, it will assign that property's value to a variable named currentTarget
  $('#button-3').on('click', function ({currentTarget}) {
    $(currentTarget).html('Button 3 was clicked!')
    $('#button-message').html('Button 3 was clicked!')
  })

  // when your mouse enters any tr, add the highlight class to it
  $('tr').on('mouseenter', function ({currentTarget}) {
    $(currentTarget).addClass('highlight')
  })
  // when your mouse leaves any tr, remove the highlight  class
  $('tr').on('mouseleave', function ({currentTarget}) {
    $(currentTarget).removeClass('highlight')
  })
})

// hide all red circles
$('.red.circle').hide()
// show all red circles
$('.red.circle').show()
// toggle the green container in 2s
$('#green-container').toggle(2000)
// toggle the green container in 2s
$('#green-container').toggle(2000, function () {
  // inside the callback function
  // this will be the node that used the toggle
  // method
  // it is a plain node, you have to wrap it
  // with $ to make it work
  $(this).toggle(2000)
  console.log('Work complete!')
})

// fadeOut the orange container
$('#orange-container').fadeOut()
$('#orange-container').fadeIn()

// slide the green container up in 3s and log
// "Zub Zub!" to the console

$('#green-container').slideUp(3000, function () {
  $(this).slideDown(500, function () {
    $(this).slideUp(500, function () {
      $(this).slideDown(500, function () {
        $(this).slideUp(500, function () {
          console.log('5th layer of Hell')
        })
      })
    })
  })
  console.log("Oh, noes! I'm being banished")
})

// slide the green container down in 0.5s













/* */
