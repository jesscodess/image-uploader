import React, {useState} from 'react';
import DefaultImage from "../assets/upload-photo-here.png";

const ImageUpload = () => {
    const [avatarURL, setAvatarURL] = useState();
    return (
        <div className="relative h-96 w-96">
          <img src={avatarURL} alt="Avatar" className="h-96 w-96 rounded-full"/>
        </div>
    )
}

export default ImageUpload