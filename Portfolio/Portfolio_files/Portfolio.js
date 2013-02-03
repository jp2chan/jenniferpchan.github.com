// Created by iWeb 3.0.4 local-build-20130203

function createMediaStream_id2()
{return IWCreateMediaCollection("http://jenniferpchan.com/Jennifer_Chan/Portfolio/Portfolio_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://jenniferpchan.com/Jennifer_Chan/Portfolio',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget8'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://jenniferpchan.com/Jennifer_Chan/Portfolio',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(2,new IWSize(269,201),new IWSize(269,32),new IWSize(309,248),27,27,0,new IWSize(29,29)),new IWPhotoFrame([IWCreateImage('Portfolio_files/ul.png'),IWCreateImage('Portfolio_files/top.png'),IWCreateImage('Portfolio_files/ur.png'),IWCreateImage('Portfolio_files/right.png'),IWCreateImage('Portfolio_files/lr.png'),IWCreateImage('Portfolio_files/bottom.png'),IWCreateImage('Portfolio_files/ll.png'),IWCreateImage('Portfolio_files/left.png')],null,0,0.500000,130.000000,10.000000,118.000000,45.000000,147.000000,30.000000,157.000000,83.000000,251.000000,120.000000,260.000000,120.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget8',null,'widget9',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Portfolio_files/PortfolioMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('../Media/transparent.gif');fixupAllIEPNGBGs();initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
