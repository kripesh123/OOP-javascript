function DealerService(){
	this.studentList=[];

	this.add=function(dealer){
		this.studentList.push(dealer)
	}

	this.getAll=function(){
		return this.studentList;
	}

}