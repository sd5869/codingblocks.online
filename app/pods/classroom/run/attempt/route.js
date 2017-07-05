/**
 * Created by abhishek on 27/06/17.
 */
'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service('current-user'),
  model () {
    const course = this.modelFor('classroom.run').get('course');
    console.log(course.id)
    return Ember.RSVP.hash({
      course,
      sections: this.store.query('section', {courseId: course.get('id')})
    })
  },
  setupController(controller, model) {
    controller.set('course', model.course);
    controller.set('sections', model.sections);
  }
});