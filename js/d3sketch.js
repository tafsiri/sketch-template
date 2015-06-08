function Sketch() {
  this.width = 100;
  this.height = 100;
}

Sketch.prototype.init = function() {
  this.svg = d3.select('#main')
    .append('svg')
    .attr('width', this.width)
    .attr('height', this.height);

  var bg = this.svg
    .append('g')
    .attr('class', 'bg');

  var bgRect = bg
    .append('rect')
    .attr('class', 'bg-rect');
};


Sketch.prototype.update = function() {
  var lines = [
    {x1: 90, y1: 10, x2: 10, y2: 90}
  ];

  this.data = lines;
};


Sketch.prototype.render = function() {
  d3.select('rect.bg-rect')
    .attr('fill', '#ddd')
    .attr('width', this.width)
    .attr('height', this.height);

  var bg = this.svg.select('g.bg');

  var bind = bg.selectAll('line')
    .data(this.data);

  bind.enter()
    .append('line')
    .attr('x1', function(d, i) { return d.x1; })
    .attr('y1', function(d, i) { return d.y1; })
    .attr('x2', function(d, i) { return d.x2; })
    .attr('y2', function(d, i) { return d.y2; })
    .attr('stroke', '#000');

};


document.addEventListener('DOMContentLoaded', function() {
  console.log('hello d3');

  var s = new Sketch();
  s.init();
  s.update();
  s.render();

});
