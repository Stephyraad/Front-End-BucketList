$(document).ready(function(){

// add task to the list on button "Add" is clicked
	$("#addButton").click(addTask);

//remove task from bucket list
 	$("#list").on("click", "a", function(){
 		var findTask= $(this).closest("li");
 		var taskText= findTask.find("span").text();
 		var confirmation ="are you sure you want to remove " + taskText + " from the list?"; 
 		if(window.confirm(confirmation)){
 				findTask.remove();
 		};

 	}); 

 //add class and green font color and move to new list for completed tasks
	 $("#list").on("change", "input:checkbox", function(){
	 	var task= $(this).closest("li");
	 	if ($(this).is(":checked")){
	 		task.find(".delete").remove(); 
	 		task.addClass("completed");
	 		$("#completedList").append(task);
		 }
		 
	 });


// removed green color and move back to uncompleted list
	$("#completedList").on("change", "input:checkbox", function(){
		var task = $(this).closest("li");
		if($(this).is(":checked")){
			console.log("ok")
		}
		else{
			task.removeClass("completed");
			task.append("<a href='#' class='delete'>Delete</a>");
		 	$("#list").append(task);
		}
	});


	$("#newTask").keydown(function(e){
		if(e.keyCode=== 13){
			addTask();
		}
	});

});

function addTask() {
	var newTask = $("#newTask").val();
	if(newTask.length === 0) {
		alert("You must enter an task to be added.");
	}

	var listTask = createListTask(newTask);
	$("#list").append(listTask);
	$("#newTask").val("");
}


function createListTask(newTask) {
	var listTask = "<li><span>"+ newTask +"</span>"; 
	listTask += "<input type='checkbox'>";
	listTask += "<a href='#' class='delete'>Delete</a></li>";
	return listTask; 
}

