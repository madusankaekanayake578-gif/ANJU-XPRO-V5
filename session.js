//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFAwTW94SU1FeWRET3VjOTYyRjZpUWdzUkh3NzlRKzBNdEtoR0YwbGtVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnNYVEZCd3RxZjFRb0E0WjV6M3dDeFV1NXJNaVdvei85aVhzY1JBQkxVbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNS3lQQWw0WFVDNm9QNExhVjFaUDBqWVJNVHV0QmdVVE9NOEQrbzhMZDI0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSFlYZEdhSVhkRDkwNnl3Q3lMem5lbTVQZVRWSGJWamlNdEtLSnQycEFRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJEajlZQ3lTMFFTRUg2NzFHbnh3aFM0eWRIUTNGVFBlTm5HMU9CZGYrbUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJ6MTVvODJrYWJDaGQ3N2FrOXVocnREQkZURU9odityVGo1UGVITGV5eTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJ1OC82SlBnYXFiVFdLdGd4T3YwbHdocElldjFnL0QzWW0vdmYvQkZrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVlaUzRUcEt3cWE3UVBwSDFkZzRtMVdQWEVIbk9KZjhGUEdFNlVTeTdDdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZQYThDc1RnQmhtRTFKdXBtVHdWckt2T1RRVXRDQTcyNnRjWWFXWk9NVU1meHkvRXM1MHpaVTI3aEtKRGlnamp0cUtzWFQyR2QzNjMvRHJqYmdkOGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzgsImFkdlNlY3JldEtleSI6IkpNeVNEVjJVam5vY2xZZHpiOXhWUUdiNEhGS2ZucDI4VkZVOUJjTUtJWGs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkQ1cW5tWlhDU1FhOTJMRmVhdFJSWXciLCJwaG9uZUlkIjoiZGE3ZDIwNWYtMDc5OS00ODE2LWE1MDEtMzk2MDM4OWFhNjk0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlVUDlBa2FpVkFzQmhIeldlZkxyY3NuaytUYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwVTdWdi96aHdoN1k5amJGVVJKck41TC94VUk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV1EzTlRRV1kiLCJtZSI6eyJpZCI6Ijk0Nzc2MTY4NjIzOjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2XvfCdl67wnZiE8J2XrvCdl7siLCJsaWQiOiIxNDczMDQ5Mjk1NzUwMjE6NUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lQUG5JY0NFS0tkbk1VR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImpiVzc2VGpaTXJYdWMzMzhJNHViSWJFS2ZRdEpaOFNnNUNRUUt4dFlQemM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImVOcHhUS1lVaFNwWURua0FmOGU4VFFOS2cydEQyMFlrRTdWS05zSVFQSE5nd1dZS0RWQVlTUzJLT0NENm9MWGZ2bGZ2RnFsK3pSL2pDTE1FeHJFN0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBd0IvbGhsdG5WdWpFM3RPMkgyZ1RXTVNMSkdVWUFKY25NRVgzMlp6dlZmYnZWVlVSYVRNQUpnNFVTU2wvL2EzWXkzZHZWZTJIaFlBdm9yK0hFOExnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc2MTY4NjIzOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWTIxdStrNDJUSzE3bk45L0NPTG15R3hDbjBMU1dmRW9PUWtFQ3NiV0Q4MyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1Nzc4NzM1LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR3JPIn0= ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUJyd081VEpVMncrYmUyNGw4aVc0aVcrOHMwSXhmTmlvYXE0eSs0RHMxST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUR5NjhYVFdzdUFqVFlMS20xdVU0QlRYeUo2VGlISnRLR1QwYkhsU04yND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RzZHSDRwaG5raUtkeXd5ZzE4TWRUZEVBOTBuMUdRK2RaTGZidGlRK1dRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRGVDYXdVUEZpajY5cUZmMzVVOXI2eWNXZ1hDWTFhSjNQbEdSYWFTQW5jPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldEendnYUVOaDZ4Y3ZKRG9lUmE1TmsyY0g3bTNPb1hJT3FERHRzdzZsazA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhsMFM2TndJV3lIbWliZ1lCdzV2V2dJVzFPa0xwem9tdXlrcnFtdHJiUmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVBEekczTU8zd3ZPUkxaZU4wNzh0M3c1S3R5L25LV3gxV1Y4aXlSNC9sZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2RtNWxiUEsycG1BT0JPSUNWR2JlVXc2MzhUaW02MVlZaHU2bHV4L1pscz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZsSzl0cUtMVXFYcW93d0JMVXBLWjZpdFVRZW40QTA3QlpkMU1yWldkMXU2d2haU2N3eXFVMGFqazRhTysrQXRnTHloTlBlMG9DTGNrMVZ4WDM1eWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjUsImFkdlNlY3JldEtleSI6InNPTFBVd3pDRUlFaVpiQ0FROGtzblBkUC9ZYkNwa3VBT0dXeVd0OVZiOGs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InItTWtVclpqUlYybFozNDVBMEszVUEiLCJwaG9uZUlkIjoiNDkwYmQyOWMtODdlMC00M2Q3LTkwYmQtZmU0MzU4MDU3NzI0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVzV0NFWHlXdytTVXVDQTFMQ1NROHE1S1NYMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtbWxSY0F0emxpNStESzBqNUhKVmVEa1ZsTXM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRUdSRUNEU1YiLCJtZSI6eyJpZCI6Ijk0Nzc2MTY4NjIzOjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2XvfCdl67wnZiE8J2XrvCdl7siLCJsaWQiOiIxNDczMDQ5Mjk1NzUwMjE6M0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lQUG5JY0NFTmFGbU1VR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImpiVzc2VGpaTXJYdWMzMzhJNHViSWJFS2ZRdEpaOFNnNUNRUUt4dFlQemM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkhIMEpsRWxBTE9KVXY0VkpUNCtHVTI4c3VOcnBtalJpRDdySnZ3MlpDK1pFSUJ5MFZkYWFvZ0h6MERCeUd1NVBLY1dKTW44cFJmWlVlc0dzcWtoakRBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjdVFNM1REVE1iU3BWNHRwZm5jVlIxMmo4cFJ0M2tHZS9ONHZUamsrUS84a0t6L3d2ZGt1blU0SjNmajlBYVdqZmIvVjUzdjRDZzlGYnM4MW5MNEVodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc2MTY4NjIzOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWTIxdStrNDJUSzE3bk45L0NPTG15R3hDbjBMU1dmRW9PUWtFQ3NiV0Q4MyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1NzEwMTgwLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR3JPIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
