var wishArr = [];
var wishObj = {};

$(document).on('ready' , function(){


	var productSource = $('#product').html();
	var template = Handlebars.compile(productSource);

	for(var i=0 ; i<productsData.productsList.length ; i++){
		$('body').prepend(template(productsData.productsList[i]))
	}



$(document).on('click', '.wish', function(){
  var wishTitle = ($(this).closest('.product').find('.title').text());
  wishArr.push(wishTitle);
  console.log(wishArr);
  wishObj.titles = wishArr;

  var a = newTemp({titles:wishArr});
  $('#wishlistContainer').empty().prepend(a);
 	
 });

$(document).on('click' , '.removeButton' , function(){
	var length = wishArr.length;
	wishArr.splice(length-1 , 1);
	console.log(wishArr);
	b = newTemp({titles:wishArr})
	$('#wishlistContainer').empty().prepend(b)
});



var wishList = $('#wishlist').html();
var newTemp = Handlebars.compile(wishList);



})