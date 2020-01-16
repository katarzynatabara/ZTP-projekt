const Roles = require('./roles');
const roles = Roles.values;

/**
 * List of Permissions and the Roles allowed of using them.
 */
class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
          roles.viewer,
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,

          roles.zwierzakEditor,
          roles.zwierzakViewer,
          roles.rezerwacjaEditor,
          roles.rezerwacjaViewer,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.owner, roles.auditLogViewer, roles.viewer],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.owner],
      },
      zwierzakImport: {
        id: 'zwierzakImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.zwierzakEditor,
        ],
      },
      zwierzakCreate: {
        id: 'zwierzakCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.zwierzakEditor,
        ],
        allowedStorageFolders: ['zwierzak'],
      },
      zwierzakEdit: {
        id: 'zwierzakEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.zwierzakEditor,
        ],
        allowedStorageFolders: ['zwierzak'],
      },
      zwierzakDestroy: {
        id: 'zwierzakDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.zwierzakEditor,
        ],
        allowedStorageFolders: ['zwierzak'],
      },
      zwierzakRead: {
        id: 'zwierzakRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.zwierzakEditor,
          roles.zwierzakViewer,
        ],
      },
      zwierzakAutocomplete: {
        id: 'zwierzakAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.zwierzakEditor,
          roles.zwierzakViewer,
          roles.rezerwacjaEditor,
          roles.rezerwacjaViewer,
        ],
      },

      rezerwacjaImport: {
        id: 'rezerwacjaImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.rezerwacjaEditor,
        ],
      },
      rezerwacjaCreate: {
        id: 'rezerwacjaCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.rezerwacjaEditor,
        ],
        allowedStorageFolders: ['rezerwacja'],
      },
      rezerwacjaEdit: {
        id: 'rezerwacjaEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.rezerwacjaEditor,
        ],
        allowedStorageFolders: ['rezerwacja'],
      },
      rezerwacjaDestroy: {
        id: 'rezerwacjaDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.rezerwacjaEditor,
        ],
        allowedStorageFolders: ['rezerwacja'],
      },
      rezerwacjaRead: {
        id: 'rezerwacjaRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.rezerwacjaEditor,
          roles.rezerwacjaViewer,
        ],
      },
      rezerwacjaAutocomplete: {
        id: 'rezerwacjaAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.rezerwacjaEditor,
          roles.rezerwacjaViewer,
          roles.zwierzakEditor,
          roles.zwierzakViewer,
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

module.exports = Permissions;
