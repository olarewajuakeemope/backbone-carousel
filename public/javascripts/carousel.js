// Backbone Model
var Slide = Backbone.Model.extend({
  defaults: {
    images: [],
    title: '',
  },
});

// Backbone Collection
var Slides = Backbone.Collection.extend({
  url: '/slides',
  parse: function(data) {
    data.slides.forEach(function(slide, index) {
      slide.url = '';
      slide.index = index;
    });
    return data.slides;
  },
  initialize: function() {
    this.fetch();
  },
});

// Instantiate a Collection
var slides = new Slides();

// Backbone Single Slide View
var SlideView = Backbone.View.extend({
  model: new Slide(),
  tagName: 'div',
  events: {
    'click .carousel-prev': 'prev',
    'click .carousel-next': 'next',
  },
  next: function() {
    var index = this.model.attributes.index;
    $('div[data-index=' + index + ']').fadeOut(function() {
      $('div[data-index=' + (index + 1) + ']').fadeIn();
    });
  },
  prev: function() {
    var index = this.model.attributes.index;
    $('div[data-index=' + index + ']').fadeOut(function() {
      $('div[data-index=' + (index - 1) + ']').fadeIn();
    });
  },
  initialize: function() {
    this.template = _.template($('.slides-list-template').html());
  },
  render: function() {
    $('div[data-index="0"]').show();
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});

// Backbone All Slides View
var SlidesView = Backbone.View.extend({
  model: slides,
  el: $('#carousel'),
  initialize: function() {
    this.model.on('add', this.render, this);
  },
  render: function() {
    var self = this;
    this.$el.html('');
    _.each(this.model.toArray(), function(slide) {
      var images = slide.get('images');
      var randomInt = Math.floor(Math.random() * 3);
      self.$el.append((new SlideView({ model: slide })).render().$el);
      slide.set('url', images[randomInt]);
    });
    return this;
  },
});

// Instantiate All Slides View
var slidesView = new SlidesView();

// Instantiate script
$(document).ready(function() {
  setTimeout(function() {
    $('.carousel-prev:first').prop('disabled', true);
    $('.carousel-next:last').prop('disabled', true);
  }, 200);
});
