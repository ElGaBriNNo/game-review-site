import User from "../model/user.js";

export async function registerNewUser(req, res) {
    try {
        const userExists = await User.exists({
            email: req.body.email
        });
        if (userExists) {
            return res.status(409).json({
                message: "Email already in use"
            });
        }
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        let data = await user.save();
        const token = await user.generateAuthToken();
        console.log(token)
        res.status(201).json({
            data,
            token
        });
    } catch (err) {
        res.status(400).json({
            err: err
        });
    }
}
export async function loginUser(req, res) {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findByCredentials(email, password);
        if (!user) {
            return res.status(401).json({
                message: "Login failed! Check authentication credentials"
            });
        }
        const token = await user.generateAuthToken();
        res.status(201).json({
            user,
            token
        });
    } catch (err) {
        res.status(400).json({
            err: err
        });
    }
}
export async function getUserDetails(req, res) {
    await res.json(req.userData);
}