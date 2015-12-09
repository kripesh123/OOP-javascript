function UserService(){
	this.userList=[];

	this.add=function(user){
		this.userList.push(user);
	}

	this.getAll=function(){
		return this.userList;
	}
}