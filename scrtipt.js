function lyrics(){
    var lyrics = "";
    for(i=99;i>=0;i--){
        if(i>=3){
            lyrics += i + " bottles of beer on the wall, " + i +  " bottles of beer,\n";
            lyrics += "Take one down and pass it around, " +(i-1)+ " bottles of beer on the wall,\n";
        }
        else if(i<3 && i>1){
            lyrics += i + " bottles of beer on the wall, " + i +  "bottles of beer,\n";
            lyrics += "Take one down and pass it around, " +(i-1)+ " bottle of beer on the wall,\n";
        }
        else if(i<2&&i>0){
            lyrics += i + "bottle of beer on the wall, ${i}bottle of beer,\n";
            lyrics += "Take one down and pass it around, no more bottles of beer on the wall,\n";
        }
        else{
            lyrics += "No more bottles of beer on the wall, no more bottles of beer,\n";
            lyrics += "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
        }
    }
    document.getElementById('main').innerText = lyrics;
}