import "./chatlist.css";
import { useState } from "react";

const Chatlist = () => {
  const [addChat, setAddChat] = useState(false);
  return (
    <div className='chatlist'>
      <div className="search">
          <div className="searchbar">
              <img src="./search.png" alt="" />
              <input type="text" placeholder="Search"/>
          </div>
          <img src={addChat ? "./minus.png" : "./plus.png"} alt="" className="add" onClick={()=>setAddChat(prev=>!prev)} />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>John Doe</span>
          <p>Hello there</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>John Doe</span>
          <p>Hello there</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>John Doe</span>
          <p>Hello there</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>John Doe</span>
          <p>Hello there</p>
        </div>
      </div>
    </div>
  )
}

export default Chatlist