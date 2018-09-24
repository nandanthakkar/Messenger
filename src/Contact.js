import React, { Component } from 'react';

import './messaging.css'
import Message from './Message';

class Messages extends Component {

  constructor(){
    super();
    
    this.state = { messages: {
            "total": 3,
            "offset": 0,
            "limit": 25,
            "items": [{
                "id": "08aeefrd-7408-11e4-9f47-cb5641234081d04",
                "from": "+17329910138",
                "to": [{
                  "number": "+17327704100",
                  "status": "received"
                }],
                "direction": "in",
                "created_epoch": 1476659032,
                "created_at": "2016-10-16T23:03:52+00:00",
                "is_new": false,
                "text": "We received this message"
              },
              {
                "id": "8f7a99b533655f9482bcfe25bb845a86d612c28344",
                "from": "+17329910138",
                "to": [{
                  "number": "+17326838492",
                  "status": "sent"
                }],

                "direction": "out",
                "created_epoch": 1476659133,
                "created_at": "2016-10-16T23:05:33+00:00",
                "is_new": true,
                "text": "We sent this message"
              },
              {
                "id": "08aeefrd-7408-11e4-9f47-cb56440821d56",
                "from": "+17329910139",
                "to": [{
                  "number": "+17327704100",
                  "status": "received"
                }],
                "direction": "in",
                "created_epoch": 1476659134,
                "created_at": "2016-10-16T23:03:52+00:00",
                "is_new": false,
                "text": "We received this message 2"
              },
              {
                "id": "08aeefrd-7408-11e4-9f47-cb564408112d23",
                "from": "+17329910139",
                "to": [{
                  "number": "+17327704100",
                  "status": "received"
                }],
                "direction": "in",
                "created_epoch": 1476659167,
                "created_at": "2016-10-16T23:03:52+00:00",
                "is_new": true,
                "text": "We received this message 2"
              },
              {
                "id": "08aeefrd-7408-11e4-9f47-cb564408342",
                "from": "+17329910139",
                "to": [{
                  "number": "+17327704100",
                  "status": "received"
                }],
                "direction": "in",
                "created_epoch": 1476659178,
                "created_at": "2016-10-16T23:03:52+00:00",
                "is_new": true,
                "text": "We received this message 2"
              },
              {
                "id": "08aeefrd-7408-11e4-9f47-cb5644086842",
                "from": "+17329910139",
                "to": [{
                  "number": "+17327704100",
                  "status": "received"
                }],
                "direction": "in",
                "created_epoch": 1476659567,
                "created_at": "2016-10-16T23:03:52+00:00",
                "is_new": false,
                "text": "We received this message 2"
              },
              {
                "id": "08aeefrd-7408-11e4-9f47-cb564402283e432",
                "from": "+17329910139",
                "to": [{
                  "number": "+17327704100",
                  "status": "received"
                }],
                "direction": "in",
                "created_epoch": 1476659125,
                "created_at": "2016-10-16T23:03:52+00:00",
                "is_new": true,
                "text": "We received this message 2"
              },
              ,
              {
                "id": "08aeefrd-7408-11e4-9f47-cb564402280e432",
                "from": "+17329910149",
                "to": [{
                  "number": "+17327704100",
                  "status": "received"
                }],
                "direction": "in",
                "created_epoch": 1476629125,
                "created_at": "2016-10-16T23:03:52+00:00",
                "is_new": false,
                "text": "We received this message 2"
              }
            ]
          }
    }
  }

  onClick(item){
    console.log("You read message with id " + item.id)
    item.is_new = false;
    this.state.messages.items.filter(function(a){return a.id == item.id})[0].is_new = false;
    this.setState(this.state);
    this.render();
  }



  showMessages = () => {

    const new_message_count = this.state.messages.items.reduce(function(a, b){ return b.is_new == true ? a + 1: a}, 0)
    return  <div className='inbox_people'><h4 className='headind_srch'> Messenger : {new_message_count} Unread Messages</h4>
      <ul className='inbox_chat'>
          {this.state.messages.items.sort(function(a, b) {
            return b.created_epoch - a.created_epoch
            }).map(item => <div className='chat_list'><div className='chat_people' ><div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/>
             </div><li  key={item.id} onClick={this.onClick.bind(this, item)}>
            <div className='chat_ib'>
            <span >{item.is_new == true ? <div className='active_chat'><h5 >{item.to[0].number} </h5> <p> {item.text} </p> </div>: 
                    <div ><h5 >{item.to[0].number} </h5> <p> {item.text} </p> </div>} </span>
            </div>
            </li> </div></div>)}
      </ul>
    </div> 
  };

  

  render(){
    return (
      <div>
        {this.showMessages()}
      </div>
    )
  }
}

export default Messages