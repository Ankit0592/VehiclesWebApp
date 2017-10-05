# Vehicles App

### Frameworks:  
* **Back-end:** Flask
* **Front-end:** ReactJS    
        
### Requirements:   
* Python, Flask and npm are installed on system     
    
### Assumptions:  
* Anyone can access the webpage. It has no authentication mechanism.    
* Data length is greater than 1000 records.   
* Back-end api returns 250 records at a time and next set of records is fetched one page before the last page is reached.   
* Users can Add/Remove the records from favorite(It is like toggling the favorite record).   
* Column filters are applied only on currently fetched records.  
    
### Steps to run application:   
1. Download and unzip the project     
2. From command-prompt, cd vehicles-app/server  
3. Run command: python server.py   
4. Open another command-prompt terminal, cd vehicles-app       
5. Run command: npm install     
6. Run command: npm start   
7. Open browser at: http://localhost:8080      
