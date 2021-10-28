$('#next').click(function (){
  
    if($('.on-screen').next().length == 0){
      $('.on-screen').removeClass('on-screen come-in').addClass('out-screen');
      $('.image-container').first('image-container').removeClass('out-screen').addClass('come-in on-screen');
    }
    else
      $('.on-screen').removeClass('on-screen come-in').addClass('out-screen').next('.image-container').addClass('come-in on-screen');
  });
  $('#prev').click(function (){
    
    if($('.on-screen').prev().length == 0){
      $('.on-screen').removeClass('on-screen come-in').addClass('out-screen');
      $('.image-container').last('image-container').removeClass('out-screen').addClass('come-in on-screen');
    }
    else
      $('.on-screen').removeClass('on-screen come-in').addClass('out-screen').prev('.image-container').addClass('come-in on-screen');
  });