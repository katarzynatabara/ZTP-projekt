import Permissions from 'security/permissions';
import { i18n } from 'i18n';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    icon: 'home',
    label: i18n('home.menu'),
    menu: {
      exact: true,
    },
    loader: () => import('view/home/HomePage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
    menu: false,
  },

  {
    path: '/iam',
    loader: () => import('view/iam/list/IamPage'),
    permissionRequired: permissions.iamRead,
    exact: true,
    icon: 'user-add',
    label: i18n('iam.menu'),
    menu: true,
  },
  {
    path: '/iam/new',
    loader: () => import('view/iam/new/IamNewPage'),
    menu: false,
    permissionRequired: permissions.iamCreate,
    exact: true,
  },
  {
    path: '/iam/importer',
    loader: () =>
      import('view/iam/importer/IamImporterPage'),
    menu: false,
    permissionRequired: permissions.iamImport,
    exact: true,
  },
  {
    path: '/iam/:id/edit',
    loader: () => import('view/iam/edit/IamEditPage'),
    menu: false,
    permissionRequired: permissions.iamEdit,
    exact: true,
  },
  {
    path: '/iam/:id',
    loader: () => import('view/iam/view/IamViewPage'),
    menu: false,
    permissionRequired: permissions.iamRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    icon: 'file-search',
    label: i18n('auditLog.menu'),
    loader: () => import('view/auditLog/AuditLogPage'),
    menu: true,
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: 'setting',
    label: i18n('settings.menu'),
    loader: () => import('view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
    menu: true,
  },

  {
    path: '/zwierzak',
    loader: () => import('view/zwierzak/list/ZwierzakListPage'),
    permissionRequired: permissions.zwierzakRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.zwierzak.menu'),
    menu: true,
  },
  {
    path: '/zwierzak/new',
    loader: () => import('view/zwierzak/form/ZwierzakFormPage'),
    menu: false,
    permissionRequired: permissions.zwierzakCreate,
    exact: true,
  },
  {
    path: '/zwierzak/importer',
    loader: () =>
      import('view/zwierzak/importer/ZwierzakImporterPage'),
    menu: false,
    permissionRequired: permissions.zwierzakImport,
    exact: true,
  },
  {
    path: '/zwierzak/:id/edit',
    loader: () => import('view/zwierzak/form/ZwierzakFormPage'),
    menu: false,
    permissionRequired: permissions.zwierzakEdit,
    exact: true,
  },
  {
    path: '/zwierzak/:id',
    loader: () => import('view/zwierzak/view/ZwierzakViewPage'),
    menu: false,
    permissionRequired: permissions.zwierzakRead,
    exact: true,
  },

  {
    path: '/rezerwacja',
    loader: () => import('view/rezerwacja/list/RezerwacjaListPage'),
    permissionRequired: permissions.rezerwacjaRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.rezerwacja.menu'),
    menu: true,
  },
  {
    path: '/rezerwacja/new',
    loader: () => import('view/rezerwacja/form/RezerwacjaFormPage'),
    menu: false,
    permissionRequired: permissions.rezerwacjaCreate,
    exact: true,
  },
  {
    path: '/rezerwacja/importer',
    loader: () =>
      import('view/rezerwacja/importer/RezerwacjaImporterPage'),
    menu: false,
    permissionRequired: permissions.rezerwacjaImport,
    exact: true,
  },
  {
    path: '/rezerwacja/:id/edit',
    loader: () => import('view/rezerwacja/form/RezerwacjaFormPage'),
    menu: false,
    permissionRequired: permissions.rezerwacjaEdit,
    exact: true,
  },
  {
    path: '/rezerwacja/:id',
    loader: () => import('view/rezerwacja/view/RezerwacjaViewPage'),
    menu: false,
    permissionRequired: permissions.rezerwacjaRead,
    exact: true,
  },
];

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () => import('view/auth/ForgotPasswordPage'),
  },
];

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () => import('view/auth/EmptyPermissionsPage'),
  },
];

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () => import('view/auth/EmailUnverifiedPage'),
  },
];

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () => import('view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () => import('view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () => import('view/shared/errors/Error404Page'),
  },
];

export default {
  privateRoutes,
  publicRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
