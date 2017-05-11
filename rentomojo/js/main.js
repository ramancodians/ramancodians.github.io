var isMenuOpen = false;

$('.hamburger-menu').click((e)=>{
    !isMenuOpen 
        ? $(e.target).removeClass('fa-bars').addClass('fa-remove')
        : $(e.target).removeClass('fa-remove').addClass('fa-bars')
    
	$('.left-navigation').toggleClass('open');
    isMenuOpen = !isMenuOpen;
});