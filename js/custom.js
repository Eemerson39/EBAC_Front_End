

$(document).ready(function () {

    // RESPONSIVO DO OWL CAROUSEL
    $('.owl-carousel').owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            375: {
                items: 2
            },
            425: {
                items: 2
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    })



    // DEFININDO 'NOVO, PREVENDA E ANUNCIADO' USANDO CLASSES
    $('.novo h4').append(' <span class="badge bg-dark">Novo</span>')
    $('.prev h4').append(' <span class="badge bg-primary">Pré-venda</span>')
    $('.anun h4').append(' <span class="badge bg-secondary">Anunciado</span>')



    function validate(elem) {
        if(elem.val() == ''){
            elem.parent().find('.text-muted').show()
            elem.addClass('invalid')
            return false
        } else {
            elem.parent().find('.text-muted').hide()
            elem.removeClass('invalid')
        }
    }

    $('body').on('submit', '.modal-body .form', function(e){
        e.preventDefault()

        const inputName = $('#nome')
        const inputEmail = $('#email')
        const inputCel = $('#cel')
        const inputEndereco = $('#endereco')
        const inputNumero = $('#numero')
        const inputBairro = $('#bairro')
        const inputCidade = $('#cidade')
        const inputEstado = $('#estado')
        const inputCep = $('#cep')

        validate(inputName)
        validate(inputEmail)
        validate(inputCel)
        validate(inputEndereco)
        validate(inputNumero)
        validate(inputBairro)
        validate(inputCidade)
        validate(inputEstado)
        validate(inputCep)

        if(inputName.hasClass('invalid') ||
            inputEmail.hasClass('invalid') ||
            inputCel.hasClass('invalid') ||
            inputEndereco.hasClass('invalid') ||
            inputNumero.hasClass('invalid') ||
            inputBairro.hasClass('invalid') ||
            inputCidade.hasClass('invalid') ||
            inputEstado.hasClass('invalid') ||
            inputCep.hasClass('invalid')) 
            {
            return false
        } else {
            $(this).submit()
            return true
        }


    })

    $('body').on('blur', '#nome', function(){
        validate($(this))
    })
    
    $('body').on('blur', '#email', function(){
        validate($(this))
    })

    $('body').on('focus', '#cel', function(){
        validate($(this))
        $(this).mask('(00)00000-0000')
    })

    $('body').on('blur', '#endereco', function(){
        validate($(this))
    })

    $('body').on('blur', '#numero', function(){
        validate($(this))
    })

    $('body').on('blur', '#bairro', function(){
        validate($(this))
    })

    $('body').on('blur', '#cidade', function(){
        validate($(this))
    })

    $('body').on('blur', '#estado', function(){
        validate($(this))
    })

    $('body').on('focus', '#cep', function(){
        validate($(this))
        $(this).mask('000.000.000-00')
    })
})