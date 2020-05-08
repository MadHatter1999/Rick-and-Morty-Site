// $('#menu').append('<button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>');
//API Stuff
/*
https://rickandmortyapi.com/api/character/
https://rickandmortyapi.com/api/location/
https://rickandmortyapi.com/api/episode/

programmer: Anthony Healy
2020-04-22
*/

function loadMenu(amt){
    for(var i=1; amt>=i;i++){
        $.getJSON("https://rickandmortyapi.com/api/character/?page="+i,function(data){
            let res=data.results;
            $.each(res,function(key,val){
                $('#menu').append('<button type="button" id="'+val.id+'" class="list-group-item list-group-item-action">'+'<img class="icon mr-2" src="'+val.image+'" alt="oops" />'+
                val.name+'</button>');
            });
         });
    }
}
//this handles the loadinf
$(document).ready(function(){
    loadMenu(40-15);
});


//This handles the click
$(document).on('click','.list-group-item.list-group-item-action',function(data){



    let id=parseInt(data.target.id);
    var Info=$('#Info');
    var Epi=$('#Epi');
    //this loads the image and info
    $.getJSON('https://rickandmortyapi.com/api/character/'+id,function(data){


        var Image=$('#porfileImage');
        Image.empty().append("");
        Image.append('<img class="mt-3 ml-3" height=300 width=300 src="'+data.image+'" alt="opps"></img>');

        Info.empty().append("");
        Info.append('<h2>Info</h2>'+'<p><b>Name:</b> '+data.name+'</p>'
        +'<p><b>Status:</b> '+data.status+'</p>'
        +'<p><b>Species:</b> '+data.species+'</p>'
        +'<p><b>Origin: </b>'+data.origin.name+'</p>'
        +'<b>Latest Location:</b> '
        +'<p>'+data.location.name+'</p>');

        Epi.empty().append("");
        Epi.append('<h1>Episodes</h1>');
        $.each(data.episode,function(key,val){
            $.getJSON(val,function(data){
                Epi.append('<p>'+data.name+'</p>');
            });
        })
        


    });
});

//spinner
var $loading = $('#spinner').hide();
$(document)
  .ajaxStart(function () {

    $loading.show();
  })
  .ajaxStop(function () {
    $loading.hide();
  });

  d3.selectAll("body").append('footer').text("created by Anthony Healy");
  d3.select(".container")
  .transition()
  .duration(2000)
  .style("background-color", "white");