# Description

This is a simple notification bar component for Angular2.

Inspired by [ng-notifications-bar](https://github.com/alexbeletsky/ng-notifications-bar) - in angular 1.

# Installation

```bash
npm install angular2-notification-bar --save
```

# Usage

```javascript
import { NotificationBarModule } from 'angular2-notification-bar'
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, FormsModule, NotificationBarModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

```html
<notification-bar></notification-bar>
```

```javascript
this.notificationBarService.create({ message: 'USER_SAVED', type: NotificationType.Success});
```

# Options

    message: string;
    type?: NotificationType;
    autoHide?: boolean;
    hideDelay?: number;
    isHtml?: boolean;
    allowClose?: boolean;
    hideOnHover?: boolean

# License
MIT