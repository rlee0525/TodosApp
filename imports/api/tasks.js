import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tasks = new Mongo.Collection('tasks');

Meteor.methods({
 'tasks.insert' (text) {
   check(text, String);

   if (!Meteor.userId()) {
     throw new Meteor.Error('not-authorized');
   }

   Tasks.insert({
     text,
     createdAt: new Date(),
     owner: Meteor.userId(),
     name: Meteor.user().services.facebook.name,
   });
 },
 'tasks.remove' (taskId) {
   check(taskId, String);

   if (!Meteor.userId()) {
     throw new Meteor.Error('not-authorized');
   }

   Tasks.remove(taskId);
 },
 'tasks.setChecked' (taskId, setChecked) {
   check(taskId, String);
   check(setChecked, Boolean);

   if (!Meteor.userId()) {
     throw new Meteor.Error('not-authorized');
   }

   Tasks.update(taskId, {
     $set: {
       checked: setChecked
     }
   });
 },
});
