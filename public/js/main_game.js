// it is needed before this js called.
// import firebase from '@/plugins/firebase'

// get param and set to html
var gameid = getParam("gameid");
$("#div_gameid").text("GameID: "+gameid);
var sengo = getParam("sengo");
var tesu = 1;
if ((sengo == "on") || (sengo == "sente")) {
    // on means sente
    display_mytern(tesu);
}
else if ((sengo == "off") || (sengo == "gote")) {
    // off means gote
    display_enemytern(tesu);
}

// room_id
let room = "blind-shogi-"+gameid;

$("#send").click(function(){
    // check data
    var obj = {ID: "2020-10-04_998323", tesu: tesu, kif: get_selection()};
    var method = "POST";
    var body = JSON.stringify(obj);
    var headers = {'Content-Type': 'application/json'};
    fetch(validation_url, {method, headers, body})
    .then((res)=> {
        if (res.ok) {
            // store data
            var database = firebase.database();
            database.ref(room).push({
                move: tesu,
                kif: get_kif(),
            });
        }
        else {
            // alert miss
            alert("入力が間違えています。チェック値：" + get_kif());
        }
        return res;
    })
    .then(console.log)
    .catch(console.error);
});

$("#giveup").click(function(){
    if (confirm("本当に投了しますか？")) {
        var giveupmove = 0;  
        if ((sengo == "on") || (sengo == "sente")){
            giveupmove = -1;
        }
        if ((sengo == "off") || (sengo == "gote")){
            giveupmove = -2;
        }
        var database = firebase.database();
        database.ref(room).push({
            move: giveupmove,
            kif: "giveup",
        });
    }
    else {
        alert("キャンセルしました。");
    }
});

var starCountRef = firebase.database().ref(room);
starCountRef.on("value", (data)=> {
    if (data) {
        const rootList = data.val();
        const key = data.key;
        let list = [];
        // データオブジェクトを配列に変更する
        if(rootList != null) {
            Object.keys(rootList).forEach((val, key) => {
                rootList[val].id = val;
                list.push(rootList[val]);
            })
        }
        console.log(list);

        // assert the below.
        // len(list) == tesu
        
        // TODO: check giveup or not
        befmove = list[tesu-1].move;
        if (befmove < 0) {
            if ((sengo == "on") || (sengo == "sente")){
                if (befmove == -2){display_win(tesu-1);}
                if (befmove == -1){display_lose(tesu-1);}
            }
            if ((sengo == "off") || (sengo == "gote")){
                if (befmove == -1){display_win(tesu-1);}
                if (befmove == -2){display_lose(tesu-1);}
            }
        }

        else {
            // get before kif
            befkif = list[tesu-1].kif;
            $("#div_before_kif").text("ひとつ前の手："+befkif);
            tesu += 1;
            if ((sengo == "on") || (sengo == "sente")){
                if (tesu%2 == 1){display_mytern(tesu);}
                if (tesu%2 == 0){display_enemytern(tesu);}
            }
            if ((sengo == "off") || (sengo == "gote")){
                if (tesu%2 == 0){display_mytern(tesu);}
                if (tesu%2 == 1){display_enemytern(tesu);}
            }
        }
    }
});

$("#btn_back").click(function(){    
    location.href = location.protocol + '//' + location.host + "/index.html";
});