NewsReader.Collections.Entries = Backbone.Collection.extend({
  model: NewsReader.Models.Entry,
  url: '/entries',

  comparator: function (entry) {
    return entry.get('published_at');
  }
});
