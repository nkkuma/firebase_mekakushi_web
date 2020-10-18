function get_sengo(){
    var classVal = $('#input_sengo').children().attr('class'); // classの値を取得
    var classVals = classVal.split(' '); // 取得した値を分割
    var offexist = classVals.includes("off");
    if (offexist) { return "gote"; }
    else { return "sente"; }
}

$("#signin_google").click(function(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // output as log
        console.log(token, user);
        // Sign in Success and enable to click "start game"
        alert("Google認証に成功しました。");
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // output as log
        console.log(errorCode, errorMessage, email, credential);
        // Sign in Failed
        alert("Google認証に失敗しました。");
    });
});

$("#start_random").click(function(){
    // get random id and sengo
    var GameID = Math.random().toString(32).substring(2);
    var sengo = get_sengo();
    // redirect to game.html?gameid={gameid}&sengo={sengo}
    currentpage = location.protocol + '//' + location.host;
    nextpage = currentpage + "/game.html?gameid=" + String(GameID) + "&sengo=" + String(sengo);
    location.href = nextpage;
});

$("#start_friend").click(function(){
    // get gameid and sengo
    var GameID = $("#input_gameid").val();
    var sengo = get_sengo();
    // redirect to game.html?gameid={gameid}&sengo={sengo}
    currentpage = location.protocol + '//' + location.host;
    nextpage = currentpage + "/game.html?gameid=" + String(GameID) + "&sengo=" + String(sengo);
    location.href = nextpage;
});