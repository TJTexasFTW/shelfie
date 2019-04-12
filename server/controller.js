module.exports = {
     create: (req, res, next) => {
            const dbInstance = req.app.get('db');
            const { name, price, image_url } = req.body;
            console.log("Create product: ", req.body)
            console.log("Create product name: ", req.body.name)
    
            dbInstance.create_product([name, price, image_url])
            .then(() => res.sendStatus(200))
            .catch( err => {
                res.status(500).send({errorMessage: "Someone goofed. Try again later."});
                console.log(err)
            });
        },

        deletePost(id) {
            axios.delete(`https://practiceapi.devmountain.com/api/posts?id=${ id }`).then( results => {
              this.setState({ posts: results.data });
            });
          }

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