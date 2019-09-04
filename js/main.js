			var lis = document.querySelectorAll('ul li');
			var minus = document.querySelectorAll('.minus');
			var txt = document.querySelectorAll('.txt');
			var plus = document.querySelectorAll('.plus');
			var price = document.querySelectorAll('.price');
			var subTotal = document.querySelectorAll('.subTotal');
			var totalNum = document.querySelector('#totalNum');
			var totalPrice = document.querySelector('#totalPrice');
			var maxmium = document.querySelector('#maxmium');
			for(var i = 0; i < lis.length; i++){
				todo(i);
				totalNum.innerHTML = +txt[i].innerHTML
			}
			
			function todo(index){
				plus[index].onclick = function(){
					change(index, +1);
				}
				
				minus[index].onclick = function(){
					change(index, -1);
				}
			}
			
			function change(index, change){
				var num = +txt[index].innerHTML + change;
				if(num < 0){
					num = 0;
				}
				txt[index].innerHTML = num;
				subTotal[index].innerHTML = num * (+price[index].innerHTML * 10) / 10;		
				total();
			}
			
				
			function total(){
				var numTotal = 0;
				var priceTotal = 0;
				var max = 0;
				for(var i = 0; i < lis.length; i++){
					numTotal = numTotal+(+txt[i].innerHTML);
					priceTotal = priceTotal + (+subTotal[i].innerHTML);
					if(+txt[i].innerHTML > 0 && +price[i].innerHTML > max){
						max = price[i].innerHTML;
					}
				}
				totalNum.innerHTML = numTotal;
				totalPrice.innerHTML = priceTotal;
				maxmium.innerHTML = max;
			}