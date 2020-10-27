var starCountRef = firebase.database().ref(room);
var tesu = 1;

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
        
        // TODO: get before sfen 
        befsfen = list[tesu-1].sfen;

        // TODO: sfen to json
        tmpjson = sfen2json(befsfen);

        // TODO: set kif by json
        move_koma(tmpjson, tesu%2);
    }
});