$("#btn").click(function(){
    $.getJSON("http://aws.random.cat/meow")
    .done(function(data){
        $("#cat").attr("src",data.file);
    })
    .fail(function(){
        alert("Request is not pawsible.");
    })
})
