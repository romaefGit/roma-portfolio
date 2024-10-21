import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app/main/main.component').then((c) => c.MainComponent),
  },
  {
    path: 'angular-game',
    loadComponent: () =>
      import(
        './app/components/canvas-platformer/canvas-platformer.component'
      ).then((c) => c.CanvasPlatformerComponent),
  },
  // {
  //   path: 'auth',
  //   canActivate: [loggedOutGuard],
  //   children: [
  //     {
  //       path: 'login',
  //       loadComponent: () =>
  //         import('./pages/auth/login/login.component').then(
  //           (c) => c.LoginComponent,
  //         ),
  //     },
  //     {
  //       path: 'register',
  //       loadComponent: () =>
  //         import('./pages/auth/register/register.component').then(
  //           (c) => c.RegisterComponent,
  //         ),
  //     },
  //   ],
  // },
  // { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  // { path: '**', redirectTo: 'auth/login' },
];
