(async () => {

    const database = require('./db');
    const Produto = require('./produto');
    await database.sync();

    /*const novoProduto = await Produto.create({
        nome: 'Monitor',
        preco: 500,
        descricao: 'Monitor bacana'
    })
    console.log(novoProduto);*/

    /*const produto = await Produto.findByPk(1);
    const produto = await Produto.findAll({
        where: {
            preco: 15
        }
    });*/
    const produto = await Produto.findByPk(1);
    console.log(produto);

    /*produto.nome = 'Gabinete';
    produto.descricao = 'Fiz uma alteração';
    await produto.save();*//*Update na linha*/

    /*await produto.destroy();*/

    await Produto.destroy({where: {
        preco: 30
    }
    })
})();