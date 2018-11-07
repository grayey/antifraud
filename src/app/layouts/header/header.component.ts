import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
 import * as RUNNAVBAR from '../../../assets/js/mainapp';
import {Cache} from '../../../utils/cache';
import {element} from 'protractor';
import {UserService} from '../../../services/user.service';
import {NotificationService} from '../../../services/notification.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public menuToggle = false;
    public userPermissions: any[] = [];
    private permissionsArray: any[] = [];
    private modules = ['order', 'note', 'invoice', 'payment', 'admin', 'setup'];


    constructor(private _router: Router,
                private Alert: NotificationService,
                private userService: UserService) {
        if (!this.userService.getAuthUser()) {
            // this.Alert.error('Unauthorised!');
            // this.logUserOut();
        }
        // RUNNAVBAR.RUNAPP();
    }

    ngOnInit() {
        if (Cache.get('USER_PERMISSIONS')) {
            this.userPermissions = Cache.get('USER_PERMISSIONS');
            // console.log('User Permissions ', this.userPermissions);
            if (this.userPermissions[0] !== '*') {
                this.managePermissionsDisplay(this.setUserPermissions(this.userPermissions));
            }
        }
    }


    /*
    * This method sets navigation since the navbar javascript hinders routerlink action
    * */

    public setNavBarNavigation(url: string, moduleName: string = 'setup') {
        let path = `/${moduleName}/${url}`;
        path = (url === 'dashboard') ? 'dashboard' : path;
        return this._router.navigateByUrl(path);
    }

    public toggleMenu() {
        this.menuToggle = !this.menuToggle;
    }

    private setUserPermissions(userPermissions: any[]): string[] {
        return userPermissions.filter((userPermission) => {
            return userPermission.route.endsWith('index');
        }).map(listPermissions => {
            this.permissionsArray.push(listPermissions.route.split('.').join('_'));
            return listPermissions.route.split('.').join('_');
        });


    }

    private moduleIsPermitted(moduleName: string): boolean {
        return this.userPermissions.filter((userPermission) => {
            return userPermission.route.startsWith(moduleName);
        }).length > 0;
    }

    private managePermissionsDisplay(formattedPermissions: string[]): void {
        formattedPermissions.forEach(permission => {
            const elementId = $(`#${permission}`);
            if (elementId && !this.permissionsArray['includes'](permission)) {
                elementId.remove();
            }
        });
        this.modules.forEach(module => {
            if (!this.moduleIsPermitted(module)) {
                const moduleId = $(`#${module}`);
                moduleId.remove();
            }
        });
    }

    public logUserOut() {
        this.userService.logout();
    }


}
