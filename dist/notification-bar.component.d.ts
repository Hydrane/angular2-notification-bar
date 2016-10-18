import { OnInit, OpaqueToken } from '@angular/core';
import { NotificationBarService } from './notification-bar.service';
import { Notification, NotificationType } from './index';
import { MessagesConfig } from './message-config';
export declare const MESSAGES_CONFIG: OpaqueToken;
/**
 *
 */
export declare class NotificationBarComponent implements OnInit {
    private config;
    private notificationBarService;
    notifications: Notification[];
    defaults: {
        message: string;
        type: NotificationType;
        autoHide: boolean;
        hideDelay: number;
        isHtml: boolean;
        allowClose: boolean;
    };
    constructor(config: MessagesConfig, notificationBarService: NotificationBarService);
    ngOnInit(): void;
    addNotification(notification: Notification): void;
    hideNotification(notification: Notification): void;
}
