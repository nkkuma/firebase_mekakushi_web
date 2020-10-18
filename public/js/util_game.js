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

function get_kif(){
    let dict_koma = {"fu":"歩","ky":"香","ke":"桂","gi":"銀","ki":"金","ka":"角","hi":"飛","ou":"王","to":"と","ny":"杏","nk":"圭","ng":"全","um":"馬","ry":"龍"}
    let dict_ichi = {"":"","r":"右","l":"左"}
    let dict_move = {"":"","u":"上","y":"寄","h":"引"}
    let dict_nari = {"":"","n":"成","f":"不成","p":"打"}

    var place_1 = $("#place_1").val();
    var place_2 = $("#place_2").val();
    var koma    = $("#koma").val();
    var ichi    = $("#ichi").val();
    var move    = $("#move").val();
    var nari    = $("#nari").val();

    var kif = String(place_1) + String(place_2) + dict_koma[koma] + dict_ichi[ichi] + dict_move[move] + dict_nari[nari];
    return kif;
}