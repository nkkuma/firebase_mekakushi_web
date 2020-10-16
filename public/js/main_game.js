// import firebase from '@/plugins/firebase'

$("#send").click(function(){
    // check data

    // store data
    var database = firebase.database();
    let room = "blind-shogi-123456789";
    database.ref(room).push({
        title: "move"+String(1),
        body: "76歩",
    });

    database.ref(room)
    .on("value", (data)=> {
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
        }
    });
});

