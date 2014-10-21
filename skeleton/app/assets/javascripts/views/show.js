NewsReader.Views.FeedShow = Backbone.View.extend({
	template: JST['feeds/show'],

	events: {

	},

	initialize: function () {
		this.listenTo(this.model, 'sync', this.render)
	},

	render: function () {
		var renderedContent = this.template({
			feed: this.model
		});

		this.$el.html(renderedContent);

		return this;
	}


});