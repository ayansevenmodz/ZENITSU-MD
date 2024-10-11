import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';
import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import config from '../../config.cjs';

// Get total memory and free memory in bytes
const totalMemoryBytes = os.totalmem();
const freeMemoryBytes = os.freemem();

// Define unit conversions
const byteToKB = 1 / 1024;
const byteToMB = byteToKB / 1024;
const byteToGB = byteToMB / 1024;

// Function to format bytes to a human-readable format
function formatBytes(bytes) {
  if (bytes >= Math.pow(1024, 3)) {
    return (bytes * byteToGB).toFixed(2) + ' GB';
  } else if (bytes >= Math.pow(1024, 2)) {
    return (bytes * byteToMB).toFixed(2) + ' MB';
  } else if (bytes >= 1024) {
    return (bytes * byteToKB).toFixed(2) + ' KB';
  } else {
    return bytes.toFixed(2) + ' bytes';
  }
}
// Bot Process Time
const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds

// Uptime
const uptimeMessage = `*I am alive now since ${day}d ${hours}h ${minutes}m ${seconds}s*`;
const runMessage = `*☀️ ${day} Day*\n*🕐 ${hours} Hour*\n*⏰ ${minutes} Minutes*\n*⏱️ ${seconds} Seconds*\n`;

const xtime = moment.tz("Africa/Moçambique").format("HH:mm:ss");
const xdate = moment.tz("Africa/Moçambique").format("DD/MM/YYYY");
const time2 = moment().tz("Africa/Moçambique").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `Good Afternoon 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `Good Evening 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `Good Evening 🌃`;
} else {
  pushwish = `Good Night 🌌`;
}

