"use strict";

class Envelope {
    constructor(room, user, message, adapterName) {
        if (!room || !user || !message || !adapterName) {
            throw new Error(`Envelope requires all fields: room: ${room}  
                user: ${user} message: ${message} adapterName: ${adapterName}`);
        }
        this.room = room;
        this.user = user;
        this.message = message;
        this.adapterName = adapterName;
    }
}

class Response {
  constructor(bot, message, match, adapter) {
    this.bot = bot;
    this.message = message;
    this.match = match;
    //console.log("response match", match)
    this.envelope = new Envelope(message.room, message.user, message, adapter.adapterName);
  }

  // Actually takes a list of 1 to n arguments
  send(...strings) {
    // Coffeescript sends a list of arguments, and magically converts them to an array of
    // args. Why? No clue.
    console.log("RESPONSE SENDING", this.envelope, strings);
    this.bot.send(this.envelope, strings)
  }

  // Actually takes a list of 1 to n arguments
  emote() {
    let strings = 1 <= arguments.length ? [].slice.call(arguments, 0) : [];
    this.bot.emote()
  }

  // Actually takes a list of 1 to n arguments
  reply() {
    //console.log("Response Replying", this.envelope, this.envelope.user.name, strings);
    let strings = 1 <= arguments.length ? [].slice.call(arguments, 0) : [];
    this.bot.reply(this.envelope, this.envelope.user.name, strings)
  }

  // Actually takes a list of 1 to n arguments
  topic() {
    let strings = 1 <= arguments.length ? [].slice.call(arguments, 0) : [];
  }

  // Actually takes a list of 1 to n arguments
  play() {
    let strings = 1 <= arguments.length ? [].slice.call(arguments, 0) : [];
  }

  // Actually takes a list of 1 to n arguments
  locked() {
    let strings = 1 <= arguments.length ? [].slice.call(arguments, 0) : [];
  }

  random(items) {
    return items[Math.floor(Math.random() * items.length)]
  }

  finish() {

  }

  http(url, options) {
    return this.bot.http(url, options);
  }
}

module.exports = Response;
