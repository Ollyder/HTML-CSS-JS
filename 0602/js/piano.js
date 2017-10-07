window.onload = function(){

    var mydivs = document.getElementsByTagName("div");
    var myaudios = document.getElementsByTagName("audio");
    for(var i = 0 ; i <13; i++){
        mydivs[i].index = i;
        mydivs[i].onclick = function(){ 
            myaudios[this.index].load(); 
            myaudios[this.index].play();
        }
    }
}
