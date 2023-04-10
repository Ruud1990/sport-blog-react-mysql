import { db } from '../db.js';
import bcrypt from 'bcryptjs';

export const register = (req, res) => {
    
// check if user is existing

const q = "Select * FROM users Where email = ? OR username = ?"

db.query(q, [req.body.email, req.body.username], (err, data) => {
    if(err) return res.json(err);
    if(data.length) return res.status(409).json('User exists!');

    // hash password
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)"
    const values = [
        req.body.username,
        req.body.email,
        hash,
    ];

    db.query(q, [values], (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json('User has been created!');
    })
 })
}
export const login = (req, res) => {

}
export const logout = (req, res) => {

}