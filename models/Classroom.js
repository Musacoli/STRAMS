const {Text, Relationship} = require('@keystone-alpha/fields');
const { atTracking } = require('@keystone-alpha/list-plugins');

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    stream: {
      type: Text,
    },
    classTeacher: {
      type: Relationship,
      ref: 'Teacher'
    },
    students: {
      type: Relationship,
      ref: 'Student',
      many: true,
    },
    teachers: {
      type: Relationship,
      ref: 'Teacher',
      many: true,
    },
    campus: {
      type: Text,
    }
  },
  plugins: [
    atTracking({})
  ]
};
