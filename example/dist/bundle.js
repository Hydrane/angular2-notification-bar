webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const platform_browser_dynamic_1 = __webpack_require__(1);
	const app_module_1 = __webpack_require__(23);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

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
	const core_1 = __webpack_require__(3);
	const platform_browser_1 = __webpack_require__(21);
	const forms_1 = __webpack_require__(24);
	const src_1 = __webpack_require__(28);
	const app_component_1 = __webpack_require__(32);
	let AppModule = class AppModule {
	};
	AppModule = __decorate([
	    core_1.NgModule({
	        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, src_1.NotificationBarModule],
	        declarations: [app_component_1.AppComponent],
	        bootstrap: [app_component_1.AppComponent]
	    }), 
	    __metadata('design:paramtypes', [])
	], AppModule);
	exports.AppModule = AppModule;


/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(29));
	__export(__webpack_require__(30));
	(function (NotificationType) {
	    NotificationType[NotificationType["Info"] = 0] = "Info";
	    NotificationType[NotificationType["Success"] = 1] = "Success";
	    NotificationType[NotificationType["Error"] = 2] = "Error";
	    NotificationType[NotificationType["Warning"] = 3] = "Warning";
	})(exports.NotificationType || (exports.NotificationType = {}));
	var NotificationType = exports.NotificationType;


/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

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
	const core_1 = __webpack_require__(3);
	const common_1 = __webpack_require__(22);
	const notification_bar_service_1 = __webpack_require__(30);
	const notification_bar_component_1 = __webpack_require__(31);
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


/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

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
	const core_1 = __webpack_require__(3);
	/**
	 * A service to create notification, It can be used from any component or guard
	 */
	let NotificationBarService = class NotificationBarService {
	    constructor() {
	        this.onCreate = new core_1.EventEmitter();
	    }
	    create(notification) {
	        this.onCreate.emit(notification);
	    }
	};
	NotificationBarService = __decorate([
	    core_1.Injectable(), 
	    __metadata('design:paramtypes', [])
	], NotificationBarService);
	exports.NotificationBarService = NotificationBarService;


/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

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
	const core_1 = __webpack_require__(3);
	const notification_bar_service_1 = __webpack_require__(30);
	const index_1 = __webpack_require__(28);
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


/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

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
	const core_1 = __webpack_require__(3);
	const src_1 = __webpack_require__(28);
	let AppComponent = class AppComponent {
	    constructor(notificationBarService) {
	        this.notificationBarService = notificationBarService;
	        this.enable = true;
	        this.count = 0;
	    }
	    ngOnInit() {
	    }
	    createInfo() {
	        this.notificationBarService.create({ message: 'USER_SAVED', type: src_1.NotificationType.Info });
	    }
	    createSuccess() {
	        this.notificationBarService.create({ message: 'USER_SAVED', type: src_1.NotificationType.Success });
	    }
	    createError() {
	        this.notificationBarService.create({ message: 'USER_SAVED', type: src_1.NotificationType.Error });
	    }
	    createWarning() {
	        this.notificationBarService.create({ message: 'USER_SAVED', type: src_1.NotificationType.Warning });
	    }
	};
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(33)
	    }), 
	    __metadata('design:paramtypes', [src_1.NotificationBarService])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },

/***/ 33:
/***/ function(module, exports) {

	module.exports = "<h2>Hello World</h2>\n<notification-bar></notification-bar>\n\n<h3>Create Notifications - </h3>\n<button (click)=\"createInfo()\">Info</button>\n<button (click)=\"createError()\">Info</button>\n<button (click)=\"createSuccess()\">Info</button>\n<button (click)=\"createWarning()\">Info</button>\n"

/***/ }

});
//# sourceMappingURL=bundle.js.map