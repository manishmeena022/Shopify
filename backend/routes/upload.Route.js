import path from 'path'
import express,{ Router } from 'express'
import multer from 'multer'

const uploadRouter = Router()

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})


function checkFileType(file, cb) {
    const fileTypes = /jpg|jpeg|png/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase())
    const mimeType = fileTypes.test(file.mimeType)

    if (extName && mimeType) {
        return cb(null, true)
    } else {
        cb('Only images allowed')
    }
}

const upload = multer({
    storage
})


uploadRouter.post('/', upload.single('image'), (req, res) => {
    res.send({
        message: 'Image uploaded',
        image: `/${req.file.path}`
    })
})

export default uploadRouter