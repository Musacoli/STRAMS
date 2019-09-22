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
    parentsEmail: {
      type: Text,
      isRequired: true,
    },
    classroom: {
      type: Relationship,
      ref: 'Classroom'
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
}
