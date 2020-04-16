import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import './Email.scss';

const Email: React.FC = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      paper: {
        height: 140,
        width: 100,
      },
      control: {
        padding: theme.spacing(2),
      },
    }),
  );
  const classes = useStyles();
  const [enName, setEnName] = React.useState("Joseph Phua");
  const [chName, setChName] = React.useState("潘杰賢");
  const [mobile, setMobile] = React.useState("+886-909-090-999");
  const [email, setEmail] = React.useState("joseph@17.media");
  const [telephone, setTelephone] = React.useState("+886-2-2720-8688 #123");
  const [organization, setOrganization] = React.useState('HQ');
  const [companyName, setCompanyName] = React.useState('M17 Entertainment');
  const [companyLogo, setCompanyLogo] = React.useState('https://cdn.17app.co/8e561b95-281a-4106-8ccf-cb0682c4ead1.png');
  const [position, setPosition] = React.useState('CEO');
  const [mobileStr, setMobileString] = React.useState(`<strong><span style="color: #073763;">M</span>&nbsp;</strong><span style="color: #666666;">${mobile}</span>
  <strong><span style="color: #073763;">｜</strong>`)
  const template = `<div><p><span style="color: #073763; font-size: large;"><b>${enName}&nbsp;</b>${chName}</span></p>
    <p><span style="color: #3d85c6;">${companyName}｜${position}</span></p>
    <p>&nbsp;</p>
    <p>${mobileStr}<strong>T</span>&nbsp;</strong><span style="color: #666666;">${telephone}</span>
    <b><span style="color: #073763;">｜E</span>&nbsp;</b><span style="color: #666666;">${email}</span></p>
    <p><span style="font-weight: bold; color: #073763;">Follow us:</span><b>&nbsp;</b><span style="color: #3d85c6;">
    <a href="https://m17.asia/" data-saferedirecturl="https://www.google.com/url?q=https://m17.asia&amp;source=gmail&amp;ust=1587028657631000&amp;usg=AFQjCNFuJsK6PQvixppbPt48vuYbZ7UjuA">M17 Entertainment</a></span></p>
    <p><img src=${companyLogo} alt="" width="420" height="70" style="font-weight: bold;" /></p>
    <p><strong><span style="color: #000000; font-size: large;">Empower Artists. Entertain the World.</span></strong></p>
    </div>`;
  function onDataChange(e: any) {
    const target:HTMLInputElement = e.target;
    switch (target.id) {
      case 'enName':
        setEnName(target.value);
        break;
      case 'chName':
        setChName(target.value);
        break;
      case 'email':
        setEmail(target.value);
        break;
      case 'telephone':
        setTelephone(target.value);
        break;
      case 'mobile':
        setMobile(target.value);
        if (target.value)
          setMobileString(`<strong><span style="color: #073763;">M</span>&nbsp;</strong><span style="color: #666666;">${mobile}</span>
          <strong>`);
        else
          setMobileString('');
        break;
      case 'position':
        setPosition(target.value);
        break;
      default:
        break;
    }
  };
  function onOrgChange(e: any) {
    const target:HTMLInputElement = e.target;
    setOrganization(target.value);
    switch(target.value) {
      case 'HQ':
        setCompanyName('M17 Entertainment');
        setCompanyLogo('https://cdn.17app.co/e9a2f146-8f3f-4163-ba4f-dc10d2f84ccd.png');
        break;
      case 'TW':
        setCompanyName('17Media Taiwan');
        setCompanyLogo('https://cdn.17app.co/8e561b95-281a-4106-8ccf-cb0682c4ead1.png');
        break;
      case 'JP':
        setCompanyName('17Media Japan');
        setCompanyLogo('https://cdn.17app.co/a8ee230d-8d05-4138-baff-d71c0ee6f10d.png');
        break;
      case 'US':
        setCompanyName('17Media US');
        setCompanyLogo('https://cdn.17app.co/32de5de6-a034-4b1e-8342-882210b8aa70.png');
        break;
      case 'Wave':
        setCompanyName('Wave');
        setCompanyLogo('https://cdn.17app.co/fc1e207f-2211-4f2b-971d-1c32ca1803b4.png');
        break;
      case 'HandsUP':
        setCompanyName('HandsUP');
        setCompanyLogo('https://cdn.17app.co/3cfde87a-23d5-4765-8cc9-e9764b4b282a.png');
        break;
      case 'Unicorn':
        setCompanyName('Unicorn Entertainment');
        setCompanyLogo('https://cdn.17app.co/1d800744-4547-4401-88f9-485cb8a8418d.png');
        break;
      case '17MyMai':
        setCompanyName('17MyMai');
        setCompanyLogo('https://cdn.17app.co/8ac4dba3-6769-4039-8879-c7cd07ed510d.png');
        break;
      case 'MeMe':
        setCompanyName('MeMe');
        setCompanyLogo('https://cdn.17app.co/44d7ed18-32eb-4f95-ac4c-fefa690e48b2.png');
        break;
      default:
        setCompanyName('M17 Entertainment');
        setCompanyLogo('https://cdn.17app.co/e9a2f146-8f3f-4163-ba4f-dc10d2f84ccd.png');
        break;
    }
  };
  const copyWithStyle = ( element ) => {
    const doc = document;
    const text = doc.getElementById( element );
    let range;
    let selection;
    if( doc.body.createTextRange ) {
      range = doc.body.createTextRange();
      range.moveToElement( text );
      range.select();
    } else if ( window.getSelection ) {
      selection = window.getSelection();
      range = doc.createRange();
      range.selectNodeContents( text );
      selection.removeAllRanges();
      selection.addRange( range );
    }
    document.execCommand( 'copy' );
    window.getSelection().removeAllRanges();
  };
  function copyTextToClipboard() {
    copyWithStyle('emailSignature');
  };
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={6}>
        <div id="emailSignature" className="editor" dangerouslySetInnerHTML={{__html: template}}/>
        <div>
          <Button variant="contained" color="primary" onClick={copyTextToClipboard}>
            Copy
          </Button>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className="item-margin">
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="my-input">英文全名 EN Full Name</InputLabel>
            <Input id="enName" value={enName} required={true} onChange={e => onDataChange(e)}/>
            <FormHelperText id="my-helper-text">Your EN Full Name</FormHelperText>
          </FormControl>
        </div>
        <div className="item-margin">
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="my-input">中文名稱 CH or JP Full Name</InputLabel>
            <Input id="chName" value={chName} required={true} onChange={e => onDataChange(e)}/>
            <FormHelperText id="my-helper-text">Your CH or JP Full Name</FormHelperText>
          </FormControl>
        </div>
        <div className="item-margin">
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input id="email" value={email} required={true} onChange={e => onDataChange(e)}/>
          </FormControl>
        </div>
        <div className="item-margin">
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="my-input">手機 Mobile</InputLabel>
            <Input id="mobile" value={mobile} onChange={e => onDataChange(e)}/>
          </FormControl>
        </div>
        <div className="item-margin">
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="my-input">公司電話 Telephone</InputLabel>
            <Input id="telephone" value={telephone} required={true} onChange={e => onDataChange(e)}/>
          </FormControl>
        </div>
        <div className="item-margin">
          <FormControl fullWidth={true}>
            <InputLabel id="organization-label">公司名稱 Comany Name</InputLabel>
            <Select
              labelId="organization-label"
              id="organization"
              value={organization}
              onChange={onOrgChange}
            >
              <MenuItem value="HQ">HQ</MenuItem>
              <MenuItem value="TW">17Media Taiwan</MenuItem>
              <MenuItem value="JP">17Media Japan</MenuItem>
              <MenuItem value="US">17Media US</MenuItem>
              <MenuItem value="HandsUP">HandsUP</MenuItem>
              <MenuItem value="Wave">Wave</MenuItem>
              <MenuItem value="Unicorn">Unicorn Entertainment</MenuItem>
              <MenuItem value="17MyMai">17MyMai</MenuItem>
              <MenuItem value="MeMe">MeMe</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="item-margin">
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="my-input">職稱 Position</InputLabel>
            <Input id="position" value={position} required={true} onChange={e => onDataChange(e)}/>
          </FormControl>
        </div>
      </Grid>
    </Grid>
  );
};

export default Email;
