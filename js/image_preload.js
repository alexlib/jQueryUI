    //create image to preload:
    var imgPreload = new Image();
    $(imgPreload).attr({
        src: photoUrl
    });

    //check if the image is already loaded (cached):
    if (imgPreload.complete || imgPreload.readyState === 4) {

        //image loaded:
        //your code here to insert image into page

    } else {
        //go fetch the image:
        $(imgPreload).load(function (response, status, xhr) {
            if (status == 'error') {

                //image could not be loaded:

            } else {

                //image loaded:
                //your code here to insert image into page

            }
        });
    }
