$(function(){
	console.log("WTF");
	$('#translate').on('submit', function(event){
		event.preventDefault();
		$.ajax({
			method: 'POST',
			url   : '/get-translation',
			data  : $('#translate').serialize(),
			success: function(serverData){
				// serverData.data.forEach(function(obj){
				// 	$('.translation').append('<h2>' + obj.translation + '</h2>')
				// })

				console.log(serverData);
			}
		})
	})

})