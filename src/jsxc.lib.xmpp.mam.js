/**
 * Implements XEP-0313: Messge Archive Management
 *
 * @namespace jsxc.xmpp.mam
 * @see {@link http://xmpp.org/extensions/xep-0313.html}
 */

/**
 *General policy is to load the history when a chat box or room opens up.
 *The user will firstly request for n messages and when it scrolls
 *up and reaches the end, then it again request for another n messages.
 *It goes on further untill no message is left in the archive. The
 *server replies with no more message in the history
 *
 *archivedMessagePageSize = '20' //No. of messages in one page
 *
 *rsmAttributes = ['max', 'first', 'last', 'after', 'before', 
 *'index', 'count']
 *
 *mamAttributes = ['with', 'start', 'end']
 *
 *messageArchiving = 'never' // Supported values are 'always', 'never',
 * 'roster' (See https://xmpp.org/extensions/xep-0313.html#prefs )
 *
 *mucHistoryMaxStanzas: undefined, // Takes an integer, limits the 
 *amount of messages to fetch from chat room's history
 *
 */

/*jsxc.xmpp.mam = {
  conn: jsxc.xmpp.conn
};

jsxc.xmpp.mam.init = function(){
  var self = jsxc.xmpp.mam;
  self.getHistory(userid, count, before);
};*/

//example code to query an personal archive for conversations with 
//juliet@capulet.com

/*
connection.mam.query("you@example.com", {
  "with": "juliet@capulet.com",
  onMessage: function(message) {
            console.log("Message from ", $(message).find("forwarded message").attr("from"),
                ": ", $(message).find("forwarded message body").text());
            return true;
  },
  onComplete: function(response) {
            console.log("Got all the messages");
  }
    });
*/


/*jsxc.xmpp.mam.getHistory = function (userid, count, before){
    var q = {
      onMessage: function(message) {
        //attach a code in here to view the message in the chat window

        var id = message.querySelector('result').getAttribute('id');
        var fwd = message.querySelector('forwarded');
        var d = fwd.querySelector('delay').getAttribute('stamp');
        var msg = fwd.querySelector('message');
        var msg_data = {
            id:id,
            timestamp: (new Date(d)),
            timestamp_orig: d,
            from: Strophe.getBareJidFromJid(msg.getAttribute('from')),
            to: Strophe.getBareJidFromJid(msg.getAttribute('to')),
            type: msg.getAttribute('type'),
            body: msg.getAttribute('body'),
            message: Strophe.getText(msg.getElementsByTagName('body')[0])
        };

        var sender = Strophe.getBareJidFromJid(msg_data.from);

        console.log(d + ': ' + sender + ' said: ' + msg_data.message + '<br>');
        return true;
      },

      onComplete: function(response) {
        //attach a code in here to notify when all the message has reached
        
    	console.log(response);
        return true;
      }
    };

    $.extend(q, {'with': userid, 'before': before, 'max': count});

    jsxc.xmpp.conn.mam.query(jsxc.bid, q);
  }
};
*/
  
