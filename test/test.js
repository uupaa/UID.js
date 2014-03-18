new Test().add([
        testUID
    ]).run(function(err, test) {
        if (1) {
            err || test.worker(function(err, test) {
                if (!err && typeof UID_ !== "undefined") {
                    var name = Test.swap(UID, UID_);

                    new Test(test).run(function(err, test) {
                        Test.undo(name);
                    });
                }
            });
        }
    });

function testUID(next) {

    var uid1 = UID();
    var uid2 = UID();
    var uid3 = UID("a");
    var uid4 = UID("a");
    var uid5 = UID("b");
    var uid6 = UID("b");


    if (uid1 + 1 === uid2 &&
        uid3 + 1 === uid4 &&
        uid5 + 1 === uid6) {
        console.log("testUID ok");
        next && next.pass();
    } else {
        console.log("testUID ng");
        next && next.miss();
    }
}

