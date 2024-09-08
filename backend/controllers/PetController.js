const Pet = require('../models/Pet')
const User = require('../models/User')
const getToken = require('../helpers/get-token')
const getUserByToken = require('../helpers/get-user-by-token')
const ObjectId = require('mongoose').Types.ObjectId

module.exports = class PetController {
    // Create a pet

    static async create(req, res) {

        const { name, age, wheight, color } = req.body

        const images = req.files

        const available = true

        //Images upload

        //Validations
        if (!name) {
            res.status(422).json({ message: 'O nome é obrigatório' })
            return
        }
        if (!age) {
            res.status(422).json({ message: 'A idade é obrigatória' })
            return
        }
        if (!wheight) {
            res.status(422).json({ message: 'O peso é obrigatório' })
            return
        }
        if (!color) {
            res.status(422).json({ message: 'A cor é obrigatória' })
            return
        }
        if (images.length === 0) {
            res.status(422).json({ message: 'A imagem é obrigatória' })
            return
        }

        //Get pet owner
        const token = await getToken(req)
        const user = await getUserByToken(token)


        //Create a pet
        const pet = new Pet({
            name,
            age,
            wheight,
            color,
            available,
            images: [],
            User: {
                _id: user._id,
                name: user.name,
                image: user.image,
                phone: user.phone
            }
        })

        images.map((image) => {
            pet.images.push(image.filename)
        })

        try {
            const newPet = await pet.save()
            res.status(201).json(
                {
                    message: 'Pet cadastrado com sucesso',
                    newPet
                }
            )
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }

    //Get all pets

    static async getAll(req, res) {

        const pets = await Pet.find().sort('-createdAt')

        res.status(200).json({ pets })
    }

    static async getAllUserPets(req, res) {
        const token = await getToken(req)
        const user = await getUserByToken(token)

        const pets = await Pet.find({ 'User._id': user._id }).sort('-createdAt')

        res.status(200).json({ message: 'Lisa de Pets do usuário', pets })
    }

    //Get pet by id

    static async getPetById(req, res) {
        const id = req.params.id

        //Check if id is valid
        if (!ObjectId.isValid(id)) {
            res.status(422).json({ message: "ID inválido!" })
            return
        }
        try {
            const pet = await Pet.findById(id)

            if (!pet) {
                res.status(422).json({ message: "Pet não encontrado!" })
                return
            }
            res.status(200).json({ pet })
        } catch (error) {
            res.status(422).json({ message: "Pet não encontrado!" })
            return
        }
    }

    static async getAllUserAdoptions(req, res) {
        const token = await getToken(req)
        const user = await getUserByToken(token)

        const pets = await Pet.find({ 'adopter._id': user._id }).sort('-createdAt')

        res.status(200).json({ message: 'Lisa de Pets adotados pelo usuário', pets })
    }

    static async removePetById(req, res) {
        const id = req.params.id

        //Check if id is valid
        if (!ObjectId.isValid(id)) {
            res.status(422).json({ message: "ID inválido!" })
            return
        }

        //Check if pet exists
        const pet = await Pet.findById(id)

        if (!pet) {
            res.status(404).json({ message: "Pet não encontrado!" })
            return
        }

        //Check if logged in user registered the pet
        const token = await getToken(req)
        const user = await getUserByToken(token)

        if (pet.User._id.toString() !== user._id.toString()) {
            res.status(422).json({ message: "Houve um problema e processar a sua solicitação, tente novamente mais tarde!" })
            return
        }

        try {
            await Pet.findByIdAndDelete(id)
            res.status(200).json({ message: 'Pet removido com sucesso!' })
        } catch (error) {
            res.status(422).json({ message: "Falha ao deletar, tente novamente mais tarde!" })
            return
        }
    }

}