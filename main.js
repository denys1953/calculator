window.onload = function(){
   var calc = [
       'c', '√', 'del', '+',
       '7', '8', '9', '-',
       '4', '5', '6', '/',
       '1', '2', '3', '*',
            '0', '.',    '='
   ];
   var last
   var numbers = '1234567890√+-*/.';
   var input = document.getElementById('calc');

   var text = document.getElementById('inputVal');

   calc.forEach( function(elem) {
       var inputV = document.createElement('div');
       inputV.className = 'btn';
       inputV.innerHTML = elem;
       input.appendChild(inputV); 
   });

   document.querySelectorAll('#calc-wrap .btn').forEach( function(but) {
       but.addEventListener('click', onClickCalc);
   });
   document.addEventListener('keydown', keyboard);

   function onClickCalc(e){
       if(e.target.innerHTML === 'c'){
           text.innerHTML = '';
           navigator.vibrate(50);
       } else if(e.target.innerHTML === '='){
           text.innerHTML = eval(text.innerHTML);
           navigator.vibrate(50);
       } else if(e.target.innerHTML === 'del') {
            last = text.innerHTML.toString()
            text.innerHTML = last.slice(0, -1)
       } else if(text.innerHTML === '' || text.innerHTML === '0'){
           text.innerHTML = e.target.innerHTML;
           navigator.vibrate(50);
           if(e.target.innerHTML == "√" || e.target.innerHTML == "+" || e.target.innerHTML == "-" || e.target.innerHTML == "." || e.target.innerHTML == "/" || e.target.innerHTML == "*"){
               text.innerHTML = '';
               navigator.vibrate(50);
           }
       } else if(e.target.innerHTML === "√"){
           text.innerHTML = Math.sqrt(text.innerHTML);
           navigator.vibrate(50);
       } else if(text.innerHTML === "undefined") {
           text.innerHTML = e.target.innerHTML
       } else{
           text.innerHTML += e.target.innerHTML;
           navigator.vibrate(50);
       }
   }
   function keyboard(e) {
      for (let i = 0; i < numbers.length; i++) {
         if (e.key == numbers[i]) {
            text.innerHTML += e.key
         }
      }
      if (e.key == 'Enter') {
         text.innerHTML = eval(text.innerHTML);
      } else if(e.key == 'Backspace') {
         last = text.innerHTML.toString()
         text.innerHTML = last.slice(0, -1)
      }
      console.log(e.key);
   }
}