const TelegramApi = require('node-telegram-bot-api')
// const { gameOptions, gameMenu } = require('./options.js') NOT WORKING
const botToken = '5669453108:AAH5wWRYnTjyDsoIDbUHa-hKnHBUINe9yBA'

const bot = new TelegramApi(botToken, {polling: true})
const webAppUrl = 'https://core.telegram.org'
const chats = {}


const start = () => {

    bot.setMyCommands([
        {command: '/start', description: 'начальное приветствие'},
        {command: '/info', description: 'начальное info'},
        {command: '/game', description: 'начальное game'},
    ])
    
    
    bot.on('message', async msg => {
        
        // получаем константы из объекта msg
        const text = msg.text
        const chatId = msg.chat.id
    
        if (text === '/start') {
            await bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/f7e/fba/f7efbacf-9817-4b7e-8e07-dac0cf0430d1/192/12.webp')
            await bot.sendMessage(chatId, 'добро пожаловать, мудила')    
            return bot.sendMessage(chatId, 'сначала зaполни форму', {
                reply_markup: {

                    inline_keyboard: [
                        [{text: 'заполнить', web_app: {url: webAppUrl}}]
                    ]
                }
            })
        }
    
        if (text === '/info') {
            return bot.sendMessage(chatId, `ur name ${msg.from.first_name} ${msg.from.last_name}`)
        }


        bot.sendMessage(chatId, `hello, ur message ${text}`)
        console.log(msg)
        return bot.sendMessage(chatId, "i don't understand u")
    })


}
start()

