import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy');
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
