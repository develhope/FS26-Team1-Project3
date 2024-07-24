import React, { useState } from 'react';
import '../css/UploadPhoto.scss';

const UploadPhoto = () => {
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setPreview(null);
    setFileName('');
    document.getElementById('file-input').value = ''; // Resetta l'input file
  };

  return (
    <section className='photowrapper'>
      <form action="" method="POST" encType="multipart/form-data">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label className="control-label">Upload File</label>
                {preview && (
                  <div className="preview-zone">
                    <div className="box box-solid">
                      <div className="box-header with-border">
                        <div><b>Preview</b></div>
                        <div className="box-tools pull-right">
                          <button
                            type="button"
                            className="btn btn-danger btn-xs remove-preview"
                            onClick={handleReset}
                          >
                            <i className="fa fa-times"></i> Reset This Form
                          </button>
                        </div>
                      </div>
                      <div className="box-body">
                        <img width="200" src={preview} alt="Preview" />
                        <p>{fileName}</p>
                      </div>
                    </div>
                  </div>
                )}
                <div className="dropzone-wrapper">
                  <div className="dropzone-desc">
                    <i className="glyphicon glyphicon-download-alt"></i>
                    <p>Carica una immagine.</p>
                  </div>
                  <input
                    id="file-input"
                    type="file"
                    name="img_logo"
                    className="dropzone"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary pull-right">
                Upload
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default UploadPhoto;
