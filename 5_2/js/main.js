window.onload = function() {
    showFilmBlock();
    showPopupWindow();
}


function showFilmBlock(){
    var filmButton = document.getElementById('all_films_button');

    function displayFilmBlock() {
        var elem = document.getElementById('hidden_block');
        filmButton.style.display = 'none';
        elem.classList.add('visible_advanced_film');
        event.preventDefault();
    }
    
    filmButton.addEventListener('click', displayFilmBlock);
}

function showPopupWindow(){
    var popupWindow = document.getElementsByClassName('popup')[0];
    var background = document.getElementsByClassName('background')[0];
    function displayWindow(){
        event.preventDefault();
        //document.getElementsByTagName('body')[0].classList.add('background');
        document.getElementsByClassName('background')[0].style.display = 'block';
        popupWindow.style.display = 'block';
    }

    function closeWindow(){
        event.preventDefault();
        background.style.display = 'none';
        popupWindow.style.display = 'none';
    }

    document.getElementById('close_window').addEventListener('click', closeWindow);
    document.getElementsByClassName('write_me')[0].addEventListener('click', displayWindow);
    background.addEventListener('click', closeWindow);

    function checkForm() {
        var name = document.getElementById('name');
        var email = document.getElementById('user_email');
        var text = document.getElementById('text_area');
    
        function setBorder(perem){
            perem.style.border = '2px solid rgb(255, 0, 0)';
        }
        
        function removeBorder(){
            this.style.border = '';
        }
    
        event.preventDefault();
        if (document.getElementById('name').value == ''){
            setBorder(name);
        }
        if (email.value == ''){
            setBorder(email);
        }
        if (text_area.value == ''){
            setBorder(text_area);
        }
        name.addEventListener('focus', removeBorder);
        email.addEventListener('focus', removeBorder);
        text.addEventListener('focus', removeBorder);
    
    }
    document.getElementById('send').addEventListener('click', checkForm);
}

    
   



//document.getElementsByName('message')[0].addEventListener('focus', removeBorder);