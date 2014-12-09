//swap local urls for static resource urls
//mapping is defined in $config.img

$(document).ready(function(){
    $('img').hide(); //hide all images (to prevent showing broken img)
    var static_base = $config.img['_base'],
        parts = static_base.split(/\//),
        base_img_url = '/' + parts[1] + '/' + parts[2] + '/' + parts[3] + '/';
    console.log(static_base, base_img_url);

    $('img').each(function(){
        //swap in VF url for src atttribute and show img
        var $img = $(this),
            src = $img.attr('src'),
            url = base_img_url + src;
        console.log(url);
        $img.attr({src: url}).show();
    });

})
