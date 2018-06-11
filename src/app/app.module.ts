import { DialogService } from './services/dialog.service';
import { AuthGuard } from './components/security/auth.guard';
import { SharedService } from './services/shared.service';
import { UserService } from './services/user.service';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/security/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './components/security/auth.interceptor';
import { UserNewComponent } from './components/user-new/user-new.component';
import { TicketNewComponent } from './components/ticket-new/ticket-new.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TicketService } from './services/ticket.service';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TiketDetailComponent } from './components/tiket-detail/tiket-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    UserNewComponent,
    TicketNewComponent,
    UserListComponent,
    TicketListComponent,
    TiketDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routes
  ],
  providers: [
    UserService,
    SharedService,
    DialogService,
    TicketService,
    AuthGuard,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
