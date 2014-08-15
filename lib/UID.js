(function(global) {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
//var _runOnNode = "process" in global;
//var _runOnWorker = "WorkerLocation" in global;
//var _runOnBrowser = "document" in global;

var _uidMap = {}; // UID db. { groupName: count, ... }

// --- class / interfaces ----------------------------------
function UID(groupName) { // @arg String = "" - uid group name.
                          // @ret Integer     - unique number, at 1 to 0x1fffffffffffff
                          // @desc create unique id
//{@dev
    $valid($type(groupName, "String|omit"), UID, "groupName");
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

//{@dev
UID["repository"] = "https://github.com/uupaa/UID.js";
//}@dev

// --- implements ------------------------------------------

// --- validate / assertions -------------------------------
//{@dev
function $valid(val, fn, hint) { if (global["Valid"]) { global["Valid"](val, fn, hint); } }
function $type(obj, type) { return global["Valid"] ? global["Valid"].type(obj, type) : true; }
//function $keys(obj, str) { return global["Valid"] ? global["Valid"].keys(obj, str) : true; }
//function $some(val, str, ignore) { return global["Valid"] ? global["Valid"].some(val, str, ignore) : true; }
//function $args(fn, args) { if (global["Valid"]) { global["Valid"].args(fn, args); } }
//}@dev

// --- exports ---------------------------------------------
if ("process" in global) {
    module["exports"] = UID;
}
global["UID" in global ? "UID_" : "UID"] = UID; // switch module. http://git.io/Minify

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule

