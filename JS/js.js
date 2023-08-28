var input = document.getElementById('cidade');
    var label = document.getElementById('label2');
    
    input.addEventListener('focus', function() {
        label.classList.add('subir');
    });
    
    input.addEventListener('blur', function() {
        if (input.value === '') {
            label.classList.remove('subir');
        }
    });