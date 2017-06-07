var player = require('play-sound')(opts = {})

player.play('KoraBotmp3.mp3', function(err){
  if (err) throw err
})
