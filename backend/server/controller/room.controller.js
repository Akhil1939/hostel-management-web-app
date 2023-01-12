const { roomService } = require("../services/room.service");

const createRoom = async (req, res, next) => {
    const { room_number } = req.body;
    const responce = await roomService.createRoom(room_number, req.user.id, next);

    if (responce == undefined) {
        return;
    }

    const room_no = await responce.room_number;

    return res.status(201).json({
        status: "success",
        room_no
    })
}

const deleteRoom = async (req, res, next) => {

    const room_number = req.params.roomId;
    const responce = await roomService.deleteRoom(room_number, next);

    if (responce === undefined) {
        return res.status(401).json({
            status: false,
            room_number
        })
    }

    // const room_no = await responce.room_number

    return res.status(200).json(responce);
}


module.exports = {
    createRoom,
    deleteRoom,
}