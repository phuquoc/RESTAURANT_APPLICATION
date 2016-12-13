// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function onMouseOver(row){
  //debugger
 //row.style.backgroundColor = "blue"
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
  });

  loadFoodItem();
});

function loadFoodItem(){
  var table = document.getElementById('jsfooditems');
  table.appendChild(createLoadingElement());

setTimeout(function(){
  $.ajax({
     url: 'http://localhost:3000/food_items.json',
     method: 'get',
     complete: function(result) {
       clearElement('jsfooditems');

       var food_items =
       $.parseJSON(result.responseText);

       //create header
        var container = createContainer('table');
      //for theo jquerry
      food_items.forEach(function(value){

        var element = document.createElement('tr');
        var col = document.createElement('td');
        col.innerText = value.id;
        element.appendChild(col);

        col = document.createElement('td');
        col.innerText = value.name;
        element.appendChild(col);

        container.appendChild(element);
      })

      // for theo kieu cu
      /* for(var i = 0; i < food_items.length; i++){
         var element = document.createElement('li');
         element.innerText = food_items[i].name;
         container.appendChild(element);
       }*/

       document.getElementById('jsfooditems')
        .appendChild(container);
     }
   });
},2000);
}

function createContainer(tagName){
  var container =
  document.createElement(tagName);
  container.className = "table";
  var header=
  document.createElement('tr');

  var col =
  document.createElement('th');
  col.innerText = "#";
  header.appendChild(col);
  col =
  document.createElement('th');
  col.innerText = "name";
  header.appendChild(col);

  container.appendChild(header);
  return container;
}

function clearElement(id){
  var element = document.getElementById(id);
  element.innerText = "";
}

function createLoadingElement(){
  var element = document.createElement('div');
  element.innerText = "Loading...";

  return element;
}
