/* 0.5.1 2020-12-04 18:40:10 */
var app=new function(){this.name="Galaxy",this.version="1",this.date="2021",this.folder="asset-v1/",this.looptime=10675,this.bpm=88,this.totalframe=262,this.nbpolo=7,this.nbloopbonus=3,this.bonusloopA=!2,this.bonusendloopA=!2,this.recmaxloop=34,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#00F26",this.col0="#FFFFFF",this.col1="#0050C",this.col2="#BFA200",this.col3="#A58C00",this.col4="#8C7700",this.animearray=[{name:"1_sun",color:"2D7BA7",uniqsnd:!0},{name:"2_venus",color:"2D7BA7",uniqsnd:!1}, {name:"3_earth",color:"2D7BA7",uniqsnd:!1},{name:"4_mars",color:"2D7BA7",uniqsnd:!1},{name:"pr_back",color:"2D7BA7",uniqsnd:!0},{name:"pr_back",color:"2D7BA7",uniqsnd:!0},{name:"5_jupiter",color:"2D7BA7",uniqsnd:!1},{name:"6_saturn",color:"2D7BA7",uniqsnd:!1},{name:"7_mercury",color:"2D7BA7",uniqsnd:!1},{name:"8_neptune",color:"2D7BA7",uniqsnd:!1},{name:"9_uranus",color:"2D7BA7",uniqsnd:!1},{name:"10_moon",color:"2D7BA7",uniqsnd:!0},{name:"pr_back",color:"2D7BA7",uniqsnd:!0},{name:"pr_back",color:"2D7BA7",uniqsnd:!0},{name:"pr_back",color:"2D7BA7",uniqsnd:!0},{name:"pr_back",color:"2D7BA7",uniqsnd:!0},{name:"pr_back",color:"2D7BA7",uniqsnd:!0},{name:"pr_back",color:"2D7BA7",uniqsnd:!0},{name:"11_ceres",color:"2D7BA7",uniqsnd:!0},{name:"12_pluto",color:"2D7BA7",uniqsnd:!0}],this.bonusarray=[{name:"The Forgotten",src:"B1-The Forgotten.mp4",code:"2,3,4,10, 11",sound:"B1-song",aspire:"aspire"}];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};