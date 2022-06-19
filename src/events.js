const getMessageFunctionByMessage = message => {
    if (message.content === 'Olá') {
        message.reply('Fullzinho');
    }
}

module.exports = {
    getMessageFunctionByMessage
}