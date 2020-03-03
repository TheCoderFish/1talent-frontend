import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Observable } from 'rxjs';
import { User } from 'oidc-client';
import { OidcFacade } from 'ng-oidc-client';

@Component({
  selector: 'master-ui',
  templateUrl: './master.component.html',
})
export class MasterComponent implements OnInit {

  @ViewChild('dropdownmenu') public menu: ElementRef;
  public logedInUserData$: Observable<User>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private oidc: OidcFacade,
    private renderer: Renderer2
  ) { }

  public ngOnInit() {
    this.logedInUserData$ = this.authService.getUserData();

  }

  public logout(): void {
    this.oidc.signoutRedirect();
  }

  public openLogoutDropdown() {
    this.renderer.removeClass(this.menu.nativeElement, 'd-none');
    this.renderer.addClass(this.menu.nativeElement, 'd-block');
  }

}
