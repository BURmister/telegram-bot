// module.export = {
//     gameOptions: {
//         reply_markup: JSON.stringify({
//             inline_keyboard: [
//                 [{text: '1', callback_data: '1'}, {text: '2', callback_data: '2'}, {text: '3', callback_data: '3'}],
//                 [{text: '4', callback_data: '4'}, {text: '5', callback_data: '5'}, {text: '6', callback_data: '6'}],
//                 [{text: '7', callback_data: '7'}, {text: '8', callback_data: '8'}, {text: '9', callback_data: '9'}],
//                 [{text: '0', callback_data: '0'}],
//             ]
//         })
//     },
    
//     gameMenu: {
//         reply_markup: JSON.stringify({
//             inline_keyboard: [
//                 [{text: 'play again', callback_data: '/again'}],
//             ]
//         })
//     }
    
// }


// bot.on('callback_query', async msg => {

//     const data = msg.data
//     const chatId = msg.message.chat.id

//     console.log(msg) 

//     if (data === '/again') {
//         return startGame(chatId)
//     }

//     if (data == chats[chatId]) {
//         return bot.sendMessage(chatId, `yeah! that's right number ${chats[chatId]} / u win`, gameMenu)
//     } else {
//         return bot.sendMessage(chatId, `no! right number ${chats[chatId]} let's try again`, gameMenu)
//     }

// })


// const startGame = async (chatId) => {
//     await bot.sendMessage(chatId, 'number from 1 to 9')
//     const randomNumber = Math.floor(Math.random() * 10)
//     chats[chatId] = randomNumber
//     console.log(chats[chatId])
//     await bot.sendMessage(chatId, 'number?', gameOptions)
// }


// const gameOptions = {
//     reply_markup: JSON.stringify({
//         inline_keyboard: [
//             [{text: '1', callback_data: '1'}, {text: '2', callback_data: '2'}, {text: '3', callback_data: '3'}],
//             [{text: '4', callback_data: '4'}, {text: '5', callback_data: '5'}, {text: '6', callback_data: '6'}],
//             [{text: '7', callback_data: '7'}, {text: '8', callback_data: '8'}, {text: '9', callback_data: '9'}],
//             [{text: '0', callback_data: '0'}],
//         ]
//     })
// }

// const gameMenu = {
//     reply_markup: JSON.stringify({
//         inline_keyboard: [
//             [{text: 'play again', callback_data: '/again'}],
//         ]
//     })
// }


// if (text === '/game') {
//     return startGame(chatId)
// }