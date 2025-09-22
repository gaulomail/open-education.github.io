import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';

interface FileUploadProps {
  onUploadSuccess: (fileUrl: string, fileName: string, fileType: string) => void;
  accept?: string;
  maxSizeMB?: number;
  className?: string;
}

export function FileUpload({
  onUploadSuccess,
  accept = 'image/*,.pdf',
  maxSizeMB = 10,
  className = '',
}: FileUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      // Validate file size
      if (file.size > maxSizeMB * 1024 * 1024) {
        toast({
          title: 'File too large',
          description: `File size should be less than ${maxSizeMB}MB`,
          variant: 'destructive',
        });
        return;
      }

      // Validate file type
      const validTypes = accept.split(',').map(type => type.trim());
      const fileType = file.type;
      const fileName = file.name.toLowerCase();
      
      const isTypeValid = validTypes.some(type => {
        if (type.endsWith('/*')) {
          const typePrefix = type.split('/')[0];
          return fileType.startsWith(typePrefix);
        }
        return fileName.endsWith(type.replace('*', '').toLowerCase());
      });

      if (!isTypeValid) {
        toast({
          title: 'Invalid file type',
          description: `Please upload a file of type: ${accept}`,
          variant: 'destructive',
        });
        return;
      }

      try {
        setIsUploading(true);
        setProgress(30);

        // Simulate upload progress
        const interval = setInterval(() => {
          setProgress(prev => {
            const newProgress = prev + 10;
            if (newProgress >= 90) clearInterval(interval);
            return newProgress > 90 ? 90 : newProgress;
          });
        }, 100);

        // Read file as data URL
        const fileUrl = await readFileAsDataURL(file);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        clearInterval(interval);
        setProgress(100);
        
        // Call the success handler with the data URL
        onUploadSuccess(fileUrl, file.name, file.type);
        
        toast({
          title: 'File processed successfully',
          description: 'Your file is ready to use',
        });
      } catch (error) {
        console.error('File processing error:', error);
        toast({
          title: 'Error processing file',
          description: 'There was an error processing your file',
          variant: 'destructive',
        });
      } finally {
        setIsUploading(false);
        setTimeout(() => setProgress(0), 1000);
      }
    },
    [maxSizeMB, onUploadSuccess, toast]
  );

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center gap-4">
        <Button asChild disabled={isUploading}>
          <label className="cursor-pointer">
            {isUploading ? 'Uploading...' : 'Choose File'}
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept={accept}
              disabled={isUploading}
            />
          </label>
        </Button>
        {progress > 0 && progress < 100 && (
          <div className="flex-1">
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </div>
      <p className="text-sm text-muted-foreground mt-2">
        {`Supports ${accept.includes('image/*') ? 'images' : ''}${accept.includes('.pdf') ? ' and PDFs' : ''} up to ${maxSizeMB}MB`}
      </p>
    </div>
  );
}
