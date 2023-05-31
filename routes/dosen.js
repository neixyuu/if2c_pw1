// (5) Buat router dosen
const express = require('express')
const router = express.Router() 
const Dosen = require('../models/Dosen')

// Create 
router.post('/', async(req, res) => {
    // tampung input dosen 
    const dosenPost = new Dosen({
        nidn: req.body.nidn,
        nama: req.body.nama,
        jenis_kelamin: req.body.jeniskelamin,
        umur: req.body.umur
    })

    try {
        // simpan data 
        const dosen = await dosenPost.save()
        // response
        res.json(dosen)
    } catch (error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const dosen = await Dosen.find()
        res.json(dosen)
    } catch (error) {
        res.json({message: error})
    }
})

router.put('/:dosenId', async(req, res) => {
    const data = {
        nidn: req.body.nidn,
        nama: req.body.nama,
        jeniskelamin: req.body.jeniskelamin,
        umur: req.body.umur
    }

    try{
        const dosen = await Dosen.updateOne({_id: req.params.dosenId}, data)
        res.json(dosen)
    } catch(error){
        res.json({message: error})
    }
})

router.delete('/:dosenId', async(req, res) => {
    try {
        const dosen = await Dosen.deleteOne({_id: req.params.dosenId})
    } catch (error){
        res.json({message: error})
    }
})

module.exports = router