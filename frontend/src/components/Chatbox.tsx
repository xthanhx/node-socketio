import React from "react"

const UsetList = (props: any) => {
  return (
    <div className='chatbox__user-list'>
      <h1>User list</h1>
      <div className='chatbox__user--active'>
        <p>Jack Thomson</p>
      </div>
      <div className='chatbox__user--busy'>
        <p>Angelina Jolie</p>
      </div>
      <div className='chatbox__user--active'>
        <p>George Clooney</p>
      </div>
      <div className='chatbox__user--active'>
        <p>Seth Rogen</p>
      </div>
      <div className='chatbox__user--away'>
        <p>John Lydon</p>
      </div>
    </div>
  )
}

const Message = ({
  isOwner = true,
  name = 'message name',
  message = 'message message'
}: any) => {
  return (
    <div className={`chatbox__messages mb-2 ${isOwner ? 'owner' : 'guest'}`}>
      <div className="chatbox__messages__user-message">
        <div className="chatbox__messages__user-message--ind-message mb-4">
          <p className="name">{name}</p>
          <br/>
          <p className="message">{message}</p>
        </div>
      </div>
    </div>
  )
}

const ChatboxMessages = (props: any) => {
  return (
    <div className="m-4">
      <Message/>

      <Message isOwner={false}/>
    </div>
  )
}

const ChatboxInput = (props: any) => {
  return (
    <form>
      <input type="text" placeholder="Enter your message"/>
    </form>
  )
}

const ChatboxContext = React.createContext({})

const ChatboxProvider = ({children}: any) => {
  return (
    <ChatboxContext.Provider value={{}}>
      {children}
    </ChatboxContext.Provider>
  )
}

const Chatbox = (props: any) => {
  return (
    <ChatboxProvider>
      <div className='container' >
        <div className='chatbox'>
          <div className="flex h-full">
            <div>
              <ChatboxMessages />
              <ChatboxInput />
            </div>
            <UsetList />
          </div>
        </div>
      </div>
    </ChatboxProvider>
  )
}

export default Chatbox