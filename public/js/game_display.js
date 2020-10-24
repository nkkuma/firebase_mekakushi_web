
function display_mytern(teban){
    $("#wait_enemy").hide();
    $("#select_kif").show();
    $("#div_teban").text("あなたの手番です("+ String(teban) +"手目)");
}

function display_enemytern(teban){
    $("#wait_enemy").show();
    $("#select_kif").hide();
    $("#div_teban").text("相手の手番です("+ String(teban) +"手目)");
}

function display_aftergame_hideall(){
    $("#div_teban").hide();
    $("#div_before_kif").hide();
    $("#wait_enemy").hide();
    $("#select_kif").hide();
    $("#send").hide();
    $("#giveup").hide();
}

function display_win(tesu){
    display_aftergame_hideall();
    $("#div_result").text(String(tesu)+"手であなたの勝ちです。");
    $("#div_after_game").show();
}

function display_lose(tesu){
    display_aftergame_hideall();
    $("#div_result").text(String(tesu)+"手であなたの負けです。");    
    $("#div_after_game").show();
}