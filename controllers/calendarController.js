const calendarRepository = require('../repository/calendarRepository');


const createEvent = async (req, res) => {
    try {
        const { title, startDate, endDate, userId, officesId, allDay } = req.body;
        console.log('Received event in backend:', req.body);

        // Check if all required parameters are present
        if (!title || !startDate || !endDate || !userId || !officesId || allDay === undefined) {
            res.status(400).json({ message: 'Missing required parameters' });
            return;
        }

        const result = await calendarRepository.createEvent(title, startDate, endDate, userId, officesId, allDay);
        console.log('Database result:', result);

        if (result.returnValue === 0) {
            res.status(201).json({ message: 'Event created successfully' });
        } else {
            res.status(400).json({ message: 'Event creation failed', result });
        }
    } catch (error) {
        console.error('Error creating event', error);
        res.status(500).json({ message: 'Error creating event', error });
    }
};


module.exports = {
    createEvent
};
// =================================================
const getEventsByRoomId = async (req, res) => {
    try {
        console.log('getEventsByRoomId Received event in backend:', req.params.theId);
        const x = await calendarRepository.getEventsByRoomId(req.params.theId);
        console.log('getEventsByRoomId', x);
        res.status(200).json({ message: 'message created successfully', x });
    } catch (error) {
        console.error('Error creating event', error);
        res.status(500).json({ message: 'Error creating event', error });
    }
};

const getEvents = async (req, res) => {
    try {
        const events = await calendarRepository.getEvents();
        res.status(200).json({ recordset: events });
    } catch (err) {
        console.error('Error fetching events', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getEventById = async (req, res) => {
    try {
        const id = req.params.id;
        const event = await calendarRepository.getEventById(id);
        if (event) {
            res.status(200).json(event);
        } else {
            res.status(404).json({ error: 'Event not found' });
        }
    } catch (err) {
        console.error('Error fetching event', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateEvent = async (req, res) => {
    try {
        const event = req.body;
        const result = await calendarRepository.updateEvent(event);
        res.status(200).json(result);
    } catch (err) {
        console.error('Error updating event', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteEvent = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await calendarRepository.deleteEvent(id);
        res.status(200).json(result);
    } catch (err) {
        console.error('Error deleting event', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    createEvent,
    getEvents,
    getEventById,
    updateEvent,
    deleteEvent,
    getEventsByRoomId
};

