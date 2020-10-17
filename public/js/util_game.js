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
    let dict_koma = {}
    let dict_ichi = {"":"","r":"右","l":"左"}
    let dict_move = {"":"","u":"上","y":"寄","h":"引"}
    let dict_nari = {"":"","n":"成","f":"不成","p":"打"}

    var place_1 = $("#place_1").val();
    var place_2 = $("#place_2").val();
    var koma    = $("#koma").val();
    var ichi    = $("#ichi").val();
    var move    = $("#move").val();
    var nari    = $("#nari").val();

}