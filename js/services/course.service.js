function CourseService(){
	this.courseList=[];

	this.add=function(course){
		this.courseList.push(course);
	}
	this.getAll=function(){
		return this.courseList;
	}
}