module.exports = {
    // create: (req, res) => {
    //     // console.log("ReqBody: ", req.body)
    //     const { id, name, alias, balance } = req.body;
    //     users.push({ id, name, alias, balance });
    //     res.status(200).send(users);
    //     },

    // delete: (req, res) => {
    //     const deleteID = req.params.id;
    //     users.splice(deleteID, 1);
    //     // console.log("SPIN DELETE FUNCTION: ", users);
    //     res.status(200).send(users);
    // },

    // update: (req, res) => {
    //     const updateID = req.params.id;
    //     // console.log("Update function: ", req.body, req.params.id)
    //     users[updateID].balance = req.body.balance;
    //     // console.log("UPDATE: ", users);
    //     res.status(200).send(users);
    // },

    // read: (req, res) => {
    //     res.status(200).send(get_inventory);
    // }

    read: (req, res, next ) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory()
        .then((response) => res.status(200).json(response))
        .catch( err => {
            res.status(500).send({errorMessage: "Someone goofed. Try again later."});
            console.log(err)
        });
    }


} 