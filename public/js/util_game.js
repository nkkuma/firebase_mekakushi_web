// variable
const validation_url = "https://us-central1-shogiban2kif.cloudfunctions.net/validate_kif"

// function

function get_selection(){
    var place_1 = $("#place_1").val();
    var place_2 = $("#place_2").val();
    var koma    = $("#koma").val();
    var ichi    = $("#ichi").val();
    var move    = $("#move").val();
    var nari    = $("#nari").val();

    return {
        "place": parseInt(place_1)*10 + parseInt(place_2),
        "koma" : String(koma),
        "ichi" : String(ichi),
        "move" : String(move),
        "nari" : String(nari)
    }
}

function get_kif(){
    let dict_koma = {"fu":"歩","ky":"香","ke":"桂","gi":"銀","ki":"金","ka":"角","hi":"飛","ou":"王","to":"と","ny":"杏","nk":"圭","ng":"全","um":"馬","ry":"龍"}
    let dict_ichi = {"":"","r":"右","l":"左"}
    let dict_move = {"":"","u":"上","y":"寄","h":"引"}
    let dict_nari = {"":"","n":"成","f":"不成","p":"打"}

    var selection = get_selection();

    var kif = String(selection.place) + dict_koma[selection.koma] + dict_ichi[selection.ichi] + dict_move[selection.move] + dict_nari[selection.nari];
    return kif;
}
