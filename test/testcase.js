var ModuleTestUID = (function(global) {

var _inNode    = "process"        in global;
var _inWorker  = "WorkerLocation" in global;
var _inBrowser = "document"       in global;

return new Test("UID", {
        disable:    false,
        browser:    true,
        worker:     true,
        node:       true,
        button:     true,
        both:       true,
    }).add([
        testUID
    ]).run().clone();

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
        next && next.pass();
    } else {
        next && next.miss();
    }
}

})((this || 0).self || global);

