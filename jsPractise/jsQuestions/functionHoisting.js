// function hoisting
// if we call the function before initialising the function it will work same as called after initialing

var x = 21;

var func = function() {
    console.log(x);
    var x = 20;
}

func();
