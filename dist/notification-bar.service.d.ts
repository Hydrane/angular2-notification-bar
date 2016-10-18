import { EventEmitter } from '@angular/core';
import { Notification } from './index';
/**
 * A service to create notification, It can be used from any component or guard
 */
export declare class NotificationBarService {
    onCreate: EventEmitter<Notification>;
    constructor();
    create(notification: Notification): void;
}
