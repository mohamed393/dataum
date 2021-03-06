import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { AuthenticationService } from '../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../core/services/authfake.service';

import { environment } from '../../../environments/environment';
import { EventService } from 'src/app/core/services/event.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})

/**
 * Topbar component
 */
export class TopbarComponent implements OnInit {

  element;
  configData;

  constructor(@Inject(DOCUMENT) private document: any, private router: Router, private authService: AuthenticationService,
    private translate: TranslateService, private authFackservice: AuthfakeauthenticationService, private eventService: EventService) {
    this.eventService.getLanguage().subscribe(response => {
      this.translate.use(this.lang);
      console.log('response', response)
      document.body.setAttribute('dir', (response === 'en' ? 'ltr' : 'rtl'));
    });
    this.lang = localStorage.getItem('lang');
    if (!this.lang) {
      this.lang = 'en';
    }
    this.eventService.changeLanguage(this.lang);
  }
  openMobileMenu: boolean;

  @Output() settingsButtonClicked = new EventEmitter();
  @Output() mobileMenuButtonClicked = new EventEmitter();
  lang

  ngOnInit() {
    this.openMobileMenu = false;
    this.element = document.documentElement;

    this.configData = {
      suppressScrollX: true,
      wheelSpeed: 0.3
    };
  }
  changeLanguage(value) {
    this.eventService.changeLanguage(value);
    this.translate.setDefaultLang(value)
    this.translate.use(value);
  }

  /**
   * Toggles the right sidebar
   */
  toggleRightSidebar() {
    this.settingsButtonClicked.emit();
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

  /**
   * Logout the user
   */
  logout() {
    if (environment.defaultauth === 'firebase') {
      this.authService.logout();
    } else {
      this.authFackservice.logout();
    }
    this.router.navigate(['/account/login']);
  }

  /**
   * Fullscreen method
   */
  fullscreen() {
    document.body.classList.toggle('fullscreen-enable');
    if (
      !document.fullscreenElement && !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }
}
