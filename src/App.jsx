import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"

const App = () => {
  return (
    <div className="base">
      <div className="base3">
        <div className="base2">
          <h1>Chatify</h1>
          <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/White%20Circle.png" alt="White Circle" width="25" height="25" />
        </div>
        <p>Connect easy. Connect fast.</p>
      </div>
      <div className='container'>
        <List />
        <Chat />
        <Detail />
        </div>
    </div>
  )
}

export default App