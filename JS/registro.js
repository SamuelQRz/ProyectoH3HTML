function sendEmail() {
    // Verifica que los campos no estén vacíos
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    if (!name || !phone || !email) {
        alert("Por favor, completa todos los campos.");
        return;
    }
    else
    {

        emailjs.send("service_761u5gp", "template_tflr7hz", {
            name: document.getElementById("nombre").value,
            email: document.getElementById("correo").value,
            phone: document.getElementById("telefono").value
        }, "cx0VRgahABYcYmDV-") // Reemplaza "YOUR_PUBLIC_KEY" con tu llave pública
        .then(function(response) {
            console.log("Correo enviado con éxito", response.status, response.text);
        }, function(error) {
            console.log("Error al enviar el correo", error);
        });
    }

    // Parámetros para enviar el correo
    const emailParams = {
        name: name,
        phone: phone,
        email: email,
    };

 
    
}
