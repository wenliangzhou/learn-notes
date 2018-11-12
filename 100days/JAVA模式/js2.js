kk = 2;
(function () {
    
    var a ={
        b:function () {
            console.log(this);
        }
    }
    var c = a.b();
    
}());