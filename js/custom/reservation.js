  function popUp()
	{
     var popup = document.getElementById("myPopup");
     popup.classList.toggle("show");
	}	
function popRoom(){
  var popupRoom = document.getElementById("popRoom");
  popupRoom.classList.toggle("show");
}

function popupEdit()
  {
    var popupEdit = document.getElementById("upedit");
    popupEdit.classList.toggle("show");
  }

  $(document).ready(function(){
$( ".showing" ).mouseover(function() {
    $( ".edit" ).show();
  
    // $("#edit").hide();
  



$(".showing").mouseout(function() {
  $(".edit").hide();
});
});
});
    $("tr").click(function() {
      var id = ($(this).attr("id"));
      console.log(id);
      var input = $("input[name]:hidden").val(id);
       console.log(input);
    });

     $("td").click(function() {
      var date =($(this).attr("class"));
      console.log(date);
      $( "#datepicker" ).datepicker({dateFormat: 'yy-mm-dd'});
      $("#datepicker").datepicker("setDate", date);
  });
    
      $("td").click(function() {
      var date =($(this).attr("class"));
      console.log(date);
      $( "#datepickerend" ).datepicker({dateFormat: 'yy-mm-dd'});
      $("#datepickerend").datepicker("setDate", date+1);
  });

      $("td").click(function() {
           var td = $(this).attr("class").split(" ");

           var ids=td[td.length-2];
           console.log(ids);
           var href = $("a.delevent").attr("href");
           var newhref = $("a.delevent").attr("href", href + ids);
           console.log(newhref);
         
// $("#delevent").click(function () {
//   var test = $(this).attr('href'+ ids);

// console.log(test);
   
  
// });       
});

// $('td').click(function(){
  
//   if($(this).hasClass("ev")){
//     $(this).removeClass("ev");
//   }else{
//     $(this).addClass("ev");
//   }
// });

$('.arrow').click(function(){ 
  if($('.popuptext').hasClass("show")){
    $('.popuptext').removeClass("show");
  }
});

