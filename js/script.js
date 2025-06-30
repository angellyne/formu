 function logar (){
    const email = document.getElementById("email").value;
    console.log (email);

      const senha = document.getElementById("senha").value;
    console.log (senha);

    if (senha == "peter" && email == "peter.parker@dailybugle.com"){
        alert ("ola, peter");
    
    } else {
        alert ("senha ou email incorreta, tente novamente");
    }

 }