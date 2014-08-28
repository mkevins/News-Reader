NewsReader.Models.Feed = Backbone.Model.extend({
  initialize: function () {
    this.entries();
  },

  parse: function (response) {
    if (response["entries"]) {
      this.entries().set(response["entries"]);
      delete response["entries"];
    }
    return response;
  },

  entries: function () {
    if (!this.get('entries')) {
      var feedEntries = new NewsReader.Collections.FeedEntries([], {
        feed: this
      });
      this.set({
        entries: feedEntries
      });
    }
    return this.get('entries');
  }
});
