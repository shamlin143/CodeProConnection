const { exists } = require("../../models/codepro");
const UserSession = require('../../models/CodeProSession')

module.exports = (app) => {

    app.post('api/account/signin', (req, res, next) => {
        const { body } = req;
        const { 
            username,
            email,
            password
        } = body;
        let {
            email
        } = body;

        if (!email) {
            return res.end({
                success: false,
                message: 'Error: Email can not be blank.'
            });
        }
        if (!password) {
            return res.end({
                success: false,
                message: 'Error: Password can not be blank.'
            });
        }
        if (!username) {
            return res.end({
                success: false,
                message: 'Error: Username can not be blank.'
            });
        }
    
        console.log('here');

        email = email.toLowerCase();

        // steps :
        // verify email doesnt exit already

        user.find({
            email: email            
        }, (err, previousUsers) => {
            if (err) {
                return res.end({
                    success: false,
                    message: 'Error: Username cannot be blank.'
                });                 
            } else if (previousUsers.length > 0) {
                return res.end({
                    success: false,
                    message: 'Error: Account already exists.'
                });   
            }
        })

        const newUser = new User();

        newUser.email = email;
        newUser.username = username;
        newUser.password = newuser.generateHash(password);
        newUser.save((err, user) => {
            if (err) {
                return res.end({
                    success: false,
                    message: 'Error: Server Error.'
                }); 
            }
            return res.end({
                success: true,
                message: 'Signed up'
            }); 
        });       
    });
    app.post('api/account/signup', (req, res, next) => {
        const { body } = req;
        const { 
            password
        } = body;
        let {
            email
        } = body;

        if (!email) {
            return res.end({
                success: false,
                message: 'Error: Email can not be blank.'
            });
        }
        if (!password) {
            return res.end({
                success: false,
                message: 'Error: Password can not be blank.'
            });
        }
        if (!username) {
            return res.end({
                success: false,
                message: 'Error: Username can not be blank.'
            });
        }

        email = email.toLowerCase();

        User.find({
            email: email
        }, (err, users) => {
            if (err) {
                console.log('err 2:', err);
                return res.send({
                    success: false,
                    message: "Error: Server error"
                });
            }
            if (users.length !=1) {
                return res.send({
                    success: false,
                    message: "Error: Invalid"
                });
            }

            const user = users[0];
            if (!user.validPassword(password)) {
                return res.send({
                    success: false,
                    message: "Error: Invalid"
                });
            }

            // Otherwise correct user
            new userSession = new UserSession();
            userSession.userId = user._id;
            userSession.save((err, doc) => {
                if (err) {
                    console.log(err);
                    return res.send({
                        success: false,
                        message: 'Error: Server error'
                    });
                }

                return res.send({
                    success: true,
                    message: 'Valid Sign in',
                    token: doc._id
                })
            });

        });
    });
    
    app.post('/api/account/verify', (req, res, next) => {
        //get the token
        const { query } = req;
        const { token } = query
        // ?token test

        // Verify the token is one of a kind and not deleted
        UserSession.find({
            _id:token,
            isDeleted: false
        }, (err, sessions) => {
            if (err) {
                console.log(err);
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }

            if (sessions.length != 1) {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: Invalid'
                    })
                } else {
                    return res.send({
                        success: true,
                        message: 'Good'
                    })
                }
            };
        });   
    });
    app.post('/api/account/logout', (req, res, next) => {
        //get the token
        const { query } = req;
        const { token } = query
        // ?token test

        // Verify the token is one of a kind and not deleted
        UserSession.findOneAndUpdate({
            _id:token,
            isDeleted: false
            }, {
                $set: {
                    isDeleted: true }
            }, null, (err, sessions) => {
                if (err) {
                    console.log(err);
                    return res.send({
                        success: false,
                        message: 'Error: Server error'
                    });
            }

            if (sessions.length != 1) {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: Invalid'
                    });
                } else {
                    return res.send({
                        success: true,
                        message: 'Good'
                    }) 
                } 
            };
        })
    });    
};