"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const common_1 = require('@angular/common');
const notification_bar_service_1 = require('./notification-bar.service');
const notification_bar_component_1 = require('./notification-bar.component');
let NotificationBarModule_1 = class NotificationBarModule {
    static forRoot(config) {
        return {
            ngModule: NotificationBarModule_1,
            providers: [
                { provide: notification_bar_component_1.MESSAGES_CONFIG, useValue: config }
            ]
        };
    }
};
let NotificationBarModule = NotificationBarModule_1;
NotificationBarModule = NotificationBarModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [notification_bar_component_1.NotificationBarComponent],
        providers: [notification_bar_service_1.NotificationBarService],
        exports: [notification_bar_component_1.NotificationBarComponent]
    }), 
    __metadata('design:paramtypes', [])
], NotificationBarModule);
exports.NotificationBarModule = NotificationBarModule;
//# sourceMappingURL=notification-bar.module.js.map