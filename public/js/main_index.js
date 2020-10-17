$("#start_random").click(function(){
    // get random id and sengo
    var GameID = Math.random().toString(32).substring(2);
    var sengo = $("#input_sengo").val();
    // redirect to game.html?gameid={gameid}&sengo={sengo}
    currentpage = location.protocol + '//' + location.host;
    nextpage = currentpage + "/game.html?gameid=" + String(GameID) + "&sengo=" + String(sengo);
    location.href = nextpage;
});

$("#start_friend").click(function(){
    // get gameid and sengo
    var GameID = $("#input_gameid").val();
    var sengo = $("#input_sengo").val();
    // redirect to game.html?gameid={gameid}&sengo={sengo}
    currentpage = location.protocol + '//' + location.host;
    nextpage = currentpage + "/game.html?gameid=" + String(GameID) + "&sengo=" + String(sengo);
    location.href = nextpage;
});