import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {ListComics} from '../common/constant/comics';
import {DropzoneArea} from 'material-ui-dropzone';
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'; 

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));


export default function Upload() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [completeCurrentStep, setCompleteCurrentStep] = useState(false);
  const steps = getSteps();

  const initialChapterInfo ={
      comicName: '',
      chapter: '',
      chapterName: '',
      sumary: '',
      releaseDate: new Date(),
      files: [],
      thumbnail: []
  }
  const [chapterInfo, setChapterInfo] = useState(initialChapterInfo);
  const [validate, setValidate] = useState({chapterNameValidate: true});

  const handleChangeComic= async (e,option)=>{
    const comicName = option? option.comicName : null;
    if(comicName) {   
    await setChapterInfo({...chapterInfo, comicName: comicName});
    await setCompleteCurrentStep(true);
    console.log(chapterInfo.comicName)
  }
  }

  const options = ListComics.map(option => {
    const firstLetter = option.comicName[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  function getSteps() {
    return ['Select Comic', 'Input all fields', 'Review','Finish'];
  }

  const handleChangeThumbnail = (file) =>{
     setChapterInfo({...chapterInfo,thumbnail:  URL.createObjectURL(file[0]) })
  }

  const handleChangeFiles =  (files) =>{
    let photos=[];
    files.map(item=>photos.push(URL.createObjectURL(item)))
    setChapterInfo({...chapterInfo, files: photos})
  }

  const handleDateChange = (date) =>{
    setChapterInfo({...chapterInfo, releaseDate: date})

  }
  const validateName =  () =>{
    return chapterInfo.chapterName.length > 0;
  }

  const handleChangeName  = async (e) => {
    await setChapterInfo({...chapterInfo, chapterName: e.target.value})
    const checkNextStep = completeStep2();
    await setCompleteCurrentStep(checkNextStep);
  }

  useEffect(() => {
    const checkNextStep = completeStep2();
    setCompleteCurrentStep(checkNextStep);
 }, [chapterInfo.files,chapterInfo.thumbnail]);

  const showValidate = () =>{
    
    setValidate({...validate, chapterNameValidate: validateName()})

  }

  const completeStep2 = () =>{
    return chapterInfo.chapterName.length > 0 && chapterInfo.files.length>0 && chapterInfo.releaseDate && chapterInfo.thumbnail.length>0;
  }


  
  const renderChooseComic = ()=>{
      return ( <Autocomplete
        id="grouped-demo"
        autoSelect={true}
        options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
        groupBy={option => option.firstLetter}
        getOptionLabel={option => option.comicName}
        onChange ={(e,option) =>handleChangeComic(e,option)}
        value ={{comicName: chapterInfo.comicName}}
        style={{ width: '100%' }}
        renderInput={params => (
          <TextField {...params} label="Comic name" variant="outlined" fullWidth />
        )}
      />);
  }

  const renderInputForm= () =>{
    return (
      <section>
        <DropzoneArea 
        onChange={(file)=>handleChangeThumbnail(file)}
        filesLimit={1}
        acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
        dropzoneText={'Chọn ảnh bìa'}
        initialFiles={[chapterInfo.thumbnail]}
        />
        <div className="my-3">
        <TextField
          fullWidth
          error={!validate.chapterNameValidate}
          onBlur = {showValidate}
          id="outlined-error"
          label="Tên chương"
          onChange = {(e)=>handleChangeName(e)}
          helperText="Tên chương không được phép rỗng"
          value={chapterInfo.chapterName}
          variant="outlined"
        />
      </div>
      <div className="my-3">
      <TextField
          fullWidth
          id="outlined-multiline-static"
          label="Tóm tắt"
          multiline
          rows="4"
          defaultValue=""
          variant="outlined"
        />
      </div>
      <div className="my-3">
      <DropzoneArea 
        onChange={(file)=>handleChangeFiles(file)}
        filesLimit={100}
        initialFiles={chapterInfo.files}
        acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
        dropzoneText={'tải lên nội dung truyện'}
        showFileNamesInPreview={true}
        showFileNames={true}
      />
      </div>
      <div className="my-3">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        fullWidth
        autoOk
        ampm={false}
        disablePast
        value={chapterInfo.releaseDate}
        onChange={handleDateChange}
        label="Thời gian phát hành"
        format="yyyy/MM/dd HH:mm"
        showTodayButton
        inputVariant="outlined"
      />
       </MuiPickersUtilsProvider>

      </div>
      </section>
    )
  }

  const renderPreview = () =>{
    return (
    <section>
      <h2 className="text-center pt-3">{chapterInfo.comicName}</h2>
      <div>Chương: {chapterInfo.chapter} - {chapterInfo.chapterName}</div>
      <div>Nội dung chính: </div>
      <span>{chapterInfo.sumary}</span>
      <div className="reading-area d-flex flex-column align-items-center bg-white">
    {chapterInfo.files.map(item=>
    <img className="img-fluid d-block" src={item} alt=""></img>
    )}
  </div>
  </section>)
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return renderChooseComic();
      case 1:
        return renderInputForm();
      case 2:
        return renderPreview();
      default:
        return 'Đăng tải thành công';
    }
  }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root} id="upload">
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    disabled= { !completeCurrentStep}
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Hoàn thành</Typography>
        </Paper>
      )}
    </div>
  );
}