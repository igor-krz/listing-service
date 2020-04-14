$(document).ready(() => {
    $("#formId").submit(function(event){
        $.post('/route', $("#formId").serialize(), function(data){
          console.log(data);
          $( "#result" ).empty().append( data );
        });
        event.preventDefault();
    });

   
});
