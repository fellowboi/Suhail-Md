howconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347042140449";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_50_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDg5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NixcbiAgICAgICAgNjMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMixcbiAgICAgICAgMTE4LFxuICAgICAgICA1NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgODksXG4gICAgICAgIDkwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMTUxLFxuICAgICAgICA2MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUsXG4gICAgICAgIDY0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDMxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzksXG4gICAgICAgIDExNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODUsXG4gICAgICAgIDczLFxuICAgICAgICAxMjksXG4gICAgICAgIDExMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDU4LFxuICAgICAgICAzMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDYwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMyxcbiAgICAgICAgODEsXG4gICAgICAgIDk0LFxuICAgICAgICAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjV5VktuWjQwRzdSalVKU1luSDhuTjVCVWdmcDQ5VlJJaWFOWmhYTmxJOEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0MjE0MDQ0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOEE5MjVDOUEyNjU2Mzg3M0IxQzAwRDhCRUIxRjU1OThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNTEyMjI5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjh5eTUwTGFGUUxhX2Mwd2U5SzNDTHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2VjYjk2MDUtY2ViMS00NjNkLTk1MjgtZTk2MmUxNzFhNmEwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMyxcbiAgICAgIDI1MSxcbiAgICAgIDE3NCxcbiAgICAgIDcsXG4gICAgICA1NCxcbiAgICAgIDE5MSxcbiAgICAgIDE5LFxuICAgICAgMjIxLFxuICAgICAgMTg5LFxuICAgICAgNDUsXG4gICAgICA3OCxcbiAgICAgIDM3LFxuICAgICAgMTMsXG4gICAgICAxMjMsXG4gICAgICAxMTIsXG4gICAgICAyMTEsXG4gICAgICAxMTksXG4gICAgICAyMDAsXG4gICAgICA5NyxcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjAsXG4gICAgICA2NyxcbiAgICAgIDI0MyxcbiAgICAgIDIyMCxcbiAgICAgIDI1MyxcbiAgICAgIDI0OCxcbiAgICAgIDIyNixcbiAgICAgIDIwNyxcbiAgICAgIDIxOCxcbiAgICAgIDUxLFxuICAgICAgMTM3LFxuICAgICAgNjQsXG4gICAgICAxMjAsXG4gICAgICAyMyxcbiAgICAgIDE3NSxcbiAgICAgIDE4OCxcbiAgICAgIDQ2LFxuICAgICAgMSxcbiAgICAgIDE5NyxcbiAgICAgIDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLR0FrOGtERUpyaThMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImRzckdTeEVOOTRQLzNWZWUxMHpPUG40UVc1akEybGM5N29ybXVoOTVlMWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwianl5TURWQmMzcVFZR0g5MjZVRmxyTGFnNjc1U3VVT0tjM1JJUitZS3hDdkVxRnVFUWg5UE1sdktWdkpQUllxWXdab1gwb21TOG42cUdFcWlidHNpRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV1loU1YvK09jZXFqUUwrWlBPTkdQVHJGSUgvT1k0VjgxWEczekNTaDNEaUNTKzF5cUZIL3ZCUE5QVk41R0s1bzBLcUtnOWw4ZnZZemRlSWlySS9Tanc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQyMTQwNDQ5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1MDY4NDg0Mjc2NjU2MzoyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkRhbW9sYfCfpbdcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDIxNDA0NDk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTUxMjIyMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtaclwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1pyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiU3RIYWhKVzM5NGNLcTAzbHV4NXorTy8rZmUzdlR2SnZ2SUpQNlJJMVduQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5NTg3MDk3OTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTUxMjIyNzMzNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
