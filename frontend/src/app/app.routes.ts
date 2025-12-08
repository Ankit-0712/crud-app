import { Routes } from '@angular/router';
import { UserList } from './user-list/user-list';
import { UserForm } from './user-form/user-form';

export const routes: Routes = [
    {path: '', component: UserList},
    {path: 'create', component: UserForm},
    {path: 'edit/:id', component: UserForm}
];
