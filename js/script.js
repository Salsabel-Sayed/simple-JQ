// navbar slide
$('.navs').hide();
$('#open').on("click", function(){
    $('.navs').animate({width:'toggle', paddingInline:"toggle"},1000);
})
$('.iconX').on("click", function(){
  $('.navs').animate({width:'toggle', paddingInline:"toggle"},1000);
})

// duration

$(".sing").on("click",function(e){
  $(".sing").not(e.target).siblings().slideUp();
    $(e.target).siblings().slideToggle();
})

// count down

var targetDate = localStorage.getItem('targetDate');
if (!targetDate) {
  targetDate = new Date().getTime() + 10 * 24 * 60 * 60 * 1000;
  localStorage.setItem('targetDate', targetDate);
}

$('#days').countdown(targetDate, function(event) {
    $(this).text(
      event.strftime('%D')
    );
  });

  $('#hours').countdown(targetDate, function(event) {
    $(this).text(
      event.strftime('%H')
    );
  });

  $('#minutes').countdown(targetDate, function(event) {
    $(this).text(
      event.strftime('%M')
    );
  });

  $('#seconds').countdown(targetDate, function(event) {
    $(this).text(
      event.strftime('%S')
    );
  });

// letters

let num = 100; 
let countNum = $('#count');
countNum.html(`<p><span>${num}</span> characters remaining</p>`);

$('#textarea').keyup(function () { 
    let currentLength = $(this).val().length;
    let newMaxLength = num - currentLength;
    
    if (newMaxLength >= 0) {
        let counting = `<p><span>${newMaxLength}</span> characters remaining</p>`;
        countNum.html(counting);
    } else {
        countNum.html(`<p>stop write</p>`);
        $(this).val($(this).val().substring(0, num)); 
    }
});



