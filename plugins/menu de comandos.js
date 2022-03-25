//NO MODIFIQUES EL NÚMERO DEL CREADOR NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS <3 
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT
//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO
//LLEVO AL REDEDOR DE 1 AÑO Y MEDIO EN LA ELABORACION DE ESTE BOT, SI TU LO EDITAS EN UNA SEMANA NO ERES TU EL CREADOR, SI LO EDITAS TOTALMENTE A TU MANERA SERIA UTULIZADO MI BOT COMO BASE Y AHI SI LO SERIAS  

let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`*╭═✦͜͡ৡৢ┅╡༊ALEX CAP࿑╞┅ৡৢ͜͡✦═╮*
*║┊: * ⃟ ⃟  ━ೋ๑——๑ೋ━* ⃟ ⃟ *      
*║◄🔥┢┅ீ͜ৡৢ͜͡✦━◇━ீ͜ৡৢ͜͡✦┅┧🔥►*
*║┊:*      ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈  
*║┊:𝑪𝒓𝒆𝒂𝒅𝒐𝒓 : Alexander Capiso*
*║┊:𝑵𝒖𝒎𝒆𝒓𝒐 : wa.me/51951856266*
*║┊:*      ┈ ┈ ┈ ┈ ┈  ┈ ┈ ┈ 
*║◄🔥┢┅ீ͜ৡৢ͜͡✦━◇━ீ͜ৡৢ͜͡✦┅┧🔥►*
*║┊: * ⃟ ⃟  ━ೋ๑——๑ೋ━* ⃟ ⃟ *      
*╰═✦͜͡ৡৢ┅╡༊ALEX CAP࿑╞┅ৡৢ͜͡✦═╯*

╭▬▬▬▬▬▬▬ *˚✯ཻ⸙ ̥•┉┉•
⊱✦•*<INFORMACIÓN|MENUS/>*
▋╭┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅   
▋┋ ℹ️️_${usedPrefix}donar_
▋┋ ℹ️️_${usedPrefix}infobot_
▋┋ ℹ️️_${usedPrefix}grupos_
▋┋ ℹ️️_${usedPrefix}instalarbot_
▋┋ ℹ️️_${usedPrefix}menusimple_
▋┋ ℹ️️_${usedPrefix}estado_
▋┋ ℹ️️_Bot_
▋┋ ℹ️️_¿Qué es un Bot?_
▋┋ ℹ️️_Términos y condiciones_
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙<REPORTA FALLOS EN ALGÚN COMANDO/>*
╰──────────────────╯
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ Reporta cualquier comando que falle para poder solucionarlo
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ 📬 _${usedPrefix}bug *comando con fallas*_
▋┋ 📬 _${usedPrefix}report *comando con fallas*_
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙<UNE UN BOT A TU GRUPO/>*
╰──────────────────╯
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ 🤖 _${usedPrefix}join *link del grupo*_ 
▋┋ 🤖 _${usedPrefix}bots_
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙<TOPS/>*
╰──────────────────╯
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ 🎖️ _${usedPrefix}top10gays_
▋┋ 🎖️ _${usedPrefix}toplind@s_
▋┋ 🎖️ _${usedPrefix}topput@s_
▋┋ 🎖️ _${usedPrefix}toppajer@s_
▋┋ 🎖️ _${usedPrefix}topotakus_
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙<NUMERO DEL CREADOR/>*
╰──────────────────╯
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ 👻 _${usedPrefix}owner_
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙<JUEGOS/>*
╰──────────────────╯
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ _${usedPrefix}math *modo*_
▋┋ 🎮 _${usedPrefix}ttt *nombre del la sala*_
▋┋ _${usedPrefix}delttt *nombre del la sala*_
▋┋ 🎮 _${usedPrefix}2gay *@tag*_
▋┋ _${usedPrefix}gay *@tag / nombre*_
▋┋ 🎮 _${usedPrefix}lesbi *@tag / nombre*_
▋┋ _${usedPrefix}pajero *@tag / nombre*_
▋┋ 🎮 _${usedPrefix}pajera *@tag / nombre*_
▋┋ _${usedPrefix}puta *@tag / nombre*_
▋┋ *🎮 _${usedPrefix}puto *@tag / nombre*_
▋┋ _${usedPrefix}rata *@tag / nombre*_
▋┋ 🎮 _${usedPrefix}manco *@tag / nombre*_
▋┋ _${usedPrefix}manca *@tag / nombre*_
▋┋ 🎮 _${usedPrefix}formarpareja_
▋┋ _${usedPrefix}dado_
▋┋ 🎮 _${usedPrefix}simsimi *texto*_
▋┋ _${usedPrefix}formartrio_
▋┋ 🎮 _${usedPrefix}love *@tag / nombre*_
▋┋ _${usedPrefix}amigorandom_
▋┋ 🎮 _${usedPrefix}slot *cantidad*_
▋┋ _${usedPrefix}ppt *piedra / papel / tijera*_
▋┋ 🎮 _${usedPrefix}prostituta *@tag / nombre*_
▋┋ _${usedPrefix}prostituto *@tag / nombre*_
▋┋ 🎮 _${usedPrefix}doxear *@tag / nombre*_
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙<DESCARGAS/>*
╰──────────────────╯
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ 📥 _${usedPrefix}imagen *texto*_
▋┋ 📥 _${usedPrefix}ytsearch *texto*_
▋┋ 📥 _${usedPrefix}dlaudio *link yt*_
▋┋ 📥 _${usedPrefix}dlvid *link yt*_
▋┋ 📥 _${usedPrefix}ytmp3 *link yt*_
▋┋ 📥 _${usedPrefix}ytmp4 *link yt*_
▋┋ 📥 _${usedPrefix}ytmp4.2 *link yt*_
▋┋ 📥 _${usedPrefix}play *titulo del audio*_
▋┋ 📥 _${usedPrefix}play2 *titulo del video*_
▋┋ 📥 _${usedPrefix}play3 *titulo del audio/video*_
▋┋ 📥 _${usedPrefix}play4 *titulo del video*_
▋┋ 📥 _${usedPrefix}letra *nombredelacanción*_
▋┋ 📥 _${usedPrefix}google *texto*_
▋┋ 📥 _${usedPrefix}googlef *texto*_
▋┋ 📥 _${usedPrefix}wikipedia *palabra clave*_
▋┋ 📥 _${usedPrefix}pinterestvideo *link de pinterest*_
▋┋ 📥 _${usedPrefix}tiktokaudio *link del tiktok*_
▋┋ 📥 _${usedPrefix}tiktok *link*_
▋┋ 📥 _${usedPrefix}spotify *autor, cancion*_
▋┋ 📥 _${usedPrefix}acortar *link*_
▋┋ 📥 _${usedPrefix}pinterest *texto*_
▋┋ 📥 _${usedPrefix}ssweb *link*_
▋┋ 📥 _${usedPrefix}igstory *username*_
▋┋ 📥 _${usedPrefix}igstalk *username*_
▋┋ 📥 _${usedPrefix}animeinfo *nombre del anime*_
▋┋ 📥 _${usedPrefix}twvid *link de video de twitter*_
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙<GESTION DE GRUPOS/>*
╰──────────────────╯
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ 💎 _${usedPrefix}admins *texto*_ 
▋┋ 💎 _${usedPrefix}añadir *numero*_ 
▋┋ 💎 _${usedPrefix}sacar @tag_
▋┋ 💎 _${usedPrefix}save *@tag + nombre de contacto*_
▋┋ 💎 _${usedPrefix}daradmin *@tag*_
▋┋ 💎 _${usedPrefix}quitaradmin *@tag*_
▋┋ 💎 _${usedPrefix}grupo *abrir / cerrar*_
▋┋ 💎 _${usedPrefix}enable welcome_
▋┋ 💎 _${usedPrefix}disable welcome_
▋┋ 💎 _${usedPrefix}enable antilink_
▋┋ 💎 _${usedPrefix}disable antilink_
▋┋ 💎 _${usedPrefix}enable antilink2_
▋┋ 💎 _${usedPrefix}disable antilink2_
▋┋ 💎 _${usedPrefix}enable delete_
▋┋ 💎 _${usedPrefix}disable  delete_ 
▋┋ 💎 _${usedPrefix}link_
▋┋ 💎 _${usedPrefix}notificar *texto*_
▋┋ 💎 _${usedPrefix}setname *Nuevo nombre del grupo*_
▋┋ 💎 _${usedPrefix}setdesc *Nueva descripción del grupo*_
▋┋ 💎 _${usedPrefix}infogrupo_
▋┋ 💎 _${usedPrefix}invocar *texto*_
▋┋ 💎 _${usedPrefix}del *responder a un mensaje del bot*_
▋┋ 💎 _${usedPrefix}fantasmas_
▋┋ 💎 _${usedPrefix}banchat_
▋┋ 💎 _${usedPrefix}unbanchat_
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙<CREADORES/>*
╰──────────────────╯
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ 🧧 _${usedPrefix}s_
▋┋ 🧧 _${usedPrefix}sticker_
▋┋ 🧧 _${usedPrefix}semoji_
▋┋ 🧧 _${usedPrefix}wasted_
▋┋ 🧧 _${usedPrefix}stonks_
▋┋ 🧧 _${usedPrefix}trash_
▋┋ 🧧 _${usedPrefix}rainbow_
▋┋ 🧧 _${usedPrefix}circle_
▋┋ 🧧 _${usedPrefix}trigger_
▋┋ 🧧 _${usedPrefix}stickermaker_
▋┋ 🧧 _${usedPrefix}attp *texto*_
▋┋ 🧧 _${usedPrefix}style *texto*_
▋┋ 🧧 _${usedPrefix}attp2 *texto*_
▋┋ 🧧 _${usedPrefix}stickerfilter_
▋┋ 🧧 _${usedPrefix}trigger *@tag*_
▋┋ 🧧 _${usedPrefix}mp3 *responde a un video*_
▋┋ 🧧 _${usedPrefix}img *responde a un sticker*_
▋┋ 🧧 _${usedPrefix}blur *responde a una imagen*_
▋┋ 🧧 _${usedPrefix}swm *link de imagen de google*_
▋┋ 🧧 _${usedPrefix}gif *responde a un sticker/video*_
▋┋ 🧧 _${usedPrefix}tovideo *responde a una nota de voz*_
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙<RANDOM|EXTRAS/>*
╰──────────────────╯
▋┋ 👾 _${usedPrefix}frase_
▋┋ 👾 _${usedPrefix}futbol_
▋┋ 👾 _${usedPrefix}Messi_
▋┋ 👾 _${usedPrefix}animal_
▋┋ 👾 _${usedPrefix}meme_
▋┋ 👾 _${usedPrefix}meme2_
▋┋ 👾 _${usedPrefix}meme3_
▋┋ 👾 _${usedPrefix}cat_
▋┋ 👾 _${usedPrefix}dog_
▋┋ 👾 _${usedPrefix}pikachu_
▋┋ 👾 _${usedPrefix}waifu_
▋┋ 👾 _${usedPrefix}blackpink_
▋┋ 👾 _${usedPrefix}reto_
▋┋ 👾 _${usedPrefix}verdad_
▋┋ 👾 _${usedPrefix}imagenrandom_
▋┋ 👾 _${usedPrefix}neko_
▋┋ 👾 _${usedPrefix}lolivid_
▋┋ 👾 _${usedPrefix}iqtest_
▋┋ 👾 _${usedPrefix}kpopitzy_
▋┋ 👾 _${usedPrefix}navidad_
▋┋ 👾 _${usedPrefix}loli_
▋┋ 👾 _${usedPrefix}gawrgura_
▋┋ 👾 _${usedPrefix}miku_
▋┋ 👾 _${usedPrefix}nyan_
▋┋ 👾 _${usedPrefix}pat_
▋┋ 👾 _${usedPrefix}itachi_
▋┋ 👾 _${usedPrefix}slap_
▋┋ 👾️ _${usedPrefix}pat_
▋┋ 👾 _${usedPrefix}perfil_
▋┋ 👾 _${usedPrefix}scan_
▋┋ 👾 _${usedPrefix}kpop_
▋┋ 👾 _${usedPrefix}qr *texto*_
▋┋ 👾 _${usedPrefix}afk *motivo*_
▋┋ 👾 _${usedPrefix}CristianoRonaldo_
▋┋ 👾 _${usedPrefix}pregunta *pregunta*_
▋┋ 👾 _${usedPrefix}mention *texto*_
▋┋ 👾 _${usedPrefix}spamchat *texto*_
▋┋ 👾 _${usedPrefix}traducir es *texto*_
▋┋ 👾 _${usedPrefix}zodiac *AAAA MM DD*_
▋┋ 👾 _${usedPrefix}readmore *texto1| texto2*_
▋┋ 👾 _${usedPrefix}calc *expresión matemática*_ 
▋┋ 👾 _${usedPrefix}spamwa *numero|texto|cantidad*_
▋┋ 👾 _${usedPrefix}readqr *responde a un código QR*_
▋┋ 👾 _${usedPrefix}anime *random / waifu / husbu /neko*_
▋┋ 👾 _${usedPrefix}subirestado *texto / responder video, imagen o gif*_
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙<EFECTOS PARA NOTAS DE VOZ O AUDIOS/>*
╰──────────────────╯
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ 🎤 _${usedPrefix}bass_
▋┋ 🎤 _${usedPrefix}deep_
▋┋ 🎤 _${usedPrefix}earrape_
▋┋ 🎤 _${usedPrefix}fast_
▋┋ 🎤 _${usedPrefix}fat_
▋┋ 🎤 _${usedPrefix}nightcore_
▋┋ 🎤 _${usedPrefix}reverse_
▋┋ 🎤 _${usedPrefix}robot_
▋┋ 🎤 _${usedPrefix}slow_
▋┋ 🎤 _${usedPrefix}smooth_
▋┋ 🎤 _${usedPrefix}vibracion *cantidad*_
┗━━━━━━━━━━━━━┛
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙<CHAT ANONIMO/>*
╰──────────────────╯
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ 📳 _${usedPrefix}start_
▋┋ 📳 _${usedPrefix}next_
▋┋ 📳 _${usedPrefix}leave_
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙<LOGOS PERSONALIZADOS/>*
╰──────────────────╯
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ 📝️ _${usedPrefix}logos_ (lista)
▋┋ 📝️ _${usedPrefix}lolice_
▋┋ 📝️ _${usedPrefix}simpcard_
▋┋ 📝️ _${usedPrefix}hornycard_ 
▋┋ 📝️ _${usedPrefix}lblackpink_
▋┋ 📝️ _${usedPrefix}coffe *texto*_
▋┋ 📝️ _${usedPrefix}tahta *texto*_
▋┋ 📝️ _${usedPrefix}nulis *texto*_
▋┋ 📝️ _${usedPrefix}nulis2 *texto*_
▋┋ 📝️ _${usedPrefix}lolice *@tag*_
▋┋ 📝️ _${usedPrefix}simpcard *@tag*_
▋┋ 📝️ _${usedPrefix}logotaza *texto*_ 
▋┋ 📝️ _${usedPrefix}logocesped *texto*_ 
▋┋ 📝️ _${usedPrefix}logotaza2 *texto*_ 
▋┋ 📝️ _${usedPrefix}flaming *texto*_ 
▋┋ 📝️ _${usedPrefix}logofire *texto*_
▋┋ 📝️ _${usedPrefix}logosky *texto*_
▋┋ 📝️ _${usedPrefix}logocorazon *texto*_
▋┋ 📝️ _${usedPrefix}logorandom *texto*_
▋┋ 📝️ _${usedPrefix}neonfire *texto*_ 
▋┋ 📝️ _${usedPrefix}technology *texto*_ 
▋┋ 📝️ _${usedPrefix}playa *texto*_ 
▋┋ 📝️ _${usedPrefix}ytcomment *texto*_ 
▋┋ 📝️ _${usedPrefix}lovemessages *texto*_
▋┋ 📝️ _${usedPrefix}cementerio *texto*_
▋┋ 📝️ _${usedPrefix}romanticdouble *texto*_
▋┋ 📝️ _${usedPrefix}romanticmessages *texto*_
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙<PROPIETARO DEL BOT/>*
╰──────────────────╯
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ 👑 _${usedPrefix}boost_
▋┋ 👑 _${usedPrefix}restart_
▋┋ 👑 _${usedPrefix}banlist_
▋┋ 👑 _${usedPrefix}binario1_
▋┋ 👑 _${usedPrefix}binario2_
▋┋ 👑 _${usedPrefix}banchat2_
▋┋ 👑 _${usedPrefix}actualizar_
▋┋ 👑 _${usedPrefix}CajaFuerte_
▋┋ 👑 _${usedPrefix}unbanchat2_
▋┋ 👑 _${usedPrefix}bc *texto*_
▋┋ 👑 _${usedPrefix}deletechat_
▋┋ 👑 _${usedPrefix}mutechat_
▋┋ 👑 _${usedPrefix}bcgc *texto*_
▋┋ 👑 _${usedPrefix}bcbot *texto*_
▋┋ 👑 _${usedPrefix}mutechat *all*_
▋┋ 👑 _${usedPrefix}setbye *@tag*_
▋┋ 👑 _${usedPrefix}banuser *@tag*_
▋┋ 👑 _${usedPrefix}deletechat *all*_
▋┋ 👑 _${usedPrefix}mutechat *chat*_
▋┋ 👑 _${usedPrefix}mutechat *group*_
▋┋ 👑 _${usedPrefix}enable *public*_
▋┋ 👑 _${usedPrefix}disable *public*_
▋┋ 👑 _${usedPrefix}deletechat *chat*_
▋┋ 👑 _${usedPrefix}deletechat *group*_
▋┋ 👑 _${usedPrefix}unbanuser *@tag*_
▋┋ 👑 _${usedPrefix}listgroup *@tag*_
▋┋ 👑 _${usedPrefix}enable *restrict*_
▋┋ 👑 _${usedPrefix}enable *autoread*_
▋┋ 👑 _${usedPrefix}setwelcome *@tag*_
▋┋ 👑 _${usedPrefix}enable *autoread*_
▋┋ 👑 _${usedPrefix}disable *autoread*_
■█🔥█■▰▱▰▱▰▱■█🔥█■
 *┏ೋ━ೋ✧ೋ━ೋ┓*
     *🔥𝑨𝒍𝒆𝒙 𝑪𝒂𝒑🔥*
 *┗ೋ━ೋ✧ೋ━ೋ┛*
*■█🔥█■▰▱▰▱▰▱■█🔥█■`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©Alexander Capiso - Bot', '𝙼𝙴𝙽𝚄 𝚂𝙸𝙼𝙿𝙻𝙴', `#menusimple`, 'ALEX CAP', `#alexcap`, '𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.fail = null
module.exports = handler
