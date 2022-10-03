// nav bar list 
const nav = document.querySelector( "[nav-bar]" );
const navlinks = document.querySelector( "[nav-links]" )

nav.addEventListener( "click", () =>
{
    navlinks.classList.toggle( "hiden" )
} )

document.addEventListener( "scroll", () =>
{
    navlinks.classList.add( "hiden" )
} )
//end nav bar list 

// copy right year
let copyright = document.querySelector( "[copy-right]" )

let datayear = new Date()

copyright.textContent = datayear.getFullYear()
// end copy right year

// scrolling
// document.onscroll = ( () => scrollY( { behahior: "smooth" } ) )