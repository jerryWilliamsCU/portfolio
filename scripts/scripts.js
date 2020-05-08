// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

// ES6 Class
class TypeWriter {
	constructor(txtElement, words, wait = 3000) {
	  this.txtElement = txtElement;
	  this.words = words;
	  this.txt = '';
	  this.wordIndex = 0;
	  this.wait = parseInt(wait, 10);
	  this.type();
	  this.isDeleting = false;
	}
  
	type() {
	  // Current index of word
	  const current = this.wordIndex % this.words.length;
	  // Get full text of current word
	  const fullTxt = this.words[current];
  
	  // Check if deleting
	  if(this.isDeleting) {
		// Remove char
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	  } else {
		// Add char
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	  }
  
	  // Insert txt into element
	  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
	  // Initial Type Speed
	  let typeSpeed = 200;
  
	  if(this.isDeleting) {
		typeSpeed /= 2;
	  }
  
	  // If word is complete
	  if(!this.isDeleting && this.txt === fullTxt) {
		// Make pause at end
		typeSpeed = this.wait;
		// Set delete to true
		this.isDeleting = true;
	  } else if(this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		// Move to next word
		this.wordIndex++;
		// Pause before start typing
		typeSpeed = 500;
	  }
  
	  setTimeout(() => this.type(), typeSpeed);
	}
  }
  
  
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
	const txtElement = document.querySelector('.txt-type');
	const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = txtElement.getAttribute('data-wait');
	// Init TypeWriter
	new TypeWriter(txtElement, words, wait);
  }

////////////////////////////////////////////////
// MAKE THE SPLASH CONTAINER VERTICALLY CENTERED

function centerSplash() {
	var navHeight = $("nav").outerHeight();
	var splashHeight = $(".splash .container").height();
	var remainingHeight = $(window).height() - splashHeight - navHeight;
	$(".splash .container").css({"padding-top" : remainingHeight/2, "padding-bottom" : remainingHeight/2});
  }
  
  $( document ).ready( function() {
	centerSplash();
  });
  
  $( window ).resize( function() {
	centerSplash();
  });


