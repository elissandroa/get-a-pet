const jwt = require('jsonwebtoken')

const createUserToken = async (user, req, res) => {

    //Create a token
    const token = jwt.sign(
        {
            name: user.name,
            id: user._id,
        },
        "nossosecret-çfkaslçfupifásfaff51a65f1a65f4adfshasdhflokafhdlkh",
    )

    //Return a token
    res.status(200).json({
        message: 'Você está autenticado!',
        id: user._id,
        email: user.email,
        token: token,
    })

}


module.exports = createUserToken