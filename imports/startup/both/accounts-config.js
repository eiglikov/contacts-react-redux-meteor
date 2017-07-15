// Import modules used by both client and server through a single index entry point
import { Accounts } from 'meteor/accounts-base'

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
})
