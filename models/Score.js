const {Relationship, Integer, Uuid} = require('@keystone-alpha/fields');
const { atTracking, byTracking } = require('@keystone-alpha/list-plugins');

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
  },
  plugins: [
    atTracking({}),
    byTracking({}),
  ]
};
