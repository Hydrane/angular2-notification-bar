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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const core_1 = require('@angular/core');
const notification_bar_service_1 = require('./notification-bar.service');
const index_1 = require('./index');
// todo: ability to disable the highlight capability
// todo: accessibility
exports.MESSAGES_CONFIG = new core_1.OpaqueToken('notification-bar.messages.config');
/**
 *
 */
let NotificationBarComponent = class NotificationBarComponent {
    constructor(config, notificationBarService) {
        this.config = config;
        this.notificationBarService = notificationBarService;
        this.notifications = [];
        this.defaults = {
            message: '',
            type: index_1.NotificationType.Info,
            autoHide: true,
            hideDelay: 3000,
            isHtml: false,
            allowClose: false
        };
    }
    ngOnInit() {
        this.notificationBarService.onCreate.subscribe(notification => this.addNotification(notification));
    }
    addNotification(notification) {
        let newNotification = Object.assign({}, this.defaults, notification);
        newNotification.typeValue = index_1.NotificationType[newNotification.type].toLowerCase();
        if (this.config) {
            newNotification.message = this.config.messages[notification.message] || notification.message;
        }
        this.notifications = [
            ...this.notifications,
            newNotification
        ];
        if (newNotification.autoHide) {
            window.setTimeout(() => {
                this.hideNotification(newNotification);
            }, newNotification.hideDelay);
        }
    }
    hideNotification(notification) {
        let index = this.notifications.indexOf(notification);
        this.notifications = [
            ...this.notifications.slice(0, index),
            ...this.notifications.slice(index + 1)
        ];
    }
};
NotificationBarComponent = __decorate([
    core_1.Component({
        selector: 'notification-bar',
        styles: [`
        :host {
          position: relative;
          display: block;
        }
        
        .notifications-container {
          position: fixed;
          top: 0px;
          right: 0;
          left: 0;
          min-height: 25px;
          line-height: 25px;
          width: 100%;
          z-index: 6;
          overflow: hidden;
        }
        
        .notification {
          position: relative;
          text-align: center;
          font-size: 12px;
          color: #fff;
        }
        
        .message {
          padding: 0 12px;
        }
        
        .error {
          background-color: #F64747;
          border-bottom: 1px solid #f31515;
        }
        
        .success {
          background-color: #03C9A9;
          border-bottom: 1px solid #02aa8f;
        }
        
        .warning {
          background-color: #F7CA18;
          border-bottom: 1px solid #e7ba08;
        }
        
        .info {
          background-color: #0c6997;
          border-bottom: 1px solid #0c6997;
        }
        
        .close-click {
          font-size: 12px;
          cursor: pointer;
          padding: 10px;
          margin: 0 auto;
        }
    `],
        template: `
        <div class="notifications-container">
            <div *ngFor="let notification of notifications; let i = index;"
                 class="notification {{notification.typeValue}}"
                 [@flyDown]>
                <span *ngIf="notification.isHtml" class="message" [innerHTML]="notification.message"></span>
                <span *ngIf="!notification.isHtml" class="message">{{notification.message}}</span>
                <span class="fa fa-close close-click" *ngIf="notification.allowClose" (click)="hideNotification(notification)"></span>
            </div>
        </div>
    `,
        animations: [
            core_1.trigger('flyDown', [
                core_1.state('in', core_1.style({
                    opacity: 1,
                    transform: 'translateY(0)'
                })),
                core_1.transition('void => *', [
                    core_1.style({
                        opacity: 0,
                        transform: 'translateY(-100%)'
                    }),
                    core_1.animate('600ms ease .2s 1 both')
                ]),
                core_1.transition('* => void', [
                    core_1.animate('200ms ease .2s 1 both', core_1.style({
                        opacity: 0,
                        transform: 'translateY(-100%)'
                    }))
                ])
            ])
        ]
    }),
    __param(0, core_1.Inject(exports.MESSAGES_CONFIG)),
    __param(0, core_1.Optional()), 
    __metadata('design:paramtypes', [Object, notification_bar_service_1.NotificationBarService])
], NotificationBarComponent);
exports.NotificationBarComponent = NotificationBarComponent;
//# sourceMappingURL=notification-bar.component.js.map