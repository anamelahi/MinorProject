import jwt from 'jsonwebtoken'


const JWT_SECRET = '9BFt/HOtY2a/pdfCcgYQViooZLwWZnp/N6UpeJCVaBg=';

const generateTokenAndSetCookie = (userId, res) =>{
    const token = jwt.sign({userId},JWT_SECRET,{
        expiresIn:'15d'
    })

    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000,
        httpOnly: true, //prevent XXS attacks cross-site scripting attacks
        sameSite:"strict", //CSRF attacks cross-site request forgery attacks
        secure:  process.env.NODE_ENV !== "development" //only send cookie over https in production
    })
}

export default generateTokenAndSetCookie;