export enum Permissions {
  ADMIN = 'admin',
  ROOT_USER = 'root_user',
  CUSTOMER_ACCESS = 'customer_access',
  CUSTOMER_ADD = 'customer_add',
  CUSTOMER_DELETE = 'customer_delete',
  CUSTOMER_UPDATE = 'customer_update',
  EMPLOYEE_ACCESS = 'employee_access',
  EMPLOYEE_ADD = 'employee_add',
  EMPLOYEE_DELETE = 'employee_delete',
  EMPLOYEE_UPDATE = 'employee_update'
}

export const PermissionsByRole = {
  root_user: [
    Permissions.ADMIN,
    Permissions.ROOT_USER,
    Permissions.CUSTOMER_ACCESS,
    Permissions.CUSTOMER_ADD,
    Permissions.CUSTOMER_DELETE,
    Permissions.CUSTOMER_UPDATE,
    Permissions.EMPLOYEE_ACCESS,
    Permissions.EMPLOYEE_ADD,
    Permissions.EMPLOYEE_DELETE,
    Permissions.EMPLOYEE_UPDATE
  ],
  admin: [
    Permissions.ADMIN,
    Permissions.CUSTOMER_ACCESS,
    Permissions.CUSTOMER_ADD,
    Permissions.CUSTOMER_UPDATE,
    Permissions.EMPLOYEE_ACCESS,
    Permissions.EMPLOYEE_ADD,
    Permissions.EMPLOYEE_UPDATE
  ],
  general: [
    Permissions.CUSTOMER_ACCESS,
    Permissions.CUSTOMER_UPDATE,
    Permissions.EMPLOYEE_ACCESS,
    Permissions.EMPLOYEE_UPDATE
  ],
  read_only: [
    Permissions.CUSTOMER_ACCESS,
    Permissions.EMPLOYEE_ACCESS
  ]
};

