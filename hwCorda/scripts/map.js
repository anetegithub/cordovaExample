function mapnew() {
    var map = new Object();

    map.draw = function (tileid,x,y) {
        if (tileid<0 || tileid>3)
            return;
        
        var canvas = document.getElementById("map"),
            content = canvas.getContext('2d'),
            pic = new Image();

        
        switch (parseInt(tileid)) {
            case 0: { pic.src = "../images/Tiles/alienPink.png"; break; }
            case 1: { pic.src = "../images/Tiles/tileDirt.png"; break; }
            case 2: { pic.src = "../images/Tiles/rockDirt_moss3.png"; break; }
            case 3: { pic.src = "../images/Tiles/tileDirt_full.png"; break; }
        }

        pic.onload = function () {    // when image loaded
            //content.strokeText('wtf suka',x,y-5)
            content.drawImage(pic, x, y);
        }        
    };

    return map;
}