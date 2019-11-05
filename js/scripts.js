//Backend
function TaskList() {
  this.tasks = []
}

TaskList.prototype.addTask = function (task) {
  this.tasks.unshift(task);

};
// TaskList.prototype.assignId = function (task) {
  //   this.currentId += 1;
  //   return this.currentId;
  //
  //   };

  // function Task(task) {
    //   this.task = task,
    // };

    //UI
    var userTaskList = new TaskList ();

    $(document).ready(function() {

      $("#task-input").submit(function(event) {
        event.preventDefault();
        // $("#").hide();
        var task = $("input#task").val();
        userTaskList.addTask(task);
        $(':input').val('');
  $('#task-list').append("<li class='tasks'>" + userTaskList.tasks[0] + "</li>")
  $(".tasks").click(function() {
    $(this).addClass('clicked');

      });
  $(".tasks").dblclick(function() {
    $(this).toggle('clicked');

      });

      // $("#make-list").click(function() {
      //   console.log("hi");
      //   for(i =0; i<userTaskList.tasks.length; i++) {
      //   $('#task-list').append("<li>" + userTaskList.tasks[i] + "</li>")
      // };
      // $('li').click(function() {
      //   $(this).toggleClass('clicked');
      // })
      });
    });
