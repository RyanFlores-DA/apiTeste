function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,true);
    Httpreq.send();
    return Httpreq;         
  }
  console.log(Get("http://localhost:3000/chat/1"));