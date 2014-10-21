NewsReader.Collections.Feeds = Backbone.Collection.extend({
	model: NewsReader.Models.Feed,
	url: '/api/feeds',

	entries: function () {

		this._entries = this._entries || new NewsReader.Collections.Entries([], {
				feed: this
			})

		return this._entries

	}
});