import React, { Component } from 'react';
//import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux';

//import { fetchNews } from '../../actions/getNews';
//import NewsItem from './messagesItem';
//import './custom.css'
import './messaging.css'
import Message from './Message';
/*const message ={"items": [
        {"name": "Nandan"}, {"name": "Jolly"}]};*/
// { "total": 2,
//       "offset": 0, "limit": 25, "items": [
//         {
//         "id": "08aeefrd-7408-11e4-9f47-cb5644081d04", "from": "+17329910138",
//         "to": [
//         {
//         "number": "+17327704100", "status": "received"
//         }
//         ],
//         "direction": "in",
//         "created_epoch": 1476659032,
//         "created_at": "2016-10-16T23:03:52+00:00",
//         "is_new": false,
//         "text": "We received this message",
//         };

class Messages extends Component {

  // componentDidMount() {
  //   this.props.fetchNews()
  // }

  constructor(){
    super();
    /*this.state = {
      messages: {"items": [
        {"name": "Nandan", "key": "1", "is_new": true, "text": "We sent this message"},
        {"name": "Jolly", "key":"2", "is_new": false, "text": "We sent this message",}]}
    }*/
    this.state = { messages: {
            "total": 3,
            "offset": 0,
            "limit": 25,
            "items": [{
                "id": "08aeefrd-7408-11e4-9f47-cb5644081d04",
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
                "id": "8f7a99b533655f9482bcfe25bb845a86d6c28344",
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
                "id": "08aeefrd-7408-11e4-9f47-cb5644081d56",
                "from": "+17329910139",
                "to": [{
                  "number": "+17327704100",
                  "status": "received"
                }],
                "direction": "in",
                "created_epoch": 1476659134,
                "created_at": "2016-10-16T23:03:52+00:00",
                "is_new": true,
                "text": "We received this message 2"
              }
            ]
          }
    }
  }

  showTextMessage(item){
    alert("test");
    console.log(item)
  }

  showMessages = () => {

    const { messages } = this.state.messages
    const new_message_count = this.state.messages.items.reduce(function(a, b){ return b.is_new == true ? a + 1: a}, 0)
    return  <div className='inbox_people'><h1> Messenger : {new_message_count} Unread Messages</h1>
      <ul className='inbox_chat'>
          {this.state.messages.items.sort(function(a, b) {
            return b.created_epoch - a.created_epoch
            }).map(item => <div className='chat_list'><div className='chat_people' ><li key={item.id} onClick={this.showTextMessage.bind(this, item)}>
            <div className='chat_ib'>
            <span >{item.is_new == true ? <h5>{item.from} </h5> : item.from} </span>
            
            <p> {item.text} </p> 
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

/// const mapStateToProps = state => {
//   return {
//     messages: state.messages,
//     changeOrder: state.messages.changeOrder
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//     { fetchNews }, dispatch);
// };

export default Messages