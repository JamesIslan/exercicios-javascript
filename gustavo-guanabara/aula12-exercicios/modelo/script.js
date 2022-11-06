let data = new Date()
hora_sistema = data.getHours()
div_horario = window.document.querySelector('div#horario')
div_horario.innerHTML = `São exatamente ${hora_sistema} horas`