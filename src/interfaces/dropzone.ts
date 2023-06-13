// material-ui
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/material';

//third-party
import { DropzoneOptions } from 'react-dropzone';

// ==============================|| TYPES - DROPZONE  ||============================== //

export interface CustomFile extends File {
  path?: string;
  preview?: string;
  lastModifiedDate?: Date;
}

export interface UploadProps extends DropzoneOptions {
  sx?: SxProps<Theme>;
  handleImageChange: (file: CustomFile) => void;
  propertyFile?: { name: string; url: string };
  register: any;
}

export interface UploadMultiFileProps extends DropzoneOptions {
  files?: CustomFile[] | null;
  error?: boolean;
  showList?: boolean;
  sx?: SxProps<Theme>;
  onUpload?: VoidFunction;
  onRemove?: (file: File | string) => void;
  onRemoveAll?: VoidFunction;
  setFieldValue: (field: string, value: any) => void;
}