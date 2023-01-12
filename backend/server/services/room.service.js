const { createRoomDb, deleteRoomDb } = require("../db/room.db");
const { ErrorHandler } = require("../middleware/error");

class RoomService {
    async createRoom(room_number, warden_id, next) {
        try {
            room_number = Number(room_number);
            if (!Number.isInteger(room_number)) {
                return next(new ErrorHandler(401, "Room no must be an int value"))
            }
            const room = await createRoomDb(room_number, warden_id, next);
            // console.log(room);
            return room;
        }
        catch (err) {
            return next(err.statusCode, err.message);
        }
    }

    async deleteRoom(room_number, next) {
        try {
            room_number = Number(room_number) - 0;

            if (!Number.isInteger(room_number)) {
                return next(new ErrorHandler(401, "Room no must be an int value"))
            }
            const room = await deleteRoomDb(room_number, next);
            return room;
        }
        catch (err) {
            return next(err.statusCode, err.message);
        }
    }
}



module.exports = { roomService: new RoomService() };