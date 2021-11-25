import Mongoose from "mongoose";

const studentSchema = Mongoose.Schema({
    regNo : Number,
    studentName : String,
    grade : String,
    section: {
        type: String,
        default: 'A'
    }

})

const student = Mongoose.model('student', studentSchema)

export default student;