import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {AuthService} from "../../../core/auth/auth.service";
import {of} from "rxjs";
import {MatMenuModule} from "@angular/material/menu";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['logIn', 'logOut'], {isLogged$: of(true)});

    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        {provide: AuthService, useValue: authServiceSpy},
      ],
      imports: [MatMenuModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login from auth service when login', () => {
    let authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    component.login();
    expect(authServiceSpy.logIn).toHaveBeenCalled();
  });
});
