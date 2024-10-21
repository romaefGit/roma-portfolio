import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/main/main.component').then((c) => c.MainComponent),
  },
  {
    path: 'angular-game',
    loadComponent: () =>
      import('./pages/canvas/platform-game/platform-game.component').then(
        (c) => c.PlatformGameComponent,
      ),
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
