window.onload = function() {
    showFilmBlock();
    showPopupWindow();
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


/* 

1. advansedFilm - опечатка
2. При открытии модалльного окна нужно блокировать прокрутку сайта (overflow hidden для body и html)
3. Форма не отправляется.
4. Вместо того, чтобы брать первый элемент коллекции, полученной по классу - лучше брать элемент по ID.

*/
