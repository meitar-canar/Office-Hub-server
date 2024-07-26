const myRepository = require('../repository/officeRepository');

const showAllOffices = (async (req, res) => {
    try {
        const users = await myRepository.showAllOffices();
        console.log('Router got data from officeRepository', users);
        res.json(users);
    } catch (err) {
        console.log('Error while calling showAllOffices()', err);
        // res.status(500).json({ error: 'Internal server error' });
    }
})
module.exports.showAllOffices = showAllOffices;

// ----------------------------------------------------------------------------------------------------------------------------------

const CreateOffice = (async (req, res) => {
    try {
        let x = await myRepository.CreateOffice(req.body.officeName, req.body.location, req.body.capacity, req.body.rent_price, req.body.picture);
        console.log('Router got data from myRepository', x);
        res.json(x);
    }
    catch (err) {
        console.log(err);
        // res.json('there was an error while calling myRepository.CreateOffice()', err);
    }
})
module.exports.CreateOffice = CreateOffice;
// ----------------------------------------------------------------------------------------------------------------------------------
const UpdateOfficeById = async (req, res) => {
    try {
        const result = await myRepository.UpdateOfficeById(req.params.officeid, req.body.officeName, req.body.location, req.body.capacity, req.body.rent_price, req.body.picture);
        console.log('Router got data from userRepository', result);
        res.status(200).json(result);
    } catch (err) {
        console.log('Error while calling UpdateOfficeById()', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
module.exports.UpdateOfficeById = UpdateOfficeById;
// ----------------------------------------------------------------------------------------------------------------------------------
const deleteOffice = (async (req, res) => {
    try {
        let x = await myRepository.deleteOffice(req.params.officeDId)
        console.log('Router got data from myRepository', x);
        res.json(x);
    }
    catch (err) {
        console.log('there was an error while calling myRepository.deleteOffice()', err);

    }
});
module.exports.deleteOffice = deleteOffice;
// ========================================================================================================
const getOfficeById = (async (req, res) => {
    try {
        const users = await myRepository.getOfficeById(req.params.theId);
        console.log('Router got data from officeRepository', users);
        res.json(users);
    } catch (err) {
        console.log('Error while calling getOfficeById()', err);
        res.status(500).json({ error: 'Internal server error' });
    }
})
module.exports.getOfficeById = getOfficeById;

// -------------------------------------