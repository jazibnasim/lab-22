$(function(){

            var random = '';

            $.get('/api/random', function(data){
              random = data;

            
            $("#container").html(random);


            //$("#container").append('<h1 class="title">' + random + '</h1>');
          });


});
