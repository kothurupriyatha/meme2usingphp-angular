import { Component, OnInit,ViewChild } from '@angular/core';
import {PhpserviceService} from '../phpservice.service';
import {ColorEvent} from 'ngx-color';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})

export class GeneratorComponent implements OnInit {
  title = "CodeSandbox";
  topText: string="";
  bottomText: string="";
  fileEvent:any;
  textColor: string = '#000000';
  backgroundColor = '#F9F9FB';
  public imagePath;
  imageUrl = null;
  photo: any;

  @ViewChild('memeCanvas',{static:false}) myCanvas;
  constructor(public myservice:PhpserviceService,public _DomSanitizationService: DomSanitizer){}
  ngOnInit(): void {}
    preview(e: any) {
        this.fileEvent = e;
        let canvas = this.myCanvas.nativeElement;
        let ctx = canvas.getContext("2d");
        let render = new FileReader();
        render.readAsDataURL(e.target.files[0]);
        render.onload = function (event) {
        const img = new Image();
        img.src = event.target.result as string;
        img.onload = function () {
        ctx.drawImage(img, 50, 150, 800, 600);
          };
        };
        console.log("i am at preview end function");
      }

      downloadImg()
      {
        let canvas = this.myCanvas.nativeElement;
        let img = canvas.toDataURL('image/png');
        let link = document.createElement('a');
        link.download = 'memeimage.png';
        link.href = img;
        link.click();
      }

    drawText() {
      let canvas=this.myCanvas.nativeElement;
      let ctx=canvas.getContext('2d');
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle=this.backgroundColor;
      ctx.fillRect(0,0,canvas.width,canvas.height);
      this.preview(this.fileEvent);
      ctx.fillStyle=this.textColor;
      ctx.font='50px Comic Sans MS'
      ctx.fillText(this.topText,canvas.width/8,100);
      ctx.fillText(this.bottomText,canvas.width/8,800);
      console.log("this is from draw text");
    }
    

    canvasTextColor($event: ColorEvent) {
      console.log("this is text color");
      this.textColor = $event.color.hex;
      this.drawText();
    }
  
    canvasBackgroundColor($event: ColorEvent) {
      console.log("this is background color");
      this.backgroundColor = $event.color.hex;
      this.drawText();
    }
   
  
    viewAll(){
      this.myservice.getImage().subscribe((res) => { 
      this.photo = res;
      var myReader:FileReader = new FileReader();
      myReader.onloadend = (e) => {
        this.imageUrl = this._DomSanitizationService.bypassSecurityTrustUrl(<string>myReader.result);
      }
      myReader.readAsDataURL(this.photo);   
    });
    console.log("i am from show image function");
   }

  saveMeme(){
    let canvas = this.myCanvas.nativeElement;
    let img = canvas.toDataURL('image/png');
  //console.log(typeof(img));
  fetch(img)
  .then(res => res.blob())
  .then(blob => {
    var fd = new FormData()
    fd.append('stphoto', blob, 'filename');
    console.log(blob)
    this.myservice.postImage(fd).subscribe(res => console.log(res));

});
 } }
  

 
  

 

  




  
  

  
