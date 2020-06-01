$(document).ready(function(){

$.ajax({
  url: 'getData.php',
  method: 'GET',
  success: function(data){
    console.log(data);
    var source = document.getElementById("paganti-template").innerHTML;
    var template = Handlebars.compile(source);
    for (var pagante of data) {
      var context = {
        name : pagante.name,
        lastname: pagante.lastname,
        address: pagante.address,
        id: pagante.id
       }
      var html = template(context);

      $('.hotel').append(html)
    }

  },
    error: function(err){


    }
  });

  // fine chiamata

  // evento su cestino

  $('.hotel').on('click','.bid',removeData)



  function removeData() {
    $(this).parent().remove();

    var id = $(this).parent().data('identify');
    $.ajax({
      url: 'removeData.php',
      method: 'GET',
      data:{
        id: id
      },
      success: function(){



      },
        error: function(err){


        }
    })

};



});
