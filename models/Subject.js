const { Text, Relationship, Checkbox } = require('@keystone-alpha/fields');

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
  }
}
