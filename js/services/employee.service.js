function EmployeeService(){
	this.employeeList=[];

	this.add=function(employee){
		 this.employeeList.push(employee);
	}

	this.getAll=function(){
		return this.employeeList;
	}
}