/* eslint-disable */

// EXERCISE: Try Selecting
// 1. Select the 2nd button
$('#button-2');
$('button:nth-of-type(2)');
$('button').eq(1); // eq is similar to using [] to get a node
// a specified index (zero indexed), but it returns the node
// wrapped in a jQuery list

// 2. Select all anchor tags inside li tags
$('li a');
$('li').find('a'); // .find is used to a query on all descendent nodes
// of all nodes wrapped in the jQuery list

// 3. Count the number of blue circles
$('.blue.circle').length;

// DEMO: Attributes, Classes

// 1. Set the "href" attribute of all links on the page to "http://www.nyan.cat"
$('a').attr('href', 'http://www.nyan.cat')
// When writing with jQuery methods,
// all nodes inside the node collection will be affected.
// When reading with jQuery methods, only the first node in the list
// will be read.

// 2. Remove the "blue" class from all shapes and replace with a "red" class
$('.shape').removeClass('blue').addClass('red')
// Many jQUery methods can be chained, because they usually return the jQuery list
// of nodes every time

// EXERCISE: Practice

// 1. Set the “class” attribute of all anchors to “highlight” with attr method
$('a').attr('class', 'highlight') // This works, but avoiding using
// `.attr` to manipulate classes, because it will always replace all of them.
// Try to always addClass, removeClass and toggleClass instead.

// 2. Replace all “circle” classes with the “diamond” class.
$('.circle').removeClass('circle').addClass('diamond')

// 3. Remove all shapes in the green & purple container.
$('#green-container .shape, #purple-container .shape').remove()

// DEMO: html

// 1. Get "html" of the reset button.
$('#reset').html()

// 2. Get "html" of all links.
$('a').html() // Doesn't work! Only returns the HTML contents for the first anchor.
// If we want to get the HTML contents of every, we have to loop over them.
// jQuery provides a map and each method on its list of nodes. However, they
// behave differently. The callback passed to the map will get the index as
// its first argument then the value being the node. This is the reverse
// the map for javascript arrays.
$('a').map((index, node) => $(node).html())

// 3. Change "reset" button to read "Launch Doggos!".
$('#reset').html('Launch Doggos!')
// .html used in this manner is a write operation and will affect all
// nodes in the list at once

// EXERCISE: practice

// 1. Replace contents of every "td" with "yass"
$('td').html('yass')

// 2. Select parents of td tags
$('td').parent() // returns the parent nodes of every item in the list
// a bunch of "tr"

// DEMO: Creating nodes, append & prepend

// 1. Create a "small blue diamond" with $ function
$(`
  <div class="small blue diamond shape"></div>
`)

// 2. Append "small blue diamons" to all containers

$('.container').append(
  $(`
    <div class="small blue diamond shape"></div>
  `)
)

// 3. Prepend a new link, "http://www.nyan.cat", to the list of links
$('ul').prepend(
  $(`
  	<li><a href="http://www.nyan.cat">Nyan Cat</a></li>
  `)
)

$('ul').prepend(
  $("<li><a href=\"http://www.nyan.cat\">Nyan Cat</a></li>")
)


// EXERCISE: Practice
// 1. Create a div with the “container” class.
$(`
  <div class="container"></div>
`)

// 2. Prepend it to the first section tag in the body.
$('section').eq(0).prepend(
  $(`
    <div class="container"></div>
  `)
)

// 3. Append a “small black circle” to the container.
$('section').eq(0).prepend(
  $(`<div class="container"></div>`).append(
    $(`<div class="small black circle shape"></div>`)
  )
)

// Listening for events with jquery
// use the .on method with a jQuery list. jQuery will add an event
// listener for every in the list. It behaves nearly identically to addEventListener.
// It takes an event name as the first argument and a callback as the second argument.

document.addEventListener('DOMContentLoaded', () => {
  $('.blue.circle').on('mouseenter', event => {
    console.log('Blue circle away with DOMContentLoaded!')
  })
})

$(function () {
  $('.blue.circle').on('mouseenter', event => {
    console.log('Blue circle away with jQuery!')
  })

  $('#button-1').on('click', event => {
    $('.shape').remove()
  })

  // When button-2 is clicked, disable button-2
  $('#button-2').on('click', event => {
    const {currentTarget} = event;
    // $('#button-2').attr('disabled', 'true')
    $(currentTarget).attr('disable', true);
  })

  $('#button-3').on('click', event => {
    $('#button-message').html('Button 3 was clicked!')
  })

  $('tr').on('mouseenter', event => {
    const {currentTarget} = event;
    $(currentTarget).addClass('highlight')
  })

  $('tr').on('mouseleave', event => {
    const {currentTarget} = event;
    $(currentTarget).removeClass('highlight')
  })
})






/* */
