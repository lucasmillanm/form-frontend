import {Component, OnInit} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {ImageService} from '../services/image.service';
import {FormsModule} from '@angular/forms';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, NgIf],
})
export class HomePage implements OnInit {
  selectedFile: File = new File([], '');
  fileName: string = '';
  imageData: SafeUrl = '';

  constructor(
    private http: HttpClient,
    public imageService: ImageService,
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {

  }

  onFileSelected(event: Event) {
    console.log(event);
    if (event) {
      const htmlEvent: HTMLInputElement = (event.target as HTMLInputElement);
      console.log('test 1');
      setTimeout(() =>
        console.log('test 3', htmlEvent, htmlEvent.files)
      );
      console.log('test 2');
      if (htmlEvent.files) {
        console.log(htmlEvent.files);
        const file: File = htmlEvent.files[0];
        if (file) {
          this.selectedFile = file;
          console.log(this.selectedFile);
        }
      }
    }
  }

  onUpLoad() {
    if (this.selectedFile) {
      console.log(this.selectedFile)
      const formData: FormData = new FormData();
      console.log(this.selectedFile.name)
      formData.append('image', this.selectedFile, this.selectedFile.name);
      console.log('formdata: ', formData.get('image'));
      this.imageService.uploadImage(formData)
       .subscribe(
        () => console.log("hola"),
        () => console.log("did not work")
      )
    }
  }

  retrieveImage(): void {
    this.imageService.retrieveImage(this.fileName).subscribe(data => {
      const imageUrl = URL.createObjectURL(new Blob([data], {type: 'image/png'}));
      this.imageData = this.sanitizer.bypassSecurityTrustUrl(imageUrl);
    }, error => {
      console.log(error);
    });
  }

}
