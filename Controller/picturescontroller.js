const Picture = require('../Models/pictures');

exports.create = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Nenhum arquivo enviado." });
        }
        const { name } = req.body;
        const file = req.file;

        const picture = new Picture({
            name,
            src: file.path,
        });
        await picture.save();
        res.status(201).json({ picture, msg: 'Imagem salva com sucesso.' });
    } catch (error) {
        console.error("Erro ao salvar imagem:", error);
        res.status(500).json({ message: "Erro ao salvar imagem." });
    }
};


exports.findAll = async (req,res) => {
    try{
        const pictures = await Picture.find()
        res.json(pictures)
    }catch(error){
        res.status(500).json({message:'Erro na busca da imagem'})
        }

}