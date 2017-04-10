// DEMO: Selector Warm-Up
// 1. Select all red shapes inside the orange container

// The $ function is primary way to use jQuery
// If given a CSS query string, it'll find
// those nodes and put them a jQuery wrapped array-like
// object
$('#orange-container .red.shape')

$('#orange-container').find('.red.shape')
// 👆 jQuery vs plain JS 👇
// document
//   .querySelector('#orange-container')
//   .querySelectorAll('.red.shape')

// 2. Select all medium or small shapes inside
// the green container
$('#green-container .medium.shape, #green-container .small.shape')
$('#green-container').find('.medium.shape, .small.shape')

// 3. Select all shapes inside any container
$('.shape')

// EXERCISE: Try Selecting

// 1. Select the 2nd button
$('button')[1] // Gets second button as a regular javascript node
// 👆 can't use jQuery methods and properties
$('button').eq(1) // Gets second button still wrapped inside a jQuery collection
// 👆 can use jQuery methods and properties

// 2. Select all anchor tags inside li tags
$('li a') // 🏃💨 Faster than 👇
$('li').find('a') // Slower...

// 3. Count the number of blue circles
$('.blue.circle').length

// When working with jQuery, make sure that
// your nodes are wrapped in jQuery collections
// You can wrap any javascript Node with jQuery
// by doing as follows:

const firstBlueSquare = document.querySelector('.blue.square')
$(firstBlueSquare) // wrap firstBlueSquare in jQuery collection allowing
// the use of jQuery methods.

/* common use case:
const target = event.target;
$(target) <-- to use jQuery methods on target of an event
*/

// DEMO: Attributes, Classes & Removal

// 1. Get "href" attribute of the first link
// on the page
$('a').eq(0).attr('href');
$('a').attr('href') // returns the same value as above 👆
// When doing any read operation on a jQuery collection of nodes,
// only the value of the node will be returned everytime

// 2.  Set "href" attribute of all links on the page to "http://www.nyan.cat"
$('a').attr('href', 'http://www.nyan.cat')
// When doing a read operation on a jQuery collection of nodes,
// all nodes are modified

// 3. Remove the "blue" class from all shapes and replace it with the "red" class
// Nearly every method in jQuery returns this or the jQuery node list
// This allows to chain methods one after the other
$('.blue.shape').removeClass('blue').addClass('red')

// 4. Remove all shapes in the orange container
$('#orange-container .shape').remove()
$('#orange-container').children('.shape').remove()
$('#orange-container').find('.shape').remove()

// EXERCISE: Practice

// 1. Set the "class" attribute of all anchors to "highlight" with the
// attr method
$('a').attr('class', 'highlight')

// 2. Set the "class" attribute of all shapes to "highlight" with the
// attr method
// $('a').attr('class', 'highlight')
// Will completely replace all classes with highlight
// Don't do it unless that is your intent! Use
// addClass, removeClass and toggleClass instead

// 3. Replace all "circle" classes with the "diamond" class
$('.circle').removeClass('circle').addClass('diamond')

// 4. Toggle the highlight class on all buttons
$('button').toggleClass('highlight')

// 5. Remove all shapes in the green & purple container
$('#green-container, #purple-container').find('.shape').remove()

// DEMO: HTML, Children and parent

// 1. Get "html" of reset button
$('#reset').html()

// 2. Try to get "html" of all links
// To read the html of all links (anchor tags), we have to iterate
// over each because read operations on jQuery collections always return
// values from the first node
$('a').map( // mapping on jQuery collections works slightly differently than
  // with javascript Arrays
  function (index, node) {
    // the callback passed to the map function receives 2 arguments:
    // - the first are the indexes of the nodes being iterated
    // - the second are the nodes themselves which are plain javascript nodes
    return $(node).html() // to use jQuery methods on plain nodes wrap them with $()
  }
)

// 3. Change the reset button to read "Launch Doggos"
$('#reset').html('Launch Doggos!')

// 4. Select only "grey" shapes in the "green" container using the "children" method
$('#green-container').children('.grey.shape')

// 5. Select parents of "blue" circles
$('.blue.circle').parent()

// DEMO: Creating nodes, append & prepend
// 1. Create a "small blue diamond" with $
$(`<div class='small blue diamond shape'></div>`)

// 2. Append "small blue diamond" to all containers
$('.container').append(
  $(`<div class="small blue diamond shape"></div>`)
);

// 3. Prepend a new link, http://www.nyan.cat, to the list of links
$('ul').prepend(
  $(`<li><a href="http://www.nyan.cat">Nyan Cat</a></html>`)
);

// EXERCISE: Practice
// 1. Create a div with the "container" class
$('<div class="container"></div>');

// 2. Prepend it to the first "section" tag in the body
const firstContainer = $('<div class="container"></div>');
$('body section').eq(0).prepend(firstContainer);

// 3. Append a "small black circle" to it
firstContainer.append($('<div class="small black circle shape"></div>'));

// DEMO: Events with on

// 1.
$('.blue.circle').on('mouseenter',
  function (event) {
    console.log('Blue Circle: Go away!')
  }
)

// 2.
$('.blue.circle').on('mouseleave',
  function (event) {
    console.log('Blue Circle: Goodbye!')
  }
)

// 3. When "Button 1" is clicked, remove
// all shapes

// EXERCISE: Demo
// 1. When "button 2" is clicked, disable "button 2" (set the "disabled"
// attribute to true)

$('#button-2').on('click',
function (event) {
  // $('#button-2').attr('disable', true)
  // 👇 optimal option, with 👆 javascript as to spend
  // processing to find the node again
  $(event.currentTarget).attr('disabled', true);
})

// 2. When "button 3" is clicked, set the button message to "Button 3 was
// clicked!"
$('#button-3').on('click',
function (event) {
  $('#button-message').html('Button 3 was clicked!')
})

// 3. When your mouse enters any "tr", add the "highlight" class to it
$('tr').on('mouseenter', function (event) {
  $(event.currentTarget).addClass('highlight');
})

// 4. When your mouse leaves any "tr", remove the "highlight" class from it
$('tr').on('mouseleave', function (event) {
  // you can also use `this` inside callbacks of .on
  // `this` is effectively the same as using event.currentTarget
  // $(this).removeClass('highlight');
  // using `this` as the currentTarget is only available in
  // jQuery

  $(event.currentTarget).removeClass('highlight');
})

// DEMO: Effects

// 1. Hide the red circles
$('.red.circle').hide();
$('.red.circle').hide(1000); // hide with animation over 1s

// 2. Show the red circles
$('.red.circle').show();

// 3. Toggle the green container in 2s
$('#green-container').toggle(2000);

// 4. Toggle it again in 2s and log "Work Complete!"
$('#green-container').toggle(2000, function () {
  // inside the complete callback of an effect function
  // we get access to `this` which refers to the node that's
  // being animated
  $(this).toggle(2000, function () {
    console.log('Work complete!')
  })
})

// EXERCISE: Practice

// 1. Fade the orange container out.
$('#orange-container').fadeOut()
$('#orange-container').fadeOut(1000) // it can take an animation time in milliseconds

// 2. Fade the orange container in.
$('#orange-container').fadeIn(1000)
$('#orange-container').fadeIn(1000).fadeOut(1000) // animations can be chained

// 3. Slide the green container up in 3s then log "Zub Zub!".
$('#green-container').slideUp(function() {
  console.log('Zub Zub!')
})

// 4. Slide the green container down in 0.5s.
$('#green-container').sildeDown(500);










/* */
