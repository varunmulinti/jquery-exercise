function knowMyId(){

          $('#para1').css("color","red");

        }

        function knowMyClass(){
           $(".class1").css("color","red");

  }


           function knowbytagName(){
           var ele = $("p[2]").css("background-color","red");
           ele.style.color="red";
         }

        function changeMycolor(){

        $("#block1").css("background-color","blue");

        }

        function fontsizea(){

        $("#block2").css("font-size","0.1em");
        }

         function mouseover(){

         $("#block3").css("color","green");
        }

          function mouseout(){

           $("#block3").css("color","black");
        }

        function hideme(){

           $("#block4").hide();
        }
        function boxcolor1(){
          $(".box1").css("background-color","green");
        }

        function boxcolor2(){

          $(".box1").css("background-color","green");

        }
          function boxcolor3(){

          $(".box1").css("background-color","green");
        }
        function boxcolor11(){
          $(".box2").css("background-color","blue");
        }

        function boxcolor12(){

        $(".box2").css("background-color","blue");

        }
          function boxcolor13(){

          $(".box2").css("background-color","blue");
        }

        function numbersOnly(e) {

          var charCode = e.which || e.keycode;
          if (charCode < 48 || charCode > 57) {
            return false;
          }
          return true;
        }
        function addpara() {
  var elem = $("#para2");
  elem.append("<p>I got generated on the fly...</p>");
}
function removePara() {
  var elem = $("#para4");
  elem.remove();
}
function myMove() {
  var elem = $("#box5");
  // var color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  // elem.css("background-color",color);
   elem.fadeOut().fadeIn(3000);

}
function myFunction() {
  var capital= $("#fname");
  capital.val($('#fname').val().toUpperCase());

}

function chageon() {
  var capital = $("#fname1");
  capital.val($("#fname1").val().toUpperCase());
}

function preferedBrowser() {
  var browser = ($("#browsers").val());
  alert("you have selected " + browser);
  console.log(browser);
}


function color() {
  $("#focus").css("background-color","yellow");
}

function inputxt() {
var ele = $("#demo");
// console.log($("#demo"))
ele.append("<p>You selected some text</p>");
}

function confirmInput() {
  var fname = $("forms[1]");
  alert("Hello! "+ fname +" You will now be redirected to www.codeastra.com");
}



function message() {
  alert("The form was reset");
}

function keydown() {
  alert("You pressed a key inside the input field");
}
function keypress() {
  alert("You pressed a key inside the input field");
}
function keyup() {
  var capital = $("#fname2");
  capital.val($("#fname1").val().toUpperCase());
}
function writeMessage() {
  $("input[name='mySecondInput']").val($("input[name='myInput']").val());
}
