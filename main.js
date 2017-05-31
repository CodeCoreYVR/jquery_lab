/* global $ */
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

// DEMO: Attributes, Classes & Removal

// 1. Set "href" attribute of all links on the page to "http://www.nyan.cat"
$('a').attr('href', 'http://www.nyan.cat');
// When writing with jQuery methods,
// all nodes inside the node list will be affected
$('a').attr('href') // returns the href of the first anchor tag
// When reading with jQuery methods, only the first node in the list will
// be read

// 2. Remove the "blue" class from all shapes and replace with a "red" class
$('.shape').removeClass('blue').addClass('red');
// Many jQuery methods can be chained, because they usually return a jQuery list


// EXERCISE: Practice

// 1. Set the “class” attribute of all anchors to “highlight” with attr method
$('a').attr('class', 'highlight'); // Avoid doing this in practice unless you
// intend to replace ALL classes on the node
// it's best to use the methods addClass, removeClass and toggleClass to manipulate
// classes

// 2. Replace all “circle” classes with the “diamond” class.
$('.circle').removeClass('circle').addClass('diamond');

// 3. Remove all shapes in the green & purple container.
$('#green-container .shape, #purple-container .shape').remove();


// Children
$('.container').children();
// the .children method in jQuery returns the child nodes of all nodes in the
// jQuery list

$('.container').children().parent();
// the .parent method returns the parent nodes all nodes in a jQuery list
// jQuery lists are sets and will never list the same node twice

// the children and parent methods can be given a CSS query string as argument
// to filter the nodes

// DEMO: html

// 1. Get "html" of the reset button.
// 2. Get "html" of all links.
$('a').html() // only returns the html of the first anchor

// we have to do a bit work to get it all
// jQuery lists have the map method
$('a').map((index, node) => $(node).html());
// to use jQuery methods on a plain node, you must call the $() with it to
// wrap inside a jQuery list
$('a').map((index, node) => node.innerHTML);

// 3. Change "reset" button to read "Launch Doggos!".
$('#reset').html('Launch Doggos!');

// EXERCISE: practice

// 1. Replace contents of every "td" with "yass"
$('td').html('yass');

// 2. Select parents of td tags
$('td').parent();

// DEMO: Creating nodes, append & prepend

// 1. Create a "small blue diamond" with $ function
$(`
  <div class="small blue diamond shape">
  </div>
`);

// 2. Append "small blue diamons" to all containers
$('.container').append($(`
  <div class="small blue diamond shape"> </div>
`));

// 3. Prepend a new link, "http://www.nyan.cat", to the list of links
$('ul').prepend($(`
  <li>
    <a href="http://www.nyan.cat">Nyan Cat</a>
  </li>
`));

// Listening for events with jQuery

// use the .on method on a jQuery list. jQuery will add an event listener
// for every node in the list. It behaves nearly identically to addEventListener
// it takes a event name as the first argument and callback as the second argument
$('.blue.circle').on('mouseenter', e => {
 console.log('Blue circle away!')
});

// $(document).addEventListener('DOMContentLoaded', () => { /* code here * / }))
// 👇 shortcut for 👆
// runs callback only once all the html in the document has finished loading
$(() => {
  // When “button 2” is clicked, disable “button 2”. (set the “disabled” attribute to true)
  $('#button-2').on('click', function (e) {
    const { currentTarget } = event;
    // currentTarget.disabled = true;
    // $(currentTarget).attr('disabled', true);

    $(this).attr('disabled', true);
    console.log('currentTarget === this', currentTarget === this);
  });

  // When “button 3” is clicked, set the button message to “Button 3 was clicked”
  $('#button-3').on('click', function (e) {
    $('#button-message').html('Button 3 was clicked!');
  })

  // When your mouse enters any “tr”, add the “highlight” to it.
  $('tr').on('mouseenter', e => {
    $(e.currentTarget).addClass('highlight');
  })
  // When your mouse leaves any “tr”, remove the “highlight” class from it.
  $('tr').on('mouseleave', e => {
    $(e.currentTarget).removeClass('highlight');
  })
});


// jQuery Effects

// EXERCISE: Practice
// 1. Fade the orange container out.
$('#orange-container').fadeOut()
// 2. Fade the orange container in.
$('#orange-container').fadeIn()
// Effects can be chained
$('#orange-container').fadeOut().fadeIn().fadeOut().fadeIn()
// 3. Slide the green container up in 3s then log “Zub Zub!”.
$('#green-container').slideUp(3000, function () {
  // effect methods can take a callback that is called when the event is complete
  // their 'this' is the node that is being affected
  console.log('Zub Zub!');
});
// 4. Slide the green container down in 0.5s.
$('#green-container').slideDown(500);








/* */
