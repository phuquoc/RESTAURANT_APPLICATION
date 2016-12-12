// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function onMouseOver(row){
  //debugger
 row.style.backgroundColor = "blue"
  row.className = 'hover-row';
}

function outMouseOut(row){
  row.className = "";
}

$(document).ready(function(){
  $("table > tbody > tr").hover(function(){
    $(this).addClass('hover-row')
  }, function(){
      $(this).removeClass('hover-row')
  })
});
