import { useState } from 'react';
import { FileUpload } from '@/components/FileUpload';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type UploadedFile = {
  url: string;
  name: string;
  type: string;
};

export default function TestUpload() {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);

  const handleUploadSuccess = (fileUrl: string, fileName: string, fileType: string) => {
    setUploadedFile({ url: fileUrl, name: fileName, type: fileType });
  };
  
  // Convert data URL to a blob URL for better memory management with large files
  const getFileUrl = (file: UploadedFile) => {
    if (file.url.startsWith('blob:')) return file.url;
    return file.url;
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Test File Upload</CardTitle>
        </CardHeader>
        <CardContent>
          <FileUpload 
            onUploadSuccess={handleUploadSuccess}
            accept="image/*,.pdf"
            maxSizeMB={5}
          />
          
          {uploadedFile && (
            <div className="mt-6 p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Uploaded File:</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {uploadedFile.name} ({(uploadedFile.url.length / 1024).toFixed(1)} KB)
              </p>
              
              {uploadedFile.type.startsWith('image/') ? (
                <div className="mt-2">
                  <img 
                    src={uploadedFile.url} 
                    alt="Uploaded content"
                    className="max-w-full h-auto max-h-64 rounded-md border"
                  />
                </div>
              ) : uploadedFile.type === 'application/pdf' ? (
                <div className="mt-2 p-4 bg-gray-50 rounded border">
                  <p className="text-sm text-muted-foreground mb-2">
                    PDF Preview (click to view full size):
                  </p>
                  <a 
                    href={uploadedFile.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm flex items-center"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 mr-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                    Open PDF
                  </a>
                </div>
              ) : (
                <div className="mt-2 p-4 bg-gray-50 rounded border">
                  <p className="text-sm text-muted-foreground">
                    File type: {uploadedFile.type}
                  </p>
                  <a 
                    href={uploadedFile.url} 
                    download={uploadedFile.name}
                    className="text-blue-600 hover:underline text-sm flex items-center mt-2"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 mr-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download File
                  </a>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
