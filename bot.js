const TelegramApi = require('node-telegram-bot-api')
// const { gameOptions, gameMenu } = require('./options.js') NOT WORKING
const botToken = '5669453108:AAH5wWRYnTjyDsoIDbUHa-hKnHBUINe9yBA'

const bot = new TelegramApi(botToken, {polling: true})

const chats = {}

const startGame = async (chatId) => {
    await bot.sendMessage(chatId, 'number from 1 to 9')
    const randomNumber = Math.floor(Math.random() * 10)
    chats[chatId] = randomNumber
    console.log(chats[chatId])
    await bot.sendMessage(chatId, 'number?', gameOptions)
}


const gameOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: '1', callback_data: '1'}, {text: '2', callback_data: '2'}, {text: '3', callback_data: '3'}],
            [{text: '4', callback_data: '4'}, {text: '5', callback_data: '5'}, {text: '6', callback_data: '6'}],
            [{text: '7', callback_data: '7'}, {text: '8', callback_data: '8'}, {text: '9', callback_data: '9'}],
            [{text: '0', callback_data: '0'}],
        ]
    })
}

const gameMenu = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'play again', callback_data: '/again'}],
        ]
    })
}

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
            return bot.sendMessage(chatId, 'добро пожаловать, мудила')    
        }
    
        if (text === '/info') {
            return bot.sendMessage(chatId, `ur name ${msg.from.first_name} ${msg.from.last_name}`)
        }

        if (text === '/game') {
            return startGame(chatId)
        }

        bot.sendMessage(chatId, `hello, ur message ${text}`)
        console.log(msg)
        return bot.sendMessage(chatId, "i don't understand u")
    })

    bot.on('callback_query', async msg => {

        const data = msg.data
        const chatId = msg.message.chat.id

        console.log(msg) 

        if (data === '/again') {
            return startGame(chatId)
        }

        if (data == chats[chatId]) {
            return bot.sendMessage(chatId, `yeah! that's right number ${chats[chatId]} / u win`, gameMenu)
        } else {
            return bot.sendMessage(chatId, `no! right number ${chats[chatId]} let's try again`, gameMenu)
        }

    })

}
start()

