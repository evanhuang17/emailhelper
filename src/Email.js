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
  const [enName, setEnName] = React.useState("Xiaoming Wang");
  const [chName, setChName] = React.useState("王小明");
  const [mobile, setMobile] = React.useState("+886-909-090-999");
  const [email, setEmail] = React.useState("xiaomingwang@17.media");
  const [telephone, setTelephone] = React.useState("+866-2-2327-8989 #123");
  const [organization, setOrganization] = React.useState('HQ');
  const [companyName, setCompanyName] = React.useState('M17 Entertainment');
  const [companyLogo, setCompanyLogo] = React.useState('https://cdn.17app.co/e9a2f146-8f3f-4163-ba4f-dc10d2f84ccd.png');
  const [position, setPosition] = React.useState('Engineer');
  const [mobileStr, setMobileString] = React.useState(`<b style="color:rgb(7,55,99)">M </b><font color="#666666">${mobile}</font>
  <b style="color:rgb(7,55,99)"> </b><span style="color:rgb(7,55,99)">|</span>`);
  
  const template = `<div style="font-family:Arial,Helvetica,sans-serif">
  <div dir="ltr">
     <font style="font-size:12px;" color="#073763"><b>${enName} </b>${chName}</font><br>
     <font color="#3d85c6" style="font-size: 10px;"> ${companyName} | ${position}<br><br></font>
  </div>
  <div style="font-size: 10px;">${mobileStr}<b style="color:rgb(7,55,99)"> T </b>
     <font color="#666666">${telephone}</font><font color="#444444">&nbsp;</font><span style="color:rgb(7,55,99)">|</span><b style="color:rgb(7,55,99)"> E </b><font color="#666666">${email}</font><br>
     <b style="color:rgb(7,55,99)">Follow us : </b><a href="https://www.m17.asia/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.m17.asia/&amp;source=gmail&amp;ust=1589363511983000&amp;usg=AFQjCNHQiHJ6lxRFkz44RyIixkuEyj-27w">
     <font color="#3d85c6">M17 Entertainment</font></a>
  </div>
  <div>
    <img src="${companyLogo}" width="252" height="42" class="CToWUd">
  </div>
  <div style="font-size: 10px;">
     <font color="#999999">
        <span style="color:#999999;"><span>本信件及附件內容可能為機密性資料，若您並非被指定之收信人或在任何原因未經授權的情形之下收到本信件，請勿揭曉本信件內容於任何人，並請告知原發信人，以及請從您的電腦刪除此信件和任何已列印的文件。謝謝您的合作。</span>
     </font>
     <font color="#999999">
        <span style="color:#999999;"><span lang="EN-US" style="border:1pt none windowtext;padding:0cm;">
        CONFIDENTIALITY NOTICE:This electronic message and any attachments may be confidential. If you are not the intended recipient, please do not disclose the contents to anyone,and notify the sender by e-mail; delete the message and destroy all printed hard copies. Thank you for your cooperation.
        </span>
     </font>
  </div>
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
          setMobileString(`<b style="color:rgb(7,55,99)">M </b><font color="#666666">${target.value}</font>
          <b style="color:rgb(7,55,99)"> </b><span style="color:rgb(7,55,99)">|</span>`);
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
        setCompanyName('17LIVE');
        setCompanyLogo('https://cdn.17app.co/cd4ca6e5-36d4-435b-9e8c-b74820a9ef0b.png');
        break;
      case 'JP':
        setCompanyName('17LIVE Japan');
        setCompanyLogo('https://cdn.17app.co/92af0f49-db84-427d-835f-65d79e59d367.png');
        break;
      case 'US':
        setCompanyName('17LIVE US');
        setCompanyLogo('https://cdn.17app.co/8319412a-9e3a-4886-b946-8be534bfc989.png');
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
      <Grid item xs={8}>
        <div id="emailSignature" className="editor" dangerouslySetInnerHTML={{__html: template}}/>
        <div>
          <Button variant="contained" color="primary" onClick={copyTextToClipboard}>
            Copy
          </Button>
        </div>
      </Grid>
      <Grid item xs={4}>
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
              <MenuItem value="TW">17LIVE</MenuItem>
              <MenuItem value="JP">17LIVE Japan</MenuItem>
              <MenuItem value="US">17LIVE US</MenuItem>
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
