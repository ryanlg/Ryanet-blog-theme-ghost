window.onload = function(){
  $("#sidemenu-profile-image").mouseenter(function(){$('#sidemenu-container').show(200);});
  $("#sidemenu-container").mouseleave(function(){$('#sidemenu-container').fadeOut(200);});

  var imgs = $('img');
  $.each(imgs, function(i, value){
    var v = $(value);
    if(v.parent().parent().attr('class') == 'post-content'){
      v.parent().css("text-align", "center");
    }
  })
}
