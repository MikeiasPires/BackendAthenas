const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WallpaperSchema = new Schema({
    name: { type: String, required: false },
    src: { type: Buffer, required: true }
});

module.exports = mongoose.model('Wallpaper', WallpaperSchema);