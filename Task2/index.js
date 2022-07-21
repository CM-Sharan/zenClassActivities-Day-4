let request = new XMLHttpRequest();

request.onreadystatechange = function(){
   if(request.status == 200){
    let response = JSON.parse(this.responseText);
    response.forEach((element) => {
        console.log(element.flag, element.flags)
    });

   }
}

request.open('GET', 'https://restcountries.com/v3.1/all');
request.send();