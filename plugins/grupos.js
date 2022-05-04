let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  
let info = `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de Alex Cap - Bot*

*➤ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/Bs0EAPB8qxf8yR7loELb7W

*2.-* https://chat.whatsapp.com/GYmLeLQSKz2Hn8TbBTz2WZ

*3.-* https://chat.whatsapp.com/JpyqzcoFNj09SUcHsfgTgS

*4.-* https://chat.whatsapp.com/LunAhHyVW6i69xOvY5ZLcm
`.trim() 

conn.sendMessage(m.chat, info, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": '🔥 Alex Cap - Bot 🔥', "jpegThumbnail": fs.readFileSync(`./Menu2.jpg`)}}}})}

handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler
