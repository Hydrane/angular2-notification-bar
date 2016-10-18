import {
    Component, OnInit, trigger, state, style, transition, animate, Optional, Inject,
    OpaqueToken
} from '@angular/core';

import { NotificationBarService } from './notification-bar.service';
import { Notification, NotificationType } from './index';
import { MessagesConfig } from './message-config';

// todo: ability to disable the highlight capability
// todo: accessibility
export const MESSAGES_CONFIG = new OpaqueToken('notification-bar.messages.config');

/**
 *
 */
@Component({
    selector: 'notification-bar',
    styles: [require('./notification-bar.component.scss')],
    template: require('./notification-bar.component.html'),
    animations: [
        trigger('flyDown', [
            state('in', style({
                opacity: 1,
                transform: 'translateY(0)'
            })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateY(-100%)'
                }),
                animate('600ms ease .2s 1 both')
            ]),
            transition('* => void', [
                animate('200ms ease .2s 1 both', style({
                    opacity: 0,
                    transform: 'translateY(-100%)'
                }))
            ])
        ])
    ]
})
export class NotificationBarComponent implements OnInit {

    notifications: Notification[] = [];

    defaults = {
        message: '',
        type: NotificationType.Info,
        autoHide: true,
        hideDelay: 3000,
        isHtml: false,
        allowClose: false
    };

    constructor(
        @Inject(MESSAGES_CONFIG) @Optional() private config: MessagesConfig,
        private notificationBarService: NotificationBarService
    ) { }

    ngOnInit() {
        this.notificationBarService.onCreate.subscribe(notification => this.addNotification(notification));
    }

    addNotification(notification: Notification) {
        let newNotification = Object.assign({}, this.defaults, notification);
        newNotification.typeValue = NotificationType[newNotification.type].toLowerCase();
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

    hideNotification(notification: Notification) {
        let index = this.notifications.indexOf(notification);

        this.notifications = [
            ...this.notifications.slice(0, index),
            ...this.notifications.slice(index + 1)
        ];
    }
}
