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

    const [checkLength, setCheckLength] = useState(true);

    const [checkLengthUpdate, setCheckLengthUpdate] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        const lengthInput = document.getElementsByClassName('textcmnField').length + 1;
        if (lengthInput < duration) {
            setCheckLengthUpdate(true);
            return;
        }
        dispatch(updatedOneProgram(match.params.id, name, gender, type, equipment, timeMinute, duration, image, videos));
        // console.log('id', match.params.id);
        // console.log('name', name);
        // console.log('gender', gender);
        // console.log('type', type);
        // console.log('equipment', equipment);
        // console.log('timeMinute', timeMinute);
        // console.log('duration', duration);
        // console.log('image', image);
        // console.log('videos', videos);
    }

    const handleAdd = () => {
        const lengthInput = document.getElementsByClassName('textcmnField').length + 1;
        if (lengthInput <= duration) {
            setCheckLength(true);
            setAddBtn(addBtn + 1);
        }

        if (lengthInput > duration) {
            setCheckLength(false);
        }
    };

    const handleDel = (e) => {
        const index = +e.target.parentElement.parentElement.id - 1;
        const newVideos = [...videos];
        newVideos.splice(index, 1);
        setVideos(newVideos);
        setAddBtn(videos.length - 1);
    }

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




    const handleChangeVideos = (e) => {
        const i = e.target.id;
        const newVideos = [...videos];
        newVideos[i].videoUrl = e.target.value;
        setVideos(newVideos);
    }

    console.log('temp ne', videos);
    var count = 0;
    var countId = 0;
    var idTextField = 0;
    return (
        <Container component="main" style={{ width: '40%' }}>
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
                        <TextField autoComplete="type" value={type} margin="normal" name="type" variant="outlined" label="Type" fullWidth onChange={(e) => setType(e.target.value)}></TextField>
                        <TextField autoComplete="equipment" value={equipment} margin="normal" name="equipment" variant="outlined" label="Equipment" fullWidth onChange={(e) => setEquipment(e.target.value)}></TextField>

                        <div style={{ width: '100%' }}>
                            <TextField autoComplete="timeMinute" type="number" value={timeMinute} margin="normal" name="timeMinute" variant="outlined" label="Time per exercise" style={{ width: '50%', paddingRight: '3%' }} onChange={(e) => setTimeMinute(parseInt(e.target.value))}></TextField>
                            <TextField autoComplete="duration" type="number" value={duration} margin="normal" name="duration" variant="outlined" label="Program's Duration" style={{ width: '50%' }} onChange={(e) => setDuration(e.target.value)}></TextField>
                        </div>

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
                                onBlur={() => (temp && setVideos([...videos, temp]))}
                            ></TextField>
                            <div style={{ width: '10%', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div onClick={(e) => handleDel(e)} style={{ padding: '0px 10px', border: 'solid 1px grey', color: 'rgba(0, 0, 0, 0.54)', borderRadius: '2px', backgroundColor: 'lightgrey', cursor: 'pointer' }}>
                                    -
                                </div>
                            </div>
                        </div>))
                        }

                        {[...Array(addBtn)].map((x, i) => {
                            if (i >= videos?.length) {
                                return (<div key={i} className='textcmnField' id={i} style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                    <TextField multiline
                                        margin="normal"
                                        name="video1"
                                        variant="outlined"
                                        label={`Video ${i + 1}`}
                                        style={{ width: '90%' }}
                                        onChange={(e) => setTemp({ videoUrl: e.target.value })}
                                        onBlur={() => (temp && setVideos([...videos, temp]))}
                                    ></TextField>
                                    <div style={{ width: '10%', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div onClick={() => setAddBtn(addBtn - 1)} style={{ padding: '0px 10px', border: 'solid 1px grey', color: 'rgba(0, 0, 0, 0.54)', borderRadius: '2px', backgroundColor: 'lightgrey', cursor: 'pointer' }}>
                                            -
                                        </div>
                                    </div>
                                </div>)
                            }
                        })
                        }

                        {checkLength === false &&
                            <div style={{ width: '100%' }} >
                                <Alert style={{ marginTop: '10px' }} severity="warning">The videos are over the duration (1video/day)</Alert>
                            </div>
                        }

                        {checkLengthUpdate &&
                            <div style={{ width: '100%' }} >
                                <Alert style={{ marginTop: '10px' }} severity="warning">Please add more videos</Alert>
                            </div>
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