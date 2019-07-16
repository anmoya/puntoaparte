function PayloadException( umsg, imsg, code)
{
    return {
        "userMessage":umsg,
        "internalMessage":imsg,
        "code":code
    }
}

module.exports = {
    PayloadException
}