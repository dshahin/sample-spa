//swap local urls for static resource urls
//mapping is defined in $config.img

$(document).ready(function(){
    $(img).hide(); //hide all images (to prevent showing broken img)
    for(var img in $config.img){
        var src = $config.img[img];
        $(img).each(function(){
            //swap in VF url for src atttribute and show img
            $(this).attr({src: $config.img[img]}).show();
        });
    }
})
