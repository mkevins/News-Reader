NewsReader.Views.FeedShow = Backbone.View.extend({
	template: JST['feeds/show'],

	events: {
		"click button": "refresh"
	},

	initialize: function () {
		this.listenTo(this.model, 'sync', this.render)
	},

	render: function () {
		// render feed from model
		var renderedContent = this.template({
			feed: this.model
		});
		this.$el.html(renderedContent);

		// keep a reference to 'this' as feed show view
		var $ul = this.$el.find('#feed-entries');

		// iterate through entries
		this.model.entries().each(function (entry) {
			var entryShowView = new NewsReader.Views.EntryShow({
				model: entry
			});
			$ul.append(entryShowView.render().$el);
		});
		return this;
	},

	refresh: function () {
		this.model.fetch();
	}


});