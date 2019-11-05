//Backend
function TaskList() {
  this.tasks = []
}

TaskList.prototype.addTask = function (task) {
  this.tasks.unshift(task);

};
//UI
var userTaskList = new TaskList ();

$(document).ready(function() {

  $("#task-input").submit(function(event) {
    event.preventDefault();
    // $("#").hide();
    var task = $("input#task").val();
    userTaskList.addTask(task);
    $(':input').val('');
    $('#task-list').text("");
    // $('#task-list').append("<li id=" + tasks + "</li>" + userTaskList.tasks[i] + "</li>")
    for(i=0; i<userTaskList.tasks.length; i++) {
      console.log(userTaskList.tasks[i]);
      $('#task-list').append("<li id='"+ i + "'" + "</li>" + userTaskList.tasks[i] + "</li>");
    }
    $('li').click(function() {
      $(this).addClass('clicked');
    });
    $('li').dblclick(function() {
      $(this).toggle('clicked');

    });

  });
});
