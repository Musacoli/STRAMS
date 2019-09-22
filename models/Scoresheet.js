const {Text, Relationship, DateTime} = require('@keystone-alpha/fields');

module.exports = {
  fields: {
    teacher: {
      type: Relationship,
      ref: 'Teacher',
    },
    student: {
      type: Relationship,
      ref: 'Student',
    },
    subjects: {
      type: Relationship,
      ref: 'Subject',
      many: true,
    },
    exam: {
      type: Relationship,
      ref: 'Exam',
    },
    dateCreated: {
      type: DateTime,
      format: 'DD/MM/YYYY h:mm A',
      yearRangeFrom: 2019,
      yearRangeTo: 2029,
      defaultValue: Date.now(),
    },
    comment: {
      type: Text,
    }
  }
}
