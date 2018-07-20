module.exports = function(app)
{
    const ChatController = {
        index:function(req,res)
        {
            const { usuario } = req.session;
            console.log(usuario);
            res.render('chat/index',usuario)
        }
    }
    return ChatController;
}