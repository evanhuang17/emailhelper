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
  const [website, setWebsite] = React.useState("https://tw.17.live");
  const [enName, setEnName] = React.useState("Xiaoming Wang");
  const [chName, setChName] = React.useState("王小明");
  const [mobile, setMobile] = React.useState("+886-909-090-999");
  const [email, setEmail] = React.useState("xiaomingwang@17.live");
  const [telephone, setTelephone] = React.useState("+886-2-2327-8989 #123");
  const [organization, setOrganization] = React.useState('TW');
  const [companyName, setCompanyName] = React.useState('17LIVE');
  const [companyLogo, setCompanyLogo] = React.useState('https://cdn.17app.co/ae338e12-d4d3-4c81-9f76-11c61c23c698.png');
  const [position, setPosition] = React.useState('VIP');
  const [mobileStr, setMobileString] = React.useState(`<b style="color:rgb(0,0,0)">M </b><font color="#000000">${mobile}</font>
  <b style="color:rgb(0,0,0)"> </b><span style="color:rgb(0,0,0)">|</span>`);
  
  const template = `<div style="font-family:Arial,Helvetica,sans-serif">
  <div dir="ltr">
     <font style="font-size:12px;" color="#000000"><b>${enName} </b>${chName}</font><br>
     <font color="#000000" style="font-size: 10px;"> ${companyName} | ${position}<br><br></font>
  </div>
  <div style="font-size: 10px;">${mobileStr}<b style="color:rgb(0,0,0)"> T </b>
     <font color="#000000">${telephone}</font><font color="#000000">&nbsp;</font><span style="color:rgb(0,0,0)">|</span><b style="color:rgb(0,0,0)"> E </b><font color="#000000">${email}</font><br>
     <b style="color:rgb(0,0,0)">official site: </b><a href="${website}" target="_blank">
     <font color="#000000">17LIVE</font></a>
  </div>
  <div>
    <img src="${companyLogo}" height="42" class="CToWUd">
  </div>
  <div style="font-size: 8px;transform: scale(0.8);transform-origin: 0 0;">
     <font color="#999999">
        <div style="color:#999999;"><span style="border:1pt none windowtext;padding:0cm;">
        本信件及附件內容可能為機密性資料，若您並非被指定之收信人或在任何原因未經授權的情形之下收到本信件，請勿揭曉本信件內容於任何人，並請告知原發信人，以及請從您的電腦刪除此信件和任何已列印的文件。謝謝您的合作。
        </div>
        <div style="color:#999999;"><span lang="EN-US" style="border:1pt none windowtext;padding:0cm;">
        秘密保持に関するご注意:このメールおよび添付ファイルには、秘密情報や個人情報が含まれている場合があります。本メールがご自身宛でない場合、内容を誰にも開示せず、お手元のメールや印刷物を削除又は破棄し、誤って届いた旨を発信者宛にご通知下さいますようお願いいたします。
        </div>
        <div style="color:#999999;"><span lang="EN-US" style="border:1pt none windowtext;padding:0cm;">
        CONFIDENTIALITY NOTICE:This electronic message and any attachments may be confidential. If you are not the intended recipient, please do not disclose the contents to anyone,and notify the sender by e-mail; delete the message and destroy all printed hard copies. Thank you for your cooperation.
        </div>
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
          setMobileString(`<b style="color:rgb(0,0,0)">M </b><font color="#000">${target.value}</font>
          <b style="color:rgb(0,0,0)"> </b><span style="color:rgb(0,0,0)">|</span>`);
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
        setCompanyName('17LIVE Services Inc.');
        setCompanyLogo('https://cdn.17app.co/ae338e12-d4d3-4c81-9f76-11c61c23c698.png');
        setWebsite('https://about.17.live');
        break;
      case 'TW':
        setCompanyName('17LIVE');
        setCompanyLogo('https://cdn.17app.co/ae338e12-d4d3-4c81-9f76-11c61c23c698.png');
        setWebsite('https://tw.17.live');
        break;
      case 'JP':
        setCompanyName('17LIVE Japan');
        setCompanyLogo('https://cdn.17app.co/ae338e12-d4d3-4c81-9f76-11c61c23c698.png');
        setWebsite('https://jp.17.live');
        break;
      case 'HK':
        setCompanyName('17LIVE HK');
        setCompanyLogo('https://cdn.17app.co/ae338e12-d4d3-4c81-9f76-11c61c23c698.png');
        setWebsite('https://hk.17.live');
        break;
      case 'US':
        setCompanyName('17LIVE US');
        setCompanyLogo('https://cdn.17app.co/ae338e12-d4d3-4c81-9f76-11c61c23c698.png');
        setWebsite('https://www.letslivit.com/');
        break;
      case 'Wave':
        setCompanyName('Wave');
        setCompanyLogo('https://cdn.17app.co/1cd5dcec-16b7-4cd0-bba1-a848e94717a4.png');
        setWebsite('https://www.wave.com.tw/');
        break;
      case 'HandsUP':
        setCompanyName('HandsUP');
        setCompanyLogo('https://cdn.17app.co/b59ac6a6-6470-4a4b-83cd-e1ae3e3cb35f.png');
        setWebsite('https://tw.handsup.shop/home.html');
        break;
      case 'MeMe':
        setCompanyName('MeMe');
        setCompanyLogo('https://cdn.17app.co/777284ed-e512-4c40-bd96-6343c6fbd356.png');
        setWebsite('https://www.meme.chat/');
        break;
      default:
        setCompanyName('17LIVE');
        setCompanyLogo('https://cdn.17app.co/ae338e12-d4d3-4c81-9f76-11c61c23c698.png');
        setWebsite('https://about.17.live');
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
            <InputLabel id="organization-label">公司名稱 Company Name</InputLabel>
            <Select
              labelId="organization-label"
              id="organization"
              value={organization}
              onChange={onOrgChange}
            >
              <MenuItem value="HQ">HQ</MenuItem>
              <MenuItem value="TW">17LIVE</MenuItem>
              <MenuItem value="JP">17LIVE Japan</MenuItem>
              <MenuItem value="HK">17LIVE HK</MenuItem>
              <MenuItem value="US">17LIVE US</MenuItem>
              <MenuItem value="HandsUP">HandsUP</MenuItem>
              <MenuItem value="Wave">Wave</MenuItem>
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
