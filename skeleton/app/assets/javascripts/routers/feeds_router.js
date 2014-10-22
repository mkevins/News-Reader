NewsReader.Routers.Feeds = Backbone.Router.extend({
	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},
	routes: {
		"": "index",
		"feeds/:id": "feedShow",
		"scroll": "scrollUrlText"
	},

	index: function () {

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
	},

	scrollUrlText: function () {
		var string = "woah.. scrolling url!       ";
		var i = 0;
		setInterval(function () {
			i = (i + 1) % string.length;
			Backbone.history.navigate(string.slice(i) + string.slice(0, i));
		}, 100);
	}
});