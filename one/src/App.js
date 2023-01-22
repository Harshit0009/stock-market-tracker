import './App.css';

import Modal2 from './components/Modal2';

function App() {
  return (
    <div className="site-wrap"> 

  <nav className="site-nav">

    <div className="name">
      
    </div>

    <ul>
      <li className="active"><a href="finalprofile.php">Profile settings</a>
      </li>
      <li className="active"><a href="index.php">Home</a></li>
      <li className="active"><a href="#0">About us</a></li>
      <li className="active"><a href="ContactUs.html">Contact us</a></li>
      <li className="active"><a href="logout.php">Logout</a></li>
    </ul>
  </nav>

  <main>

    <header>
      <h1 className="title">The Rental Company</h1>

      <nav className="nav-tabs" id="nav-tabs">
        <a href="#0" className="active">
          Services
        </a>
        <a href="obj.php">
          Available Items
        </a>
      </nav>
    </header>
    
    <div className="content-columns">
       <Modal2></Modal2>
       <Modal2></Modal2>
       <Modal2></Modal2>
       <Modal2></Modal2>
       <Modal2></Modal2>
       <Modal2></Modal2>
    
   
    </div>

  </main>

</div>


  );
}

export default App;
