import { Handler } from "aws-lambda";
import { db, getDBInstance } from "../../db/db";
import { Booking } from "../../db/models/booking";
import { internalServerError, sendResponseBody } from "../../utils/response";

export const getBooking: Handler = async (event, _context) => {
    try {
        const DB: db = await getDBInstance();
        const id:number = event.pathParameters.id;
        let bok: Array<Booking> = await DB.book.findOne({
            where: { 
               id,
            },
            include: [
                DB.book,
            ]
        });
        
        const message:string = bok ? `Booking details found` : 'No details found'

        return sendResponseBody({
            origin: event.headers.origin,
            resCode: 200,
            success: bok,
            message: message,
        });

    } catch (error) {
        return internalServerError(error);
    }
}

export const addBooking: Handler = async (event, _context) => {
    try {
        const DB: db = await getDBInstance();
        let body: Booking = JSON.parse(event.body);
        
        const bok = await DB.book.create({ ...body });

        return sendResponseBody({
            origin: event.headers.origin,
            resCode: 200,
            success: bok,
            message: "Booking added successfully",
        });

    } catch (error) {
        return internalServerError(error);
    }
}



