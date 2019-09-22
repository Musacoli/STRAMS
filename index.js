const { Keystone } = require('@keystone-alpha/keystone');
const { PasswordAuthStrategy } = require('@keystone-alpha/auth-password');
const { GraphQLApp } = require('@keystone-alpha/app-graphql');
const { AdminUIApp } = require('@keystone-alpha/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystone-alpha/adapter-mongoose');
const { UserSchema, StudentSchema, ClassroomSchema } = require('./models/index');

const PROJECT_NAME = "STRAMS";


const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
});

//Creation of lists for models.
keystone.createList('User', UserSchema);
keystone.createList('Student', StudentSchema);
keystone.createList('Classroom', ClassroomSchema);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    // To create an initial user you can temporarily remove the authStrategy below
    new AdminUIApp({ enableDefaultRoute: true, authStrategy }),
  ],
};
