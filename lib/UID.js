// @name: UID.js
// @require: Valid.js

(function(global) {
"use strict";

// --- variable --------------------------------------------
//{@assert
var Valid = global["Valid"] || require("uupaa.valid.js");
//}@assert

var _inNode = "process" in global;
var _uidMap = {}; // UID db. { groupName: count, ... }

// --- define ----------------------------------------------
// --- interface -------------------------------------------
function UID(groupName) { // @arg String(= ""): uid group name.
                          // @ret Integer: unique number, at 1 to 0x1fffffffffffff
                          // @help: UID
                          // @desc: create unique id
//{@assert
    _if(!Valid.type(groupName, "String/omit"), "UID(groupName)");
//}@assert

    groupName = groupName || "";
    if (!_uidMap[groupName]) {
        _uidMap[groupName] = 0;
    }

    // IEEE754 fraction size. 0x1fffffffffffff = Math.pow(2, 53) - 1
    if (++_uidMap[groupName] >= 0x1fffffffffffff) { // overflow?
          _uidMap[groupName] = 1; // reset
    }
    return _uidMap[groupName];
}
UID["name"] = "UID";
UID["repository"] = "https://github.com/uupaa/UID.js";

// --- implement -------------------------------------------

//{@assert
function _if(value, msg) {
    if (value) {
        console.error(Valid.stack(msg));
        throw new Error(msg);
    }
}
//}@assert

// --- export ----------------------------------------------
//{@node
if (_inNode) {
    module["exports"] = UID;
}
//}@node
if (global["UID"]) {
    global["UID_"] = UID; // already exsists
} else {
    global["UID"]  = UID;
}

})((this || 0).self || global);

