$(document).ready(function() {
    $('.processar').click(function() {
        if ($(this).has('class', 'btn-default')) {
            $.ajax({
                url: 'processar.php',
                method: 'POST',
                success: function(retorno) {
                    if (retorno == 1) {
                        $('.processar span').attr('class', 'glyphicon glyphicon-ok');
                    }
                    else {
                        $('.processar span').attr('class', 'glyphicon glyphicon-remove');
                    }
                },
                error: function(erro) {
                    alert('Serviço indisponivel');
                }
            });
        }
    })
})
