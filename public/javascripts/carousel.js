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
      slide.id = index;
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
    var id = this.model.attributes.id;
    $('div[data-id=' + id + ']').fadeOut(function() {
      $('div[data-id=' + (id + 1) + ']').fadeIn();
    });
  },
  prev: function() {
    var id = this.model.attributes.id;
    $('div[data-id=' + id + ']').fadeOut(function() {
      $('div[data-id=' + (id - 1) + ']').fadeIn();
    });
  },
  initialize: function() {
    this.template = _.template($('.slides-list-template').html());
  },
  render: function() {
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

    // empty the target DOM element
    this.$el.html('');

    _.each(this.model.toArray(), function(slide) {
      var images = slide.get('images');

      // set random image url from Array of Images urls
      var randomInt = Math.floor(Math.random() * images.length);
      slide.set('url', images[randomInt]);

      self.$el.append((new SlideView({ model: slide })).render().$el);
    });

    // display first slide on page load
    $('div[data-id="0"]').show();

    // disable first and last nav buttons on page load
    $('.carousel-prev:first').prop('disabled', true);
    $('.carousel-next:last').prop('disabled', true);

    return this;
  },
});

// Instantiate All Slides View
var slidesView = new SlidesView();

