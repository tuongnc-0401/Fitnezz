import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import Program from '../models/programModel.js';
const programRouter = express.Router();
import { isAdmin, isAuth } from '../utils.js';

const Programsss = [{
    releaseDate: new Date("2015-03"),
    name: '2021 2 Weeks Shred Challenge',
    type: 'Full Body, Weight Loss',
    equipment: 'Dumbbells, Resistance Bands',
    imgUrl: 'https://picsum.photos/360/484',
    timeMinute: 30,
    duration: 7,
    gender: true,
    videos: [{
        videoUrl: 'https://www.youtube.com/embed/P1mInEK7BEU',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/DOtr16U8V2M',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/ZiGE3-L4vyg',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/jpizoUy4K9s',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/C8KFqDcO1sg',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/MiFmszv0BQY',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/ofa4M6YBxfo',
    }]
},

{
    releaseDate: new Date("2021-03"),
    name: 'Weight Loss Challenge',
    type: 'Weight Loss, Full Body',
    equipment: 'Fitness Mat',
    imgUrl: 'https://picsum.photos/360/484',
    timeMinute: 40,
    duration: 7,
    gender: false,
    videos: [{
        videoUrl: 'https://www.youtube.com/embed/P1mInEK7BEU',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/DOtr16U8V2M',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/ZiGE3-L4vyg',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/jpizoUy4K9s',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/C8KFqDcO1sg',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/MiFmszv0BQY',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/ofa4M6YBxfo',
    }]
},

{
    releaseDate: new Date("2021-01"),
    name: 'Flat Stomach Challenge',
    type: 'Abs, Full Body, Weight Loss',
    equipment: 'Fitness Mat, Resistance Bands (Optional)',
    imgUrl: 'https://picsum.photos/360/484',
    timeMinute: 45,
    duration: 7,
    gender: true,
    videos: [{
        videoUrl: 'https://www.youtube.com/embed/P1mInEK7BEU',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/DOtr16U8V2M',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/ZiGE3-L4vyg',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/jpizoUy4K9s',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/C8KFqDcO1sg',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/MiFmszv0BQY',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/ofa4M6YBxfo',
    }]
},
{
    releaseDate: new Date("2001-01"),
    name: 'cccc',
    type: 'ccc',
    equipment: 'ccc',
    imgUrl: 'https://picsum.photos/360/484',
    timeMinute: 1,
    duration: 1,
    gender: true,
    videos: [{
        videoUrl: 'https://www.youtube.com/embed/P1mInEK7BEU',
    }]
},
{
    releaseDate: new Date("2021-03"),
    name: 'un in',
    type: 'un in',
    equipment: 'un in',
    imgUrl: 'https://picsum.photos/360/484',
    timeMinute: 35,
    duration: 7,
    gender: true,
    videos: [{
        videoUrl: 'https://www.youtube.com/embed/P1mInEK7BEU',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/DOtr16U8V2M',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/ZiGE3-L4vyg',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/jpizoUy4K9s',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/C8KFqDcO1sg',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/MiFmszv0BQY',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/ofa4M6YBxfo',
    }]
},
{
    releaseDate: new Date("2021-11"),
    name: 'clmmm',
    type: 'clmmm',
    equipment: 'clmmm',
    imgUrl: 'https://picsum.photos/360/484',
    timeMinute: 1,
    duration: 7,
    gender: true,
    videos: [{
        videoUrl: 'https://www.youtube.com/embed/P1mInEK7BEU',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/DOtr16U8V2M',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/ZiGE3-L4vyg',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/jpizoUy4K9s',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/C8KFqDcO1sg',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/MiFmszv0BQY',
    },
    {
        videoUrl: 'https://www.youtube.com/embed/ofa4M6YBxfo',
    }]
},
];

//Lam ko thanh cong

// programRouter.post('/', expressAsyncHandler(async (req, res) => {
//     const program = new Program({
//         name: req.body.name,
//         type: req.body.type,
//         equipment: req.body.equipment,
//         timeMinute: req.body.timeMinute,
//         duration: req.body.duration,
//         imgUrl: req.body.imgUrl,
//         videos: req.body.videos, //chua add dc videos
//     });

//     const createdProgram = await program.save();
//     if (createdProgram) {
//         res.send({ createdProgram });
//         return;
//     }
//     res.status(404).send({ message: 'Failed to create program' })
// }));


//get all program
programRouter.get('/', expressAsyncHandler(async (req, res) => {
    const program = await Program.find({})
    if (program) {
        res.send(program);
    } else {
        res.status(400).send({ message: "Program not found" })
    }
}))

//seed
programRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    await Program.remove({});
    const createdprogram = await Program.insertMany(Programsss)
    res.send({ createdprogram })
}))

//get one
programRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const program = await Program.findById(req.params.id)
    if (program) {
        res.send(program)
    } else {
        res.status(400).send({ message: `Program not found ${req.params.id}` })
    }
}))

//delete router
programRouter.post('/', expressAsyncHandler(async (req, res) => {
    const deletedProgram = await Program.findById(req.body.id);
    if (deletedProgram) {
        await deletedProgram.remove();
        res.send({ message: 'Successfully deleted program' });
    } else {
        res.send('Error in deletion');
    }
}));


export default programRouter;