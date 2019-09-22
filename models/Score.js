const {Relationship, Integer} = require('@keystone-alpha/fields');

module.exports = {
  fields: {
    subject: {
      type: Relationship,
      ref: 'Subject.name'
    },
    marks: {
      type: Integer,
      isRequired: true,
      defaultValue: 0,
    },
    student: {
      type: Relationship,
      ref: 'Student',
    },
    exam: {
      type: Relationship,
      ref: 'Exam',
    }
  }
}
