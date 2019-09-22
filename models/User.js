const {Text, Checkbox, Password} = require('@keystone-alpha/fields');
const { atTracking } = require('@keystone-alpha/list-plugins');

// Access control functions
const {access} = require('./Roles');

module.exports = {
  fields: {
    name: {type: Text},
    email: {
      type: Text,
      isUnique: true,
    },
    isAdmin: {type: Checkbox},
    password: {
      type: Password,
    },
  },
  // To create an initial user you can temporarily remove access controls
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
  plugins: [
      atTracking({})
  ]
};
