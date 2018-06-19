Revealator.effects_padding = '-500';

window.onload = function() {
    //showFilmBlock();
    showPopupWindow();
    showAddingFilmPopup();
    createNewFilm();
    showMobileMenu();
}

function showMobileMenu() {
    var menuItem = $('.menu_item');
    
    $('#hamburger').click(function() {
        $(this).toggleClass('exit_icon');
        menuItem.each(function() {
            $(this).toggleClass('mobile_menu');
            if ($(this).text() == 'Обо мнe') {
                $(this).toggleClass('about_me_item');
            }
            if ($(this).text() == 'Мое хобби') {
                $(this).toggleClass('hobby_item');
            }
            if ($(this).text() == 'Любимые фильмы') {
                $(this).toggleClass('my_films_item');
            }
            if ($(this).text() == 'Добавить фильм') {
                $(this).toggleClass('add_film_item');
            }
        });
        if ($('#about_me').hasClass('mobile_menu')) {
            $('body').css('background-position', '0 250px');
        }
        else {
            $('body').css('background-position', '0 50px');
        }
    });
    
    $(window).resize(function() {
        if ($(window).width() > '883') {
            $('#hamburger').removeClass('exit_icon');
            $('body').css('background-position', '0 50px');
            menuItem.each(function() {
                if ($(this).text() == 'Обо мнe') {
                    $(this).addClass('about_me_item');
                }
                if ($(this).text() == 'Мое хобби') {
                    $(this).addClass('hobby_item');
                }
                if ($(this).text() == 'Любимые фильмы') {
                    $(this).addClass('my_films_item');
                }
                if ($(this).text() == 'Добавить фильм') {
                    $(this).addClass('add_film_item');
                }
                $(this).removeClass('mobile_menu');
            });
        }
    });
}


 

$('.about_me_item').on('click', function() {
  $.smoothScroll({scrollTarget: '#my_name'});
  return false;
});

$('.hobby_item').on('click', function() {
  $.smoothScroll({scrollTarget: '.my_hobby'});
  return false;
});

$('.my_films_item').on('click', function() {
  $.smoothScroll({scrollTarget: '.my_films_block'});
  return false;
});

function showAddingFilmPopup(){
    $('.add_film_item').click(function(){
        $('.add_film_popup').show('slow');
        $('.background').show();
    });

    $('.background').click(function(){
        $('.add_film_popup').hide();
        $('.background').hide();
    });

    $('#close_window').click(function(){
        $('.add_film_popup').hide();
        $('.background').hide();
    });
}

function createNewFilm(){

    $('#add_film_button').click(checkFormAddFilm);
    
    function checkFormAddFilm(){
        var hasEmptyFields = false;
        var requiredFields = document.getElementsByClassName('add_film_field');

        for (var i = 0; i < requiredFields.length; i++){
            if (requiredFields[i].value == '') {
                requiredFields[i].classList.add('error');
                hasEmptyFields = true;
            }
        }
        event.preventDefault();
        
        if (!hasEmptyFields) {
            var filmName = '<h4>' + $('#film_name').val() + '</h4>';
            var filmPicture = '<img src="' + $('#film_picture').val() + '" class="my_film_img">';
            var filmDescription = '<p>' + $('#film_description').val() +'</p>';
            var lastFilm = $('.my_films_block').find(':last-child');
            var filmClass;

            if (lastFilm.hasClass('first_film')){
                filmClass = 'second_film';
            }
            if (lastFilm.hasClass('end')){
                filmClass = 'first_film';
            }
            if (lastFilm.hasClass('clear_between_second_third')){
                filmClass = 'third_film';
            }
            if (lastFilm.hasClass('third_film')){
                filmClass = 'fourth_film';
            }
            
            $('.my_films_block').append('<div class="' + filmClass + '">' + filmPicture + filmName + filmDescription + '</div');
            if (filmClass == 'second_film'){
                $('.my_films_block').append('<div class="clear_between_second_third"></div>');
            }
            if (filmClass == 'fourth_film'){
                $('.my_films_block').append('<div class="clear end"></div>');
            }
            
            $('.add_film_popup').hide();
            $('.background').hide();
        }
    }
}


function showFilmBlock() {
    var filmButton = document.getElementById('all_films_button');

    function displayFilmBlock(event) {
        event.preventDefault();
        var advancedFilm = document.getElementById('hidden_block');
        filmButton.style.display = 'none';
        advancedFilm.classList.add('visible_advanced_film');
    }
    
    filmButton.addEventListener('click', displayFilmBlock);
}

function showPopupWindow() {
    var popupWindow = document.getElementById('popup');
    var background = document.getElementById('background');
    var requiredFields = document.getElementsByClassName('required_field');
    var tagBody = document.getElementsByTagName('body')[0];
    var tagHtml = document.getElementsByTagName('html')[0];
    
    function displayWindow(event) {
        
        event.preventDefault();
        background.classList.add('set_visible');
        popupWindow.classList.add('set_visible');
        tagBody.classList.add('remove_overflow');
        tagHtml.classList.add('remove_overflow');
    }

    function closeWindow(event) {
        event.preventDefault();
        background.classList.remove('set_visible');
        popupWindow.classList.remove('set_visible');
        tagBody.classList.remove('remove_overflow');
        tagHtml.classList.remove('remove_overflow');
    }
    
    function removeBorder() {
        this.classList.remove('error');
    }

    document.getElementById('writeme').addEventListener('click', displayWindow);
    document.getElementById('close_window').addEventListener('click', closeWindow);
    background.addEventListener('click', closeWindow);
    document.getElementById('send').addEventListener('click', checkForm);
    for (var i = 0; i < requiredFields.length; i++) {
        requiredFields[i].addEventListener('focus', removeBorder);
    }
}

function checkForm() {
    var hasEmptyFields = false;
    var requiredFields = document.getElementsByClassName('required_field');
    
    for (var i = 0; i < requiredFields.length; i++){
        if (requiredFields[i].value == '') {
            requiredFields[i].classList.add('error');
            hasEmptyFields = true;
        }
    }
    
    if (hasEmptyFields) {
        event.preventDefault();
    }
}