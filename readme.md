<h1><b>Stock market price tracker<b></h1>
  <p> We have created a stock market price tracker, as of now it works only for one stock and gives the opening, highest and lowest price for previous 10 days from the date of 22/01/2023. </p>
  <p> Tracking of real time prices is not possible with some API's cause they only allow limited number of free calls that we can make a month. Also they have some time delay between the subsequent fetchs. <p>
  <hr>
  <h2> Basic Idea </h2> 
  <p> The basic idea that we want to develop was to develop a proper stock portfolio kind of website for a user, in which when user logs in he adds the stock which he holds, with their purchasin amount to website. Then by using the real time fetch, the website will keep track of those share prices for the user. Whenever the profit will rise to the profit percentage set by user it will send a notification to the user.</p>
 <br>
  
  <h3> Implementation </h3>
    Right now the implementation of the idea is minimal. It has very limited functionality.
    <ul type = "square">
      <li> We have fetched the data of 10 previous day prices of a particular stock using express and stored it in the JSON file. </li>
      <li> A get request is created from backend which sends the data to the frontend</li>
      <li> The data is fetched by react and then it is displayed on a static webpage which is responsive but only displays the data and has no post method in it. Whenever we load the page, it displays data of some another day.</li>
      <li> We have also created backend connectivity for login system. The login system can be tested using "Postman" by sending API on it. <b> Address -: /api/v1/users/signup for signup and /api/v1/users/login for login. <ul type = "disc">
        <li> signup model:= { name, email, password, passwordConfirm } </li>
        <li> login model:= { email, password }  </li> </ul> </li> 
       <li> MongoDB is implemented as Backend </li>         
      <li> The webpage for login/signup is yet to be created </li></ul>
      <hr>    
    <h3> Execution </h3>
        <p> Run "npm start" for app.js</p>
        <p> Run "npm start" for index.js in frontend folder for starting react. </p>
          <p> For re-writing the stock data to backend file run - "node index.js" in root directory. <b>NOTE</b> - Only 100 requests can be made to the API and 25 were only made at the time of submission. </p>
  
  
