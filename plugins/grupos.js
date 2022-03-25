let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  
let info = `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de Alex Cap - BOT*

*➤ Grupos oficiales del Bot:*
*1.- https://chat.whatsapp.com/Bs0EAPB8qxf8yR7loELb7W*

*2.- https://chat.whatsapp.com/DgdjNeD6GSoCij3M5L1RnA*

*3.- https://chat.whatsapp.com/LEuqnG9NYRULoZurV0EIRP*

*4.- https://chat.whatsapp.com/FRc7UdRVIGHD2Bfuu1ngAa*

*5.- https://chat.whatsapp.com/Bk7Wvt1tetg8w5thrHaXti*
`.trim() 

conn.sendMessage(m.chat, info, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": '🔥 ALEX CAP - BOT 🔥', "jpegThumbnail": fs.readFileSync(`./Menu2.jpg`)}}}})}

handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler
