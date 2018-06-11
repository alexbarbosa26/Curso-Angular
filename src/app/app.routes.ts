import { TiketDetailComponent } from './components/tiket-detail/tiket-detail.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { UserNewComponent } from './components/user-new/user-new.component';

import { AuthGuard } from './components/security/auth.guard';
import { HomeComponent } from './components/home/home.component';
import {Routes,RouterModule} from '@angular/router'
import { LoginComponent } from './components/security/login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';
import { TicketNewComponent } from './components/ticket-new/ticket-new.component';


export const ROUTES: Routes=[
    {path: '',component:HomeComponent, canActivate: [AuthGuard]},
    {path: 'login',component:LoginComponent},
    {path: 'cadastro-usuario',component:UserNewComponent, canActivate:[AuthGuard]},
    {path: 'cadastro-usuario/:id',component:UserNewComponent, canActivate:[AuthGuard]},
    {path: 'listar-usuarios',component:UserListComponent, canActivate:[AuthGuard]},
    {path: 'listar-ticket',component:TicketListComponent, canActivate:[AuthGuard]},
    {path: 'ticket-detalhado/:id',component:TiketDetailComponent, canActivate:[AuthGuard]},
    {path: 'cadastro-ticket',component:TicketNewComponent, canActivate:[AuthGuard]},
    {path: 'cadastro-ticket/:id',component:TicketNewComponent, canActivate:[AuthGuard]}
]

export const routes:ModuleWithProviders=RouterModule.forRoot(ROUTES);