import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { IRole } from '../interfaces/user-login.interface';

export const readerRoleGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  const userRoles: IRole[] | undefined = userService.user()?.roles;
  const hasPermission = userRoles?.some((r: IRole) => { r.role === 'READER' && r.active});

  if (userService.user() && hasPermission) {
    return true;
  }

  return router.navigate(['user-login']);
};
