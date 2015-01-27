import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy');

      if (body.trim()) {
        var note = this.store.createRecord('note', { body: body });
        note.save();
      }
      this.set('noteCopy', '');
    },

    deleteNote: function(id) {
      var self = this;
      this.store.find('note', id).then(function(note) {
        note.deleteRecord();
        note.save();
        });
      }
    }
});
