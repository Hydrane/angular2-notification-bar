import { OnInit, OpaqueToken, OnDestroy } from '@angular/core';
import { NotificationBarService } from './notification-bar.service';
import { Notification, NotificationType } from './index';
import { MessagesConfig } from './message-config';
import { Subscription } from 'rxjs';
export declare const MESSAGES_CONFIG: OpaqueToken;
/**
 *
 */
export declare class NotificationBarComponent implements OnInit, OnDestroy {
    private notificationBarService;
    private config;
    notifications: Notification[];
    defaults: {
        message: string;
        type: NotificationType;
        autoHide: boolean;
        hideDelay: number;
        isHtml: boolean;
        allowClose: boolean;
    };
    subscription: Subscription;
    constructor(notificationBarService: NotificationBarService, config?: MessagesConfig);
    ngOnInit(): void;
    addNotification(notification: Notification): void;
    hideNotification(notification: Notification): void;
    ngOnDestroy(): void;
}
