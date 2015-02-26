(function($) {
    $(document).ready(function () {

        //print random jokes in the aside in the home page
        var myArray = [];

        myArray.push("PeshoPeshoPeshoPeshoPesho<br/><br/>PeshoPeshoPeshoPeshoPeshoPeshoPeshoPeshoPeshoPeshoPeshoPeshoPeshoPeshoPesho");
        myArray.push("GoshoGoshooshoGoshoGoshoGoshoGoshoGoshoGoshoGoshoGoshoGoshoGoshoGoshoGoshoGoshoGoshoGoshoGoshoGoshoGosho");
        myArray.push("ToshoToshoToshoToshoToshoToshoToshoToshoToshoToshoToshoToshoToshoToshoToshoToshoToshoToshoToshoToshoToshoTosho")
        myArray.push("BatkaBatkaBatkaBatkaBatkaBatkaBatkaBatkaBatkaBatkaBatkaBatkaBatkaBatkaBatkaBatkaBatkaBatkaBatkaBatkaBatkaBatka")
        myArray.push("ShmatkaShmatkaShmatkaShmatkaShmatkaShmatkaShmatkaShmatkaShmatkaShmatkaShmatkaShmatkaShmatkaShmatkaShmatkaShmatka")
        myArray.push("Това е тест ..Това е тест ..Това е тест ..Това е тест ..Това е тест ..Това е тест ..Това е тест ..Това е тест ..Това е тест ..")

        //generate random numbers in the range 0-5
        var randNum1 = Math.floor(Math.random() * 6);
        do {
            var temp = Math.floor(Math.random() * 6);
            var randNum2 = temp;
        } while(temp == randNum1)
        //console.log(randNum1);
        //console.log(randNum2);
        $("#joke-1").html(myArray[randNum1]);
        $("#joke-2").html(myArray[randNum2]);

    });

})(jQuery);
