function TeacherService(){
	this.teacherList=[];

	this.add=function(teacher){
		this.teacherList.push(teacher);
	}

	this.getAll=function(){
		return this.teacherList;
	}
}