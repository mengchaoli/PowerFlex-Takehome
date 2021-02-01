# PowerFlex-Takehome

## Environment
Please make sure you have **Docker** and **Postman** installed on your computer.

## Solution Explaination
For this backend, I am using **Node.js**  
For the database, I am using **MongoDB**  
<br />
During `docker-compose build` and `docker-compose up`, the seed data will be imported into MongoDB automatically.

## Instructions
1. Download this repo and unzip, then open your terminal within this folder.
![imagename](https://drive.google.com/uc?export=view&id=17VHnao_DXNQ0GqmemazHEZNkanaO-cUV)

2. Run below command to build docker container:
```bash
docker-compose build
```

3. When last step is done, run below magic command:
```bash
docker-compose up
```
 And you will see this:
![imagename](https://drive.google.com/uc?export=view&id=1wuyjxGzlP9OrDq0rD5Zu7AUlMgvAd1K2)

4. Cool! Our application is running! Next is to test it using Postman.

## Testing
Here we are going to use Postman to test our backend API.
### 1. Get all users preferences data.  
In this step, I highly recommend you copy and save one of the ```_id``` value from where I highlighted in the the response screen shot. We will need this id value in next few steps.

**Method:** _GET_  

**URL:** _http://localhost:8080/api/routes/users_  

**Body:** _N/A_  

**Result:**  

![imagename](https://drive.google.com/uc?export=view&id=1qGMafkSBvlhyh34TbDN_u-cOsg8j-DhJ)

### 2. Get one user preference for a given ID.  
In this step, please replace ```:id``` in the URL with the ID value that you saved from last step.

**Method:** _GET_  

**URL:** _http://localhost:8080/api/routes/user/:id_  

**Body:** _N/A_  

**Result:**  

![imagename](https://drive.google.com/uc?export=view&id=1tKbzwq64Buwhga05RfKk4o1TAUbRZ_P1)

### 3. Create a new user's preference.
In this step, we need to add a JSON object which contains all the required fields, in the request body.

**Method:** _POST_  

**URL:** _http://localhost:8080/api/routes/user-create_  

**Body:** _As shown in the Result screenshot_  

**Result:**  

![imagename](https://drive.google.com/uc?export=view&id=1OSPnUDHkSpoHeo0Ch2zBC5Pr4-lc9gqr)

And after this step, if you redo the step1 which is to retrieve all user preferences, you will see our new added record.

### 4. Update a user's preference for a given id.
In this step, please replace ```:id``` in the URL with the ID value that you saved before.   
And in the request body, please specify any attribute that you want to update. Those attributes will be updated.

**Method:** _POST_  

**URL:** _http://localhost:8080/api/routes/user-update/:id_  

**Body:** _As shown in the Result screenshot_  

**Result:**  

![imagename](https://drive.google.com/uc?export=view&id=1Z_7eaQAfEhRGHCYjD15u1Q1H26C6kgIN)
![imagename](https://drive.google.com/uc?export=view&id=1SXDbg2DgtJNDecVDRez8rjupsFakt6PC)

User preference got updated!

### 5. Get all sessions data.  
In this step, I highly recommend you copy and save one of the ```_id``` value from where I highlighted in the the response screen shot. We will need this id value in next step.

**Method:** _GET_  

**URL:** _http://localhost:8080/api/routes/sessions_  

**Body:** _N/A_  

**Result:**  

![imagename](https://drive.google.com/uc?export=view&id=1NHjBaa1aZq8LIIqczLGRUA6F5lpETcFf)

### 6. Get one session for a given ID.  
In this step, please replace ```:id``` in the URL with the ID value that you saved from last step(step5).

**Method:** _GET_  

**URL:** _http://localhost:8080/api/routes/session/:id_  

**Body:** _N/A_  

**Result:**  

![imagename](https://drive.google.com/uc?export=view&id=1e9rzL-Rt4lcLecQx-gQXs1I8EMCuJIJB)
