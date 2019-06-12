Object.definedProperty(obj, "name", {
  value: "my name",
  writable: true,
  enumerable: true,
  configurable: true
});

var Task = function(name) {
  this.name = name;
  this.completed = false;

  this.completed = function() {
    console.log("completing task: " + Task.name);
    this.completed = true;
  };

  this.save = function() {
    console.log("saving Task: " + this.name);
  };
};

var task1 = new Task("1create a demo for constructors");
var task2 = new Task("2create a demo for constructors");
var task3 = new Task("3create a demo for constructors");
var task4 = new Task("4create a demo for constructors");

task1.completed();
task2.save();
task3.save();
task4.completed();
