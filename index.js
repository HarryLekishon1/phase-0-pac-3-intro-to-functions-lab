function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase())
}
function sayHiToHeadphonedRoommate(string){

    var canAnswer = "I can\'t hear you!";
    var yessir = "YES INDEED!";
    var noAnswer = "I would love to!";
    if(string.toLowerCase(string) === string){
        return canAnswer;
    }
    else if(string.toUpperCase(string) === string){
        return yessir;
    }
    else if("Let's have dinner together!" === string){
        return noAnswer;
    }
}
