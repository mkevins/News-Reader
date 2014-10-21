NewsReader.Views.EntryShow = Backbone.View.extend({
	template: JST['feeds/entry_show'],

	events: {
	},

	initialize: function () {
  },

	tagName: 'li',

	render: function () {
		var renderedContent = this.template({
			entry: this.model
		});
		this.$el.html(renderedContent);
		return this;
	},

	refresh: function () {
		this.model.fetch();
	}

});