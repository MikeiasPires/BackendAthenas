const express = require('express')
const router = express.Router()

const Picturecontroller = require('../Controller/picturescontroller')
const PicturesWalpaper = require('../Controller/picturescontollerWp')

const upload = require('../Config/multer')

router.post("/", upload.single('file'), Picturecontroller.create)
router.get("/", Picturecontroller.findAll)

router.post("/wallpaper", upload.single('image'), PicturesWalpaper.create)

router.get("/wallpaper", PicturesWalpaper.findAll)


module.exports = router