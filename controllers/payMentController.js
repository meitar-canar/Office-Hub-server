const paymentRepository = require('../repository/payMentRepository');

const insertPayment = async (req, res) => {
    const { userId, officeId, cardNumber, validityMonth, CVV, createdAt } = req.body;

    // Validate request data
    if (!userId || !officeId || !cardNumber || !validityMonth || !CVV || !createdAt) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Call the repository function to insert payment
        const result = await paymentRepository.insertPayment(userId, officeId, cardNumber, validityMonth, CVV, createdAt);

        // Send a successful response
        res.status(200).json({
            message: 'Payment successfully inserted',
            data: result
        });
    } catch (err) {
        // Log error and send an error response
        console.error('Error while inserting payment:', err);
        res.status(500).json({
            message: 'Failed to insert payment',
            error: err.message
        });
    }
};

module.exports = {
    insertPayment
};
