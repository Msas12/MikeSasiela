$(document).ready(function(){

    // initializes dark theme if switch is toggled to dark
    function darkTheme() {
        $(".navbar, .card, .card-footer").addClass('bg-dark')
        $('.list-group-item').addClass('tabs-bg-dark')
        $('.fab').addClass('fab-dark')
        $('html, body').addClass('darkTheme')
    }

    // initializes dark theme if switch is toggled to light
    function lightTheme() {
        $(".navbar, .card, .card-footer").removeClass('bg-dark')
        $('.list-group-item').removeClass('tabs-bg-dark')
        $('.fab').removeClass('fab-dark')
        $('html, body').removeClass('darkTheme')
    }

    // Event Listener switches Dark Mode Toggle on or off
    $('.form-check-input').on( 'click', function() {
        localStorage.setItem('dark', this.checked);
        if(this.checked) {
            $('.form-check-input').attr("checked", "checked")
            $('.checked').removeClass('d-none')
            $('.default').addClass('d-none')

            darkTheme()

        } else {
            $('.form-check-input').removeAttr("checked", "checked")
            $('.default').removeClass('d-none')
            $('.checked').addClass('d-none')

            lightTheme()
        }
   });

   // Checks for if the Dark Mode Toggle is switched on or off
   function getIfDark() {
    let dark = localStorage.getItem('dark')
    console.log(dark)
        if (dark == 'true') {
            $('.form-check-input').attr("checked", "checked")
            $('.checked').removeClass('d-none')
            $('.default').addClass('d-none')

            darkTheme()

        }else {
            $('.form-check-input').removeAttr("checked", "checked")
            $('.default').removeClass('d-none')
            $('.checked').addClass('d-none')

            lightTheme()
        }
   }
 
    
    // Calls function at page load to check local storage if dark is true or false 
    getIfDark()

  });