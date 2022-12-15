import { Component } from '@angular/core';
import { AuthService } from './modules/security/services/auth.service';
import { SessionService } from './modules/security/services/session.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'tf2022cybersecu-suivit';
    user: { label: string } | null = null;

    constructor(
        private $auth: AuthService,
        private $session: SessionService<{ id: number, label: string }>
    ) {
        $session.subscribe((user) => this.user = user);
    }

    handleLoginAction() {
        this.$auth.login({ "username": "Flavian", "password": "Blop" }).subscribe(user => this.$session.open(user.id, user.username));
    }

    handleLogoutAction() {
        this.$session.close();
    }
}
