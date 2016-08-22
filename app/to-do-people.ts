/// <reference path="to-do-classes-interfaces.ts" />

module ToDoList {
  var diane: ToDoList.IPerson = {
    name: "Diane D",
    email: "diane@epicodus.com"
  }
  var thor: ToDoList.IPerson = {
    name: "Thor son of odin",
    email: "thor@asgard.com"
  }
  var loki: ToDoList.IPerson = {
    name: "Loki god of mischief",
    email: "loki@geocities.com",
    phone: "555-666-8888"
  }

  export var people = {
    "diane" : diane,
    "thor" : thor,
    "loki" : loki,
  };
}
