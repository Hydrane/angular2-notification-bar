"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./notification-bar.module'));
__export(require('./notification-bar.service'));
(function (NotificationType) {
    NotificationType[NotificationType["Info"] = 0] = "Info";
    NotificationType[NotificationType["Success"] = 1] = "Success";
    NotificationType[NotificationType["Error"] = 2] = "Error";
    NotificationType[NotificationType["Warning"] = 3] = "Warning";
})(exports.NotificationType || (exports.NotificationType = {}));
var NotificationType = exports.NotificationType;
//# sourceMappingURL=index.js.map