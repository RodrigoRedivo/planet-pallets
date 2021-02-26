// Preview de imagem

window.addEventListener('load', function () {

    document.querySelector('input[type="file"]').addEventListener('change', function () {

        if (this.files && this.files[0]) {

            var img = document.getElementById("myImg");

            img.src = URL.createObjectURL(this.files[0]);

            img.onload = imageIsLoaded;
        }
    });
});

function imageIsLoaded(e) {(e); }



// Post com Axios

function contactPost() {

    let cpf = document.querySelector("#cpf");
    let telefone = document.querySelector("#telefone");
    let email = document.querySelector("#email");
    let form  = document.querySelector("#form");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let data = {
            cpf: cpf.value,
            telefone: telefone.value,
            email: email.value
        };
                
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())

        console.log(JSON.stringify(data))
        
        alert(' Você já realizou o formulário de contato aguarde que entraremos em contato!')

        event.preventDefault()
        
    })
}

// Dados Salvos Local Storage

if (localStorage.cpf) {
	document.getElementById('cpf').value = localStorage.cpf;
}
if (localStorage.telefone) {
	document.getElementById('telefone').value = localStorage.telefone;
}
if (localStorage.email) {
	document.getElementById('email').value = localStorage.email;
}

var salvarData = function() {
    var img = document.getElementById('myImg').value;
	var cpf = document.getElementById('cpf').value;
	var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    localStorage.setItem('myImg', img);
	localStorage.setItem('cpf', cpf);
	localStorage.setItem('telefone', telefone);
	localStorage.setItem('email', email);
};

document.onchange = salvarData;
