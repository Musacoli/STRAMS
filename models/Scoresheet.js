const {Text, Relationship, DateTime} = require('@keystone-alpha/fields');
const { atTracking, byTracking } = require('@keystone-alpha/list-plugins');

module.exports = {
  fields: {
    student: {
      type: Relationship,
      ref: 'Student',
      many: true,
    },
    exam: {
      type: Relationship,
      ref: 'Exam',
    },
    subjectScores: {
      type: Relationship,
      ref: 'Score',
      many: true,
    },
    comment: {
      type: Text,
    }
  },
  plugins: [
    atTracking({}),
      byTracking({}),
  ]
};
