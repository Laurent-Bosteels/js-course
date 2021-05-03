/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/* Get the value of the "data-image" attribute from the element with id "source". Create a new image
element inside the target element that displays the image referred to by the attribute value. Then remove
the original element. */



(function() {

    const source = document.getElementById('source').getAttribute('data-image');
    const img = document.createElement('img');
    img.src = source;
    target.appendChild(img);
    source.remove();
    
})();





/* const source = document.querySelector('#source').getAttribute('data-image');
    const target = document.querySelector('#target');
    const img = document.createElement('img');
    img.src = source;
    target.appendChild(img); */

    /*     let source = document.getElementById("source");
    let img = document.createElement('IMG');

    img.src = source.getAttribute('data-image');

    document.getElementById('target').appendChild(img); */