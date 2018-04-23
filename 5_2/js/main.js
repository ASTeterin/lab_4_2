window.onload = function() {
    showFilmBlock();
    showPopupWindow();
}

function showFilmBlock(){
    var filmButton = document.getElementById('all_films_button');

    function displayFilmBlock(event) {
        event.preventDefault();
        var elem = document.getElementById('hidden_block');
        filmButton.style.display = 'none';
        elem.classList.add('visible_advanced_film');
    }
    
    filmButton.addEventListener('click', displayFilmBlock);
}

function showPopupWindow(){
    var popupWindow = document.getElementsByClassName('popup')[0];
    var background = document.getElementsByClassName('background')[0];
    
    function displayWindow(event){
        event.preventDefault();
        background.classList.add('set_visible');
        popupWindow.classList.add('set_visible');
    }

    function closeWindow(event){
        event.preventDefault();
        background.classList.remove('set_visible');
        popupWindow.classList.remove('set_visible');
    }

    document.getElementById('close_window').addEventListener('click', closeWindow);
    document.getElementsByClassName('write_me')[0].addEventListener('click', displayWindow);
    background.addEventListener('click', closeWindow);

    function checkForm() {
        var i;
        var required_fild = document.getElementsByClassName('required_field');
        
        event.preventDefault();
        
        function setBorder(inputArea){
            inputArea.classList.add('error');
        }
        
        function removeBorder(){
            this.classList.remove('error');
        }

        for (i = 0; i < required_fild.length; i++){
            if (required_fild[i].value == '')
                setBorder(required_fild[i])
        }
        
        for (i = 0; i < required_fild.length; i++){
            required_fild[i].addEventListener('focus', removeBorder);
        }
        
    }
    document.getElementById('send').addEventListener('click', checkForm);
}

