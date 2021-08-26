import { Box, Button, CircularProgress, Container, CssBaseline, Grid, TextField, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React, { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { Link as changeURL, useParams } from "react-router-dom";
import { getOneProgram as getOneProgramDispatch, updatedOneProgram } from './../../../actions/programActions';

function UpdateProgram({ match }) {
    const dispatch = useDispatch()
    const classes = useStyles()

    const updateProgram = useSelector(state => state.updateProgram);
    const { loading, success, error } = updateProgram;

    const handleSubmit = (e) => {
        e.preventDefault()
        if (checkSubmit === false) {
            dispatch(updatedOneProgram(match.params.id, name, gender, type, equipment, timeMinute, duration, image, videos));
            console.log('id', match.params.id);
            console.log('name', name);
            console.log('gender', gender);
            console.log('type', type);
            console.log('equipment', equipment);
            console.log('timeMinute', timeMinute);
            console.log('duration', duration);
            console.log('image', image);
            console.log('videos', videos);
        }
    }

    const [checkAddInput, setCheckAddInput] = useState(false);

    

    const handleAdd = () => {
        if (videos.length >= duration) {
            const lengthInput = document.getElementsByClassName('textcmnField').length + 1;
            setDuration(lengthInput);
            setAddBtn(addBtn + 1);
        } else {
            setCheckAddInput(true);
        }
    };


    const handleDel = (e) => {
        const index = +e.target.parentElement.parentElement.id - 1;
        const newVideos = [...videos];
        newVideos.splice(index, 1);
        setVideos(newVideos);
        setAddBtn(videos.length - 1);
        setDuration(videos.length - 1);
    };

    const handleDel2 = (e) => {
        setAddBtn(addBtn - 1);
        setDuration(addBtn - 1);
    };




    //gender

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        if (updateProgram) {
            updateProgram.success = false
        }
    }, [updateProgram])

    // cho nay
    const getOneProgram = useSelector(state => state.getOneProgram);
    const { loading: loadingOne, program: programOne, error: errorOne } = getOneProgram;

    //add btn
    const [addBtn, setAddBtn] = useState(2);

    //data
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [type, setType] = useState('');
    const [equipment, setEquipment] = useState('');
    const [timeMinute, setTimeMinute] = useState(0);
    const [duration, setDuration] = useState(0);
    const [videos, setVideos] = useState('');
    const [image, setImage] = useState('');
    const [temp, setTemp] = useState('');

    const { id } = useParams()

    useEffect(() => {
        dispatch(getOneProgramDispatch(id));
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setName(programOne?.name);
        setGender(programOne?.gender);
        setType(programOne?.type);
        setEquipment(programOne?.equipment);
        setTimeMinute(programOne?.timeMinute);
        setDuration(programOne?.duration);
        setVideos(programOne?.videos);
        setImage(programOne?.imgUrl);
        setAddBtn(programOne?.videos.length);
    }, [dispatch, id, programOne]);


    const [checkEmpty, setCheckEmpty] = useState(false);
    const [checkSubmit, setCheckSubmit] = useState(false);

    const handleChangeVideos = (e) => {
        setTemp('');
        const i = e.target.id;
        const newVideos = [...videos];

        console.log(e.target.value)
        newVideos[i].videoUrl = e.target.value;
        setVideos(newVideos);
        if (newVideos[i].videoUrl === '') {
            setCheckSubmit(true);
        } else {
            setCheckSubmit(false);
        }

        if (e.target.value) {
            setCheckEmpty(true)
        }
    }

    const handleChangeMap = (e) => {
        if (e.target.value !== '') {
            setTemp({ videoUrl: e.target.value });
            setCheckEmpty(true)
            console.log('clcc')
        } else {
            setCheckEmpty(false)
        }
    }

    const handleBlur = () => {
        if (checkEmpty && temp != '') {
            setVideos([...videos, temp])
        }
    }
    // console.log('duration ne', duration);

    // console.log('videos', checkEmpty)

    console.log(checkSubmit)

    var count = 0;
    var countId = 0;
    var idTextField = 0;
    return (
        <Container component="main" style={{ width: '40%', paddingRight: '5%' }}>
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Update Program
                </Typography>
                {loadingOne && <CircularProgress style={{ marginTop: '10px' }} color="secondary" />}
                {errorOne && <Alert style={{ marginTop: '10px' }} severity="error">{error}</Alert>}
                {loading && <CircularProgress style={{ marginTop: '10px' }} color="secondary" />}
                {error && <Alert style={{ marginTop: '10px' }} severity="error">{error}</Alert>}
                {success && <Box display="flex" mt={2}>
                    <Alert elevation={2} severity="success" fullWidth>Success </Alert>

                </Box>}
                {programOne &&
                    (<form className={classes.form} onSubmit={handleSubmit} noValidate>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <TextField autoComplete="name" autoFocus margin="normal" value={name} name="name" variant="outlined" label="Name" style={{ width: '50%' }} onChange={(e) => setName(e.target.value)}></TextField>

                            <FormControl style={{ width: '45%' }}>
                                <InputLabel id="demo-controlled-open-select-label">Gender</InputLabel>
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    open={open}
                                    onClose={handleClose}
                                    onOpen={handleOpen}
                                    value={gender || ''}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <MenuItem value={true}>Male</MenuItem>
                                    <MenuItem value={false}>Female</MenuItem>
                                </Select>
                            </FormControl>
                        </div>


                        <div style={{ width: '100%', display: 'flex' }}>
                            <TextField autoComplete="type" value={type} margin="normal" name="type" variant="outlined" label="Type" style={{ width: '50%', paddingRight: '3%' }} onChange={(e) => setType(e.target.value)}></TextField>
                            <TextField autoComplete="timeMinute" type="number" value={timeMinute} margin="normal" name="timeMinute" variant="outlined" label="Time per exercise" style={{ width: '50%' }} onChange={(e) => setTimeMinute(parseInt(e.target.value))}></TextField>
                        </div>

                        <TextField autoComplete="equipment" value={equipment} margin="normal" name="equipment" variant="outlined" label="Equipment" fullWidth onChange={(e) => setEquipment(e.target.value)}></TextField>

                        {videos && videos.map((video) =>
                        (<div className='textcmnField' id={`${++countId}`} key={video.id} style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                            <TextField multiline
                                margin="normal"
                                id={idTextField++}
                                name="video1"
                                variant="outlined"
                                label={`Video ${++count}`}
                                style={{ width: '90%' }}
                                value={video.videoUrl}
                                onChange={(e) => handleChangeVideos(e)}
                                onBlur={handleBlur}
                            ></TextField>
                            <div style={{ width: '10%', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div onClick={(e) => handleDel(e)} style={{ padding: '0px 10px', border: 'solid 1px grey', color: 'rgba(0, 0, 0, 0.54)', borderRadius: '2px', backgroundColor: 'lightgrey', cursor: 'pointer' }}>
                                    -
                                </div>
                            </div>
                        </div>))
                        }

                        {/* eslint-disable-next-line */}
                        {[...Array(addBtn)].map((x, i) => {
                            if (i >= videos?.length) {
                                return (<div key={i} className='textcmnField' id={i} style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                    <TextField multiline
                                        margin="normal"
                                        name="video1"
                                        variant="outlined"
                                        label={`Video ${i + 1}`}
                                        style={{ width: '90%' }}
                                        onChange={(e) => handleChangeMap(e)}
                                        onBlur={() => (checkEmpty && setVideos([...videos, temp]))}
                                    ></TextField>
                                    <div style={{ width: '10%', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div onClick={handleDel2} style={{ padding: '0px 10px', border: 'solid 1px grey', color: 'rgba(0, 0, 0, 0.54)', borderRadius: '2px', backgroundColor: 'lightgrey', cursor: 'pointer' }}>
                                            -
                                        </div>
                                    </div>
                                </div>)
                            }
                        })
                        }

                        {
                            checkSubmit && <Alert style={{ marginTop: '10px' }} severity="error">Please do not leave the text field blank</Alert>
                        }

                        <div style={{ width: '100%', padding: '5px 5px 0px 5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button onClick={handleAdd} variant="outlined" size="medium" color="grey" style={{ fontSize: '15px', padding: '5px 40px' }}>
                                +
                            </Button>
                        </div>

                        <div style={{ marginTop: '10px' }}>
                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setImage(base64)} ></FileBase>
                        </div>
                        {programOne.imgUrl && (
                            <div>
                                < img src={image} width="50%" alt="Program" />
                            </div>)}
                        <Grid container spacing={1} style={{ marginTop: "10px" }}>
                            <Grid item xs="12" md="6">
                                <Button component={changeURL} to="/admin/videos/" variant="outlined" fullWidth>Go Back</Button>
                            </Grid>
                            <Grid item xs="12" md="6">
                                <Button style={{ backgroundColor: '#f73471' }}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                >
                                    Update
                                </Button>
                            </Grid>
                        </Grid>
                    </form>)}
            </div>
        </Container >
    );
}

export default UpdateProgram;