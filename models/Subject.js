const {Text, Relationship, Checkbox} = require('@keystone-alpha/fields');
const { atTracking } = require('@keystone-alpha/list-plugins');

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    subjectCode: {
      type: Text,
    },
    teachers: {
      type: Relationship,
      ref: 'Teacher',
      many: true,
    },
    students: {
      type: Relationship,
      ref: 'Student',
      many: true,
    },
    subjectHead: {
      type: Relationship,
      ref: 'Teacher'
    },
    inCurriculum: {
      type: Checkbox,
      defaultValue: true,
    }
  },
  plugins: [
    atTracking({})
  ]
};
