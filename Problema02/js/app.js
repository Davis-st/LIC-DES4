$(document).ready(function() {
    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        navigationPosition: 'right',
        anchors: ['inicio', 'nosotros', 'productos', 'galeria', 'contacto'],
        menu: '#myMenu',
        scrollingSpeed: 800
    });

    $('#frmContacto').on('submit', function(e) {
        e.preventDefault();
        var nom = $('#txtNom').val();
        alert('Gracias por tus comentarios ' + nom + ', mensaje recibido');
        $('#frmContacto')[0].reset();
    });
});