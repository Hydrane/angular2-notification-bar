import { Component, OnInit } from '@angular/core';
import { NotificationBarService, NotificationType } from '../../src'

@Component({
    selector: 'app',
    template: require('./app.html')
})
export class AppComponent implements OnInit {
    enable: boolean = true;
    count: number = 0;

    constructor(
        public notificationBarService: NotificationBarService
    ) {
    }

    ngOnInit() {

    }

    createInfo() {
        this.notificationBarService.create({ message: 'USER_SAVED', type: NotificationType.Success});
    }

    onChange() {
        this.count++;
    }
}