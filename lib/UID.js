(function(global) {
"use strict";

// --- dependency module -----------------------------------
//{@dev
//  This code block will be removed in `$ npm run build-release`. http://git.io/Minify
var Valid = global["Valid"] || require("uupaa.valid.js"); // http://git.io/Valid
//}@dev

// --- local variable --------------------------------------
//var _runOnNode = "process" in global;
//var _runOnWorker = "WorkerLocation" in global;
//var _runOnBrowser = "document" in global;
var _uidMap = {}; // UID db. { groupName: count, ... }

// --- define ----------------------------------------------
// --- interface -------------------------------------------
function UID(groupName) { // @arg String = "" - uid group name.
                          // @ret Integer     - unique number, at 1 to 0x1fffffffffffff
                          // @desc create unique id
//{@dev
    Valid(Valid.type(groupName, "String|omit"), UID, "groupName");
//}@dev

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

UID["repository"] = "https://github.com/uupaa/UID.js";

// --- implement -------------------------------------------

// --- export ----------------------------------------------
if ("process" in global) {
    module["exports"] = UID;
}
global["UID" in global ? "UID_" : "UID"] = UID; // switch module. http://git.io/Minify

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule

