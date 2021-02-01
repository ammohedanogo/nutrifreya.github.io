$(document).ready(function(){

    //selector de tema
        var tema = $("#tema");

        $("#verde").click(function(){
            tema.attr("href", "css/verde.css");
        });
        
        $("#rojo").click(function(){
            tema.attr("href", "css/rojo.css");
        });
        
        $("#azul").click(function(){
            tema.attr("href", "css/azul.css");
        });


    //Scroll animado    

        $("#irarriba").on("click", function(event){

    //Camcelamos el comportamiento normal del evento        

        event.preventDefault();

        $('html, body').animate( { scrollTop : 0 }, 800 );

    });
    
    setInterval(function(){

       	
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    $("#hora").html(time);

    },1000);

 });