const test = async (m, Matrix) => {
  let selectedListId;
  const selectedButtonId = m?.message?.templateButtonReplyMessage?.selectedId;
  const interactiveResponseMessage = m?.message?.interactiveResponseMessage;
  if (interactiveResponseMessage) {
    const paramsJson = interactiveResponseMessage.nativeFlowResponseMessage?.paramsJson;
    if (paramsJson) {
      const params = JSON.parse(paramsJson);
      selectedListId = params.id;
     // console.log(selectedListId);
    }
  }
  const selectedId = selectedListId || selectedButtonId;
  
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
       
       const mode = config.MODE === 'public' ? 'public' : 'private';
       const pref = config.PREFIX;
           
        const validCommands = ['list', 'help', 'menu'];

  if (validCommands.includes(cmd)) {
    let msg = generateWAMessageFromContent(m.from, {
      viewOnceMessage: {
        message: {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `╭─────────────━┈⊷
│☪️ ʙᴏᴛ ɴᴀᴍᴇ: *💙ZENITSU-MD💙*
│☪️ ᴠᴇʀꜱɪᴏɴ: 2.2.0
│☪️ ᴏᴡɴᴇʀ : *AYAN SEVEN*      
│☪️ ɴᴜᴍʙᴇʀ: 258871168283
│☪️ ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│☪️ ᴍᴏᴅᴇ: *${mode}*
│☪️ ᴘʀᴇғɪx: [${pref}]
╰─────────────━┈⊷ `
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "©POWERED BY ZENITSU-MD"
            }),
            header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./src/zenitsu.jpg')}, { upload: Matrix.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: "",
                  hasMediaAttachment: false  
                }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
          "name": "quick_reply",
          "buttonParamsJson": JSON.stringify({
            display_text: "ALIVE",
            id: `${prefix}alive`
          })
        },
        {
          "name": "quick_reply",
          "buttonParamsJson": JSON.stringify({
            display_text: "PING",
            id: `${prefix}ping`
          })
        },
                {
                  "name": "single_select",
                  "buttonParamsJson": `{"title":"💙𝚻𝚫𝚸 𝐅𝚯𝚪 𝚯𝚸𝚵𝚴 𝚳𝚵𝚴𝐔💙",
                 "sections":
                   [{
                    "title":"*❣️ZENITSU-MD ALLMENU❣️*",
                    "highlight_label":"❣️ALLMENU❣️",
                    "rows":[
                      {
                       "header":"",
                       "title":"*💙ALL MENU💙*",
                       "description":"❣️ZENITSU-MD ALLMENU❣️",
                       "id":"View All Menu"
                      },
                      {
                        "header":"",
                        "title":"*💙DOWNLOAD MENU💙*",
                        "description":"❣️ZENITSU-MD ALL DOWNLOAD FEATURES❣️",
                        "id":"Downloader Menu"
                      },
                      {
                        "header":"",
                        "title":"*💙GROUP MENU💙*",
                        "description":"❣️FEATURES THAT ARE ONLY AVILABLE FOR GROUP❣️",
                        "id":"Group Menu"
                      },
                      {
                        "header":"",
                        "title":"*💙TOOL MENU💙*",
                        "description":"❣️ZENITSU-MD TOOL MENU❣️",
                        "id":"Tool Menu"
                      },
                      {
                        "header":"",
                        "title":"*💙MAIN MENU💙*",
                        "description":"❣️ZENITSU-MD MAIN MENU❣️ ",
                        "id":"Main Menu"
                      },
                     {
                        "header":"",
                        "title":"*💙OWNER MENU💙*",
                        "description":"❣️FEATURES THAT ARE ONLY FOR MY OWNER❣️",
                        "id":"Owner Menu"
                      },
                      {
                        "header":"",
                        "title":"*💙AI MENU💙*",
                        "description":"❣️ZENITSU-MD SHOW ME AI MENU❣️",
                        "id":"Ai Menu"
                      },
                      {
                        "header":"",
                        "title":"*💙SEARCH MENU💙*",
                        "description":"❣️ZENITSU-MD SHOW ME SEARCH MENU ❣️ ",
                        "id":"Search Menu"
                      },
                      {
                        "header":"",
                        "title":"*💙STALK MENU💙*",
                        "description":"❣️ZENITSU-MD SHOW ME STALK MENU❣️",
                        "id":"Stalk Menu"
                      },
                      {
                        "header":"",
                        "title":"*💙CONVERTER MENU💙*",
                        "description":"❣️ZENITSU-MD SHOW ME CONVERTER MENU❣️",
                        "id":"Converter Menu"
                      }
                    ]}
                  ]}`
                },
              ],
            }),
            contextInfo: {
                  quotedMessage: m.message,
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363327467360047@newsletter',
                  newsletterName: "ZENITSU-MD",
                  serverMessageId: 143
                }
              }
          }),
        },
      },
    }, {});

    await Matrix.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id
    });
  }
      if (selectedId == "View All Menu") {
        const str = `hey ${m.pushName} ${pushwish}
╭─────────────━┈⊷
│☪️ ʙᴏᴛ ɴᴀᴍᴇ: *💙ZENITSU-MD💙*
│☪️ ᴠᴇʀꜱɪᴏɴ: 2.2.3
│☪️ ᴏᴡɴᴇʀ : *AYAN SEVEN*      
│☪️ ɴᴜᴍʙᴇʀ: 258871168283
│☪️ ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│☪️ ᴍᴏᴅᴇ: *${config.MODE}*
│☪️ ᴘʀᴇғɪx: [${pref}]
╰─────────────━┈⊷ 
╭━❮ 💙𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁💙 ❯━╮
┃✰ ${prefix}ATTP
┃✰ ${prefix}ATTP2
┃✰ ${prefix}ATTP3
┃✰ ${prefix}EBINARY
┃✰ ${prefix}DBINARY
┃✰ ${prefix}EMOJIMIX
┃✰ ${prefix}MP3
╰━━━━━━━━━━━━━━━⪼
╭━❮ 💙𝙰𝙸💙 ❯━╮
┃✰ ${prefix}AI
┃✰ ${prefix}BUG
┃✰ ${prefix}REPORT
┃✰ ${prefix}GPT
┃✰ ${prefix}DALLE
┃✰ ${prefix}REMINI
┃✰ ${prefix}GEMINI
╰━━━━━━━━━━━━━━━⪼
╭━❮ 💙𝚃𝙾𝙾𝙻💙 ❯━╮
┃✰ ${prefix}CALCULATOR
┃✰ ${prefix}TEMPMAIL
┃✰ ${prefix}CHECKMAIL
┃✰ ${prefix}TRT
┃✰ ${prefix}TTS
╰━━━━━━━━━━━━━━━⪼
╭━❮ 💙𝙶𝚁𝙾𝚄𝙿💙 ❯━╮
┃✰ ${prefix}LINKGROUP
┃✰ ${prefix}SETPPGC
┃✰ ${prefix}SETNAME
┃✰ ${prefix}SETDESC
┃✰ ${prefix}GROUP
┃✰ ${prefix}GCSETTING
┃✰ ${prefix}WELCOME
┃✰ ${prefix}ADD
┃✰ ${prefix}KICK
┃✰ ${prefix}HIDETAG
┃✰ ${prefix}TAGALL
┃✰ ${prefix}ANTILINK
┃✰ ${prefix}ANTITOXIC
┃✰ ${prefix}PROMOTE
┃✰ ${prefix}DEMOTE
┃✰ ${prefix}GETBIO
╰━━━━━━━━━━━━━━━⪼
╭━❮ 💙𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳💙 ❯━╮
┃✰ ${prefix}APK
┃✰ ${prefix}FACEBOOK
┃✰ ${prefix}MEDIAFIRE 
┃✰ ${prefix}PINTERESTDL
┃✰ ${prefix}GITCLONE
┃✰ ${prefix}GDRIVE
┃✰ ${prefix}INSTA
┃✰ ${prefix}YTMP3
┃✰ ${prefix}YTMP4
┃✰ ${prefix}PLAY
┃✰ ${prefix}SONG
┃✰ ${prefix}VIDEO
┃✰ ${prefix}YTMP3DOC
┃✰ ${prefix}YTMP4DOC
┃✰ ${prefix}TIKTOK
╰━━━━━━━━━━━━━━━⪼
╭━❮ 💙𝚂𝙴𝙰𝚁𝙲𝙷💙 ❯━╮
┃✰ ${prefix}PLAY 
┃✰ ${prefix}YTS
┃✰ ${prefix}IMDB
┃✰ ${prefix}GOOGLE
┃✰ ${prefix}GIMAGE
┃✰ ${prefix}PINTEREST
┃✰ ${prefix}WALLPAPER
┃✰ ${prefix}WIKIMEDIA
┃✰ ${prefix}YTSEARCH 
┃✰ ${prefix}RINGTONE
┃✰ ${prefix}LYRICS
╰━━━━━━━━━━━━━━━⪼
╭━❮ 💙𝙼𝙰𝙸𝙽💙 ❯━╮
┃✰ ${prefix}PING
┃✰ ${prefix}ALIVE
┃✰ ${prefix}OWNER
┃✰ ${prefix}MENU
┃✰ ${prefix}INFOBOT
╰━━━━━━━━━━━━━━━⪼
╭━❮ 💙𝙾𝚆𝙽𝙴𝚁💙 ❯━╮
┃✰ ${prefix}JOIN
┃✰ ${prefix}LEAVE
┃✰ ${prefix}BLOCK
┃✰ ${prefix}UNBLOCK
┃✰ ${prefix}SETPPBOT
┃✰ ${prefix}ANTICALL
┃✰ ${prefix}SETSTATUS
┃✰ ${prefix}SETNAMEBOT
┃✰ ${prefix}AUTOTYPING
┃✰ ${prefix}ALWAYSONLINE
┃✰ ${prefix}AUTOREAD
┃✰ ${prefix}AUTOVIEW
╰━━━━━━━━━━━━━━━⪼
╭━❮ 💙𝚂𝚃𝙰𝙻𝙺💙 ❯━╮
┃✰ ${prefix}TRUECALLER
┃✰ ${prefix}INSTASTALK
┃✰ ${prefix}GITHUBSTALK
╰━━━━━━━━━━━━━━━⪼
   `;
        let fgg = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: `ZENITSU-MD`,
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'Zenitsu-MD'\nitem1.TEL;waid=${
                        m.sender.split("@")[0]
                    }:${
                        m.sender.split("@")[0]
                    }\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
            }
        };
       let { key } = await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/ethix.jpg'), 
  caption: str, 
  contextInfo: { 
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363327467360047@newsletter',
                  newsletterName: "ZENITSU-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: fgg
});
}
   if ( selectedId == "Downloader Menu") {
     const str = `
╭━❮ 💙 DOWNLOAD 💙 ❯━╮
┃✰ ${prefix}APK
┃✰ ${prefix}FACEBOOK 
┃✰ ${prefix}MEDIAFIRE 
┃✰ ${prefix}PINTERESTDL 
┃✰ ${prefix}GITCLONE 
┃✰ ${prefix}GDRIVE 
┃✰ ${prefix}INSTA 
┃✰ ${prefix}YTMP3
┃✰ ${prefix}YTMP4
┃✰ ${prefix}PLAY
┃✰ ${prefix}SONG
┃✰ ${prefix}VIDEO
┃✰ ${prefix}YTMP3DOC
┃✰ ${prefix}YTMP4DOC
┃✰ ${prefix}TIKTOK 
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/ethix.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363327467360047@newsletter',
                  newsletterName: "ZENITSU-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if ( selectedId == "Group Menu") {
     const str = `
╭━❮ 💙 GRUOP 💙 ❯━╮
┃✰ ${prefix}LINKGROUP 
┃✰ ${prefix}SETPPGC 
┃✰ ${prefix}SETNAME 
┃✰ ${prefix}SETDESC 
┃✰ ${prefix}GROUP
┃✰ ${prefix}WELCOME
┃✰ ${prefix}ADD
┃✰ ${prefix}KICK
┃✰ ${prefix}HIDETAG 
┃✰ ${prefix}TAGALL
┃✰ ${prefix}ANTILINK 
┃✰ ${prefix}ANTITOXIC 
┃✰ ${prefix}PROMOTE 
┃✰ ${prefix}DEMOTE 
┃✰ ${prefix}GETBIO 
╰━━━━━━━━━━━━━━━⪼
     `
     await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/ethix.jpg'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: true,
  }
}, {
  quoted: m
});
}
   
   if (selectedId == "Main Menu") {
     const str =`

╭━❮ 💙 MAIN 💙 ❯━╮
┃✰ ${prefix}PING
┃✰ ${prefix}ALIVE
┃✰ ${prefix}OWNER
┃✰ ${prefix}MENU
┃✰ ${prefix}INFOBOT
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/ethix.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363327467360047@newsletter',
                  newsletterName: "ZENITSU-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Owner Menu") {
     const str = `
╭━❮ 💙 OWNER 💙 ❯━╮
┃✰ ${prefix}JOIN
┃✰ ${prefix}LEAVE
┃✰ ${prefix}BLOCK
┃✰ ${prefix}UNBLOCK 
┃✰ ${prefix}BCGROUP
┃✰ ${prefix}BCALL
┃✰ ${prefix}SETPPBOT 
┃✰ ${prefix}ANTICALL
┃✰ ${prefix}SETSTATUS 
┃✰ ${prefix}SETNAMEBOT 
┃✰ ${prefix}AUTOTYPING 
┃✰ ${prefix}ALWAYSONLINE 
┃✰ ${prefix}AUTOREAD
┃✰ ${prefix}AUTOVIEW 
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/ethix.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363327467360047@newsletter',
                  newsletterName: "ZENITSU-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Search Menu") {
     const str =`
╭━❮ 💙 SEARCH 💙 ❯━╮
┃✰ ${prefix}PLAY
┃✰ ${prefix}YTS
┃✰ ${prefix}IMDB
┃✰ ${prefix}GOOGLE
┃✰ ${prefix}GIMAGE
┃✰ ${prefix}PINTEREST 
┃✰ ${prefix}WALLPAPER 
┃✰ ${prefix}WIKIMEDIA 
┃✰ ${prefix}YTSEARCH 
┃✰ ${prefix}RINGTONE 
┃✰ ${prefix}LYRICS
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/ethix.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363327467360047@newsletter',
                  newsletterName: "ZENITSU-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   if (selectedId == "Stalk Menu") {
     const str =`
╭━❮ 💙 STALK 💙 ❯━╮
┃✰ ${prefix}NOWA
┃✰ ${prefix}TRUECALLER 
┃✰ ${prefix}INSTASTALK 
┃✰ ${prefix}GITHUBSTALK 
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/ethix.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363327467360047@newsletter',
                  newsletterName: "ZENITSU-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Tool Menu") {
     const str =`
╭━❮ 💙 TOOL 💙 ❯━╮
┃✰ ${prefix}CALCULATOR 
┃✰ ${prefix}TEMPMAIL 
┃✰ ${prefix}CHECKMAIL 
┃✰ ${prefix}INFO
┃✰ ${prefix}TRT
┃✰ ${prefix}TTS
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/ethix.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363327467360047@newsletter',
                  newsletterName: "ZENITSU-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Ai Menu") {
     const str =`
╭━❮ 💙 AI 💙 ❯━╮
┃✰ ${prefix}AI
┃✰ ${prefix}BUG
┃✰ ${prefix}REPORT
┃✰ ${prefix}GPT
┃✰ ${prefix}DALLLE
┃✰ ${prefix}REMINI
┃✰ ${prefix}GEMINI
╰━━━━━━━━━━━━━━━⪼`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/ethix.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363327467360047@newsletter',
                  newsletterName: "ZENITSU-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Converter Menu") {
     const str =`
╭━❮ 💙 CONVERTER 💙 ❯━╮
┃✰ ${prefix}ATTP
┃✰ ${prefix}ATTP2 
┃✰ ${prefix}ATTP3 
┃✰ ${prefix}EBINARY 
┃✰ ${prefix}DBINARY 
┃✰ ${prefix}EMOJIMIX 
┃✰ ${prefix}MP3
╰━━━━━━━━━━━━━━━⪼
     `
     await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/ethix.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363327467360047@newsletter',
                  newsletterName: "ZENITSU-MD",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
};

export default test;
