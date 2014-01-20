// @name: UID.js

(function(global) {

// --- define ----------------------------------------------
// --- variable --------------------------------------------
var _uidMap = {}; // UID db. { groupName: count, ... }

// --- interface -------------------------------------------
function UID(groupName) { // @arg String(= ""): uid group name.
                          // @ret Integer: unique number, at 1 to 0x1fffffffffffff
                          // @help: UID
                          // @desc: create unique id
    groupName = groupName || "";
    _uidMap[groupName] || (_uidMap[groupName] = 0);

    // IEEE754 fraction size. 0x1fffffffffffff = Math.pow(2, 53) - 1
    if (++_uidMap[groupName] >= 0x1fffffffffffff) { // overflow?
          _uidMap[groupName] = 1; // reset
    }
    return _uidMap[groupName];
}
UID["name"] = "UID";
UID["repository"] = "https://github.com/uupaa/UID.js";

// --- implement -------------------------------------------
// --- export ----------------------------------------------
if (global["process"]) { // node.js
    module["exports"] = UID;
}
global["UID"] = UID;

})(this.self || global);

