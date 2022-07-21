let request = new XMLHttpRequest();

request.onreadystatechange = function(){
   if(request.status == 200){
    let response = JSON.parse(this.responseText);
    response.forEach((element) => {
        console.log(element.name.common, element.population, element.region, element.subregion)
    });

   }
}

request.open('GET', 'https://restcountries.com/v3.1/all');
request.send();