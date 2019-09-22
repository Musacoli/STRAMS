const {Text, Relationship, Checkbox} = require('@keystone-alpha/fields');
const { atTracking } = require('@keystone-alpha/list-plugins');

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    email: {
      type: Text,
      isRequired: true,
    },
    classes: {
      type: Relationship,
      ref: 'Classroom',
      many: true,
    },
    subjects: {
      type: Relationship,
      ref: 'Subject',
      many: true,
    },
    isActive: {
      type: Checkbox,
      defaultValue: false
    }
  },
  plugins: [
    atTracking({})
  ]
};
