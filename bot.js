/*
Gordon: Team chatroom built inside Git-Bash(Terminal).
Author: Rahul Sonwalkar (github.com/rahulsonwalkar)
Date: 6/6/2017
*/

//Modules
var irc = require('irc');
var readline = require('readline');

//constants
const username = 'Vito_Corleone';
const channelName = '#atokluhar';   // Has to start with a '#'
const chatroom = 'irc.freenode.net';

//Create a bot and connect to Channel
var client = new irc.Client('irc.freenode.net', username, {
    channels: [channelName],
});

//Listen for any incoming messages on the channel
client.addListener('message', function (from, to, message) {
    console.log(from + ' @ ' + to.substring(1) + '=>  ' + message);  // Log the message in the console. Need substring to exculde the '#'
});

//Basics on I/O in the interface. (Need this for typing in the console).
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Need this function because client.say() wouldn't take 'input' directly as an arguement.
var inputlogger = function (input) {
  return input;
}

//'line' is called everytime there is an event emmited on the console.
rl.on('line', (input) => {
  //send the message to the chatserver when the console event is emmitted
  client.say(channelName, inputlogger(input));
  //Log your message in the console.
  console.log(username + '(you) @ ' + channelName.substring(1) + ' => ' + input);
});

//TO-DO: Add ping sound for new message received.
//TO-DO: Add bot commands (enable/disable sound, change username).
//TO-DO: Make links clickable if possible.
