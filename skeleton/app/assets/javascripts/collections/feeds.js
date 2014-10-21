NewsReader.Collections.Feeds = Backbone.Collection.extend({
	model: NewsReader.Models.Feed,
	url: '/api/feeds',

	entries: function () {
		this._entries = this._entries || new NewsReader.Collections.Entries([], {
				feed: this
			})
		return this._entries
	},

	fetchLatest: function (id) {
		var model = this.get(id);
		var feeds = this;

		if (model) {
			model.fetch();
		} else {
			model = new NewsReader.Models.Feed({id: id});
			model.fetch({
				success: function () {
					feeds.add(model);
				}
			});
		}

		return model;
	}
});