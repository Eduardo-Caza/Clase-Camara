import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo} from
'@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';



@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public async addNewToGallery(){
    // Take to photo
    const capturePhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }

  constructor() { }
}
