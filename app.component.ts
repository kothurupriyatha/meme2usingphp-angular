import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  HttpHeaders } from '@angular/common/http';
import {PhpserviceService} from './phpservice.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })

export class AppComponent {
  title = 'memegenertion';
 constructor(){}  
}






   /*
   
   title = 'memegenertion';
  url: any;
  public imagePath;
  imageUrl = null;
  photo: any;
   
   
   
   
   
   constructor(private myservice:PhpserviceService,public _DomSanitizationService: DomSanitizer, private http:HttpClient){
    }
  }

   
  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
           this.imagePath = event.target.files;
           const formData=new FormData()
       for (const file of this.imagePath) {
      
       formData.append('image', file, file.name);
           }
           const headers = new HttpHeaders();
            headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            headers.append('Access-Control-Allow-Origin','*');
              
                  
        
       this.http.post('http://localhost/memeback/connection.php', formData,{headers:headers}).subscribe(
       res =>{
        console.log(res);
    },
    err => {
        console.log(err.message);
    });
    
       reader.readAsDataURL(event.target.files[0]); // read file as data url
      
       reader.onload = (event) => { // called once readAsDataURL is completed
      this.url = event.target.result;
      
      }
    }
  }





  setPhoto(event){
    this.photo = event.target.files[0];
    console.log(this.photo );
  }
onClickSubmit(){
      const fd = new FormData();
      fd.append('stphoto',this.photo);
      this.myservice.postImage(fd).subscribe(res => console.log(res));
  }
showImage(){

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
}














  
  /*.subscribe(
    (v=>console.log('value',v)),
    (e=>console.log('error',e)),
    (()=>console.log('adas'))
  );*/

  

 /* constructor(private http: HttpClient) {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    
    const requestOptions = {                                                                                                                                                       headers: new Headers(headerDict), 
    };
    
   this.http.get('http://localhost/memeback/connection.php', requestOptions);
    


/*
    this.http.get('http://localhost/memeback/connection.php').subscribe(data => {
      this.http.post('http://localhost/mypage.php', formData).subscribe( headers, console.log(file.name) );
      console.log(this.data);
     
      
      }, error => console.error(error));

      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
    }
   
  }*/


