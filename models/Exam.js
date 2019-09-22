const {Text, Relationship, DateTime, Checkbox} = require('@keystone-alpha/fields');
const { atTracking } = require('@keystone-alpha/list-plugins');

module.exports = {
  fields: {
    examCode: {
      type: Text,
      isRequired: true,
    },
    students: {
      type: Relationship,
      ref: 'Student',
    },
    subject: {
      type: Relationship,
      ref: 'Subject',
    },
    teacher: {
      type: Relationship,
      ref: 'Teacher',
    },
    scores: {
      type: Relationship,
      ref: 'Scoresheet',
    },
    date: {
      type: DateTime,
      format: 'DD/MM/YYYY h:mm A',
      yearRangeFrom: 2019,
      yearRangeTo: 2029,
    },
    completed: {
      type: Checkbox,
      defaultValue: false,
    }
  },
  plugins: [
    atTracking({})
  ]
};
