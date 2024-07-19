##### Basic Authentication
1. Username and password should pass in headers like
	1. Authorization: Basic Base64(username:password)
2. Basic auth code 
```
	  
 validate(username: string, password: string){  
  const base64Encoded: string = btoa(`${username}:${password}`);  
  const httpHeaders = new HttpHeaders()  
    .append('Authorization', 'Basic ' + base64Encoded);  
  
  this.http.get<string>(this.VALIDATE_URL,{headers: httpHeaders})  
    .subscribe(data=>  
    {  
      console.log(data);  
      this.isAuthenticated=true;  
      this.isAuthenticated$.next(true);  
  
    },  
      error => {  
        console.log(error);  
         this.isAuthenticated = false;  
        this.isAuthenticated$.next(false);  
      })  
}
```
1. Must enable CORS in the backend
2. JWT Security Flow
	1. ![[Pasted image 20240714163232.png]]
 
    ##### JWT
     1. three parts
	     1. first : algo,type
	     2. second :  payload
	     3. three: signature
	 1. spring boot token generation : using filter and return as response header
		 1. sessionCreation policy : STATELESS
		 2. securityContext not required as it required for JSESSIONID
		 3. corsconfig.setExposedHeaders("") -> response header to send jwt
	1. spring boot token generation : using service and return as response

#####   CSRF
1. Must do the settings in the backend API to handle CSRF for POST, PUT,PATCH API's
	1. status code : 401 


