$(document).ready(function(){
    for(var img in $config.img){
        var src = $config.img[img];
        $(img).each(function(){
            $(this).attr({src: $config.img[img]});
        });
    }
})
