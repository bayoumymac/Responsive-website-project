document.onload(function(){
    var iframe = document.getElementById('google-form1');
    var content = iframe.contentDocument || iframe.contentWindow.document;
    content.body.style.backgroundColor = "black";
})
