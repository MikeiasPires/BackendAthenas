const Walpapers = require('../Models/wallpapers');
const fs = require('fs');

exports.create = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Nenhum arquivo enviado." });
        }
        const { name } = req.body;
        const file = req.file;
        const filePath = req.file.path;

        // Ler o arquivo e converter para Base64
         fs.readFile(filePath, async (err, data) => {
            if (err) {
                return res.status(500).json({ error: 'Falha ao ler o arquivo' });
            }
            const base64Image = Buffer.from(data).toString('base64');
            const picture = new Walpapers({ name, src: base64Image })
            console.log(picture)
            await picture.save()
            res.status(201).json({ picture, msg: 'Imagem salva com sucesso.' });
        });

    } catch (error) {
        console.error("Erro ao salvar imagem:", error);
        res.status(500).json({ message: "Erro ao salvar imagem." });
    }
};


exports.findAll = async (req, res) => {
    try {
        const pictures = await Walpapers.find()
        res.json(pictures)
    } catch (error) {
        res.status(500).json({ message: 'Erro na busca da imagem' })
    }

}