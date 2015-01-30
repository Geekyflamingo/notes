import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy');
      var title = this.get('titleCopy');

      if (body && title && body.trim() && title.trim()) {
        var note = this.store.createRecord('note', { title: title, body: body });
        note.save().then(function(){
          this.flashMessage('success', 'Your note has been saved!', 1000);
        }.bind(this));
      }
      this.set('titleCopy', '');
      this.set('noteCopy', '');
    },

    deleteNote: function (note) {
      note.destroyRecord();
      this.flashMessage('success', 'Your note has been deleted!', 1000);
    }
  }
});
