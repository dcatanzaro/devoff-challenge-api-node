class UsersController {
    constructor(usersInstance) {
        this.usersInstance = usersInstance;
    }

    getUser = (req, res) => {
        const user = this.usersInstance.getUser();

        res.json(user);
    };
}

module.exports = UsersController;
