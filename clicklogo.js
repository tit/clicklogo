(function () {
  var logo;
  if(location.protocol + '//' + location.host + '/' != location.href){
    logo = document.getElementById('logo');
  logo.setAttribute('onClick', 'document.location = \'' + location.protocol + '//' + location.host + '/\'');
  }
}());
