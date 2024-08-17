import "./chat.css"
import EmojiPicker from "emoji-picker-react"
import { useRef, useState, useEffect } from "react"

const Chat = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState("");
  const endRef = useRef(null);

  const handleEmoji = (e) => {
    setMessage(prev => prev + e.emoji);
    setShowEmoji(false);
  }

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  })

  return (
    <div className='chat'>
      <div className="header">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>John Doe</span>
            <p>Lorem ipsum dolor, sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nostrum aut voluptatum. Quisquam id consequatur rerum odit. Obcaecati dolor eaque iure adipisci atque hic harum! Voluptatem fugit ipsam obcaecati. Laudantium.</p>
            <span>1 min  ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nostrum aut voluptatum. Quisquam id consequatur rerum odit. Obcaecati dolor eaque iure adipisci atque hic harum! Voluptatem fugit ipsam obcaecati. Laudantium.</p>
            <span>1 min  ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nostrum aut voluptatum. Quisquam id consequatur rerum odit. Obcaecati dolor eaque iure adipisci atque hic harum! Voluptatem fugit ipsam obcaecati. Laudantium.</p>
            <span>1 min  ago</span>
          </div>
        </div>
        <div className="message own">
          
          <div className="texts">
            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/65/78ce0081ad11e681d7bb31b0a632ef/starry-night.jpg" alt="" />   
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nostrum aut voluptatum. Quisquam id consequatur rerum odit. Obcaecati dolor eaque iure adipisci atque hic harum! Voluptatem fugit ipsam obcaecati. Laudantium.</p>
            <span>1 min  ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nostrum aut voluptatum. Quisquam id consequatur rerum odit. Obcaecati dolor eaque iure adipisci atque hic harum! Voluptatem fugit ipsam obcaecati. Laudantium.</p>
            <span>1 min  ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nostrum aut voluptatum. Quisquam id consequatur rerum odit. Obcaecati dolor eaque iure adipisci atque hic harum! Voluptatem fugit ipsam obcaecati. Laudantium.</p>
            <span>1 min  ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="footer">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />

        </div>
        <input type="text" placeholder="Type a message" value={message} onChange={(e)=>setMessage(e.target.value)} />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setShowEmoji(prev => !prev)} />
          <div className="picker">
            <EmojiPicker open={showEmoji} onEmojiClick={handleEmoji}/>
          </div>
        </div>
        <button className="sendBtn">Send</button>
      </div>
    </div>
  )
}

export default Chat