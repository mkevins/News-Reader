NewsReader.Routers.Feeds = Backbone.Router.extend({
	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},
	routes: {
		"": "index",
		"feeds/:id": "feedShow"
	},

	index: function () {
		NewsReader.feeds.fetch();
		var indexView = new NewsReader.Views.FeedsIndex({
			collection: NewsReader.feeds
		});

		this.$rootEl.html(indexView.render().$el);
	},

	feedShow: function (id) {
		var feed = NewsReader.feeds.fetchLatest(id);
		feed.fetch();
		var showView = new NewsReader.Views.FeedShow({
			model: feed
		});

		this.$rootEl.html(showView.render().$el);
	}
});