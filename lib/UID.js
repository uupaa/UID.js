// @name: UID.js

(function(global) {

// --- variable --------------------------------------------
var _inNode = "process" in global;
var _uidMap = {}; // UID db. { groupName: count, ... }

// --- define ----------------------------------------------
// --- interface -------------------------------------------
function UID(groupName) { // @arg String(= ""): uid group name.
                          // @ret Integer: unique number, at 1 to 0x1fffffffffffff
                          // @help: UID
                          // @desc: create unique id
//{@assert
    groupName && _if(typeof groupName !== "string", "invalid UID(groupName)");
//}@assert

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

//{@assert
function _if(booleanValue, errorMessageString) {
    if (booleanValue) {
        throw new Error(errorMessageString);
    }
}
//}@assert

// --- export ----------------------------------------------
//{@node
if (_inNode) {
    module["exports"] = UID;
}
//}@node
global["UID"] ? (global["UID_"] = UID) // already exsists
              : (global["UID"]  = UID);

})(this.self || global);

