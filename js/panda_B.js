var storageKey = null;
var nbDroneSelected = 0;

function processSelect( index, name, iddiv)
{
document.getElementById('div3').innerHTML = "start arrayDrones[ " + index + " ] : " + arrayDrones[index] ;
  if( arrayDrones[index] == 1 )
  {
    arrayDrones[index] = 0;
    PandaBridge.send(name);

    document.getElementById(iddiv).innerHTML = "Unselect " + name;
    nbDroneSelected--;
  }
  else if( nbDroneSelected < 2 )
  {
    arrayDrones[index]=1;
    PandaBridge.send(name);
    document.getElementById(iddiv).innerHTML = "selection  : " + name + "  " + arrayDrones[index];
    nbDroneSelected++;
  }
  else
  {
    document.getElementById(iddiv).innerHTML = "cannot select " + name ;
  }
  document.getElementById('div3b').innerHTML = "end arrayDrones[ " + index + " ] : " + arrayDrones[index] ;
document.getElementById('div2').innerHTML = "end process, nbDroneSelected  : " + nbDroneSelected;
}

  function postReq(url, name) {
           var req = new XMLHttpRequest();
           req.open("POST", url, false);
           req.send(null);
           console.log(req.responseText);
           document.getElementById('div2').innerHTML = "request sent";
           PandaBridge.send(name);
}

PandaBridge.init(function() {
  PandaBridge.onLoad(function(pandaData) {

           });
  PandaBridge.listen('Post', function(event) {
    document.getElementById('div1').innerHTML = "loading";
    postReq('http://192.168.43.59:8000/login', 'PostRequest');

  });
});
