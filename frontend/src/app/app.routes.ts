import { Routes } from '@angular/router';
import { UserList } from './user-list/user-list';
import { UserForm } from './user-form/user-form';
import { UserMaster } from './user-master/user-master';
import { Newform } from './newform/newform';

export const routes: Routes = [
    {path: '', component: UserList},
    {path: 'create', component: UserForm},
   // {path: 'edit/:id', component: UserForm},
    {path : 'master/create', component: UserMaster},
    { path: 'master/edit/:id', component: UserMaster },
    {path : 'tech/create', component:Newform}

];
