module.exports = function(app){
   // var Usuario = app.models.usuario;
    var HomeController = {
        index: function(req,res){
            res.render('home/index');
        },
        login: function(req,res)
        {
            const usuario = req.body;
            const email = req.body.usuario.email;
            const nome = req.body.usuario.nome;
            if(email && nome)
            {
                usuario.contatos = [];
                req.session.usuario = usuario;
                res.redirect('/contatos');
            }else{
                res.redirect('/');
            }
        },
        logout: function(req,res)
        {
            req.session.destroy();
            res.redirect('/');
        }
    }
    return HomeController;
}