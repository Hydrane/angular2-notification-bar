export * from './notification-bar.module';
export * from './notification-bar.service';
export * from './message-config';
export declare enum NotificationType {
    Info = 0,
    Success = 1,
    Error = 2,
    Warning = 3,
}
export interface Notification {
    message: string;
    type?: NotificationType;
    typeValue?: string;
    autoHide?: boolean;
    hideDelay?: number;
    isHtml?: boolean;
    allowClose?: boolean;
}
