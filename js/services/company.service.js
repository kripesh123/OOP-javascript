function CompanyService(){
	this.companyList=[];

	this.add=function(company){
		this.companyList.push(company);
	};

	this.getAll=function(){
		return this.companyList;
	}

}