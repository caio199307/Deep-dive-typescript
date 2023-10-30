function request(nome, email, telefone, i) {
    var settings = {
        "Content-Type": "application/json",
    "headers": {
        'Token':'78e9b16a84eacd7e577c4a6b83b9a65e9752df6e'
    },
    "url": "https://gamaro.cvcrm.com.br/api/cvio/lead",
    "method": "POST",
    "data": {
        "email": email,
        "telefone": telefone,
        "nome": nome,
        "midia": midia,
        "idcorretor": 134,
        "idempreendimento": 7,
        "idpdv": 6,
    }
};
if($(`#nome${i}`).val().length > 0 && $(`#email${i}`).val().length > 0 && $(`#phone${i}`).val().length > 9) {
    $.ajax(settings).done(function (response){});
} else {
    return
}
}


function request(nome, email, telefone, i) {
	var myHeaders = new Headers();
  myHeaders.append("Token", "e29101afcc156e2940a6b436341b304874fe0ecf");
  myHeaders.append("origemcv", "true");
  myHeaders.append("Content-Type", "application/json");
	var data = JSON.stringify({
    "email": email,
    "telefone": telefone,
    "nome": nome,
    "midia": midia,
    "idempreendimento": 7,
    "idpdv": 6,
    "idcorretor": 134,
	});
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow'
  };
  if($(`#nome${i}`).val().length > 0 && $(`#email${i}`).val().length > 0 && $(`#phone${i}`).val().length > 9) {
    fetch("https://gamaro.cvcrm.com.br/api/cvio/lead", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
} else {
  	return
}
}