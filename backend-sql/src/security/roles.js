/**
 * List of Roles available for the Users.
 */
class Roles {
  static get values() {
    return {
      owner: 'owner',
      editor: 'editor',
      viewer: 'viewer',
      auditLogViewer: 'auditLogViewer',
      iamSecurityReviewer: 'iamSecurityReviewer',
      entityEditor: 'entityEditor',
      entityViewer: 'entityViewer',
      zwierzakEditor: 'zwierzakEditor',
      zwierzakViewer: 'zwierzakViewer',
      rezerwacjaEditor: 'rezerwacjaEditor',
      rezerwacjaViewer: 'rezerwacjaViewer',
    };
  }
}

module.exports = Roles;
