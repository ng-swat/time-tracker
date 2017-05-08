import {Project} from './projects/project';
export interface User {
  permissionGroup: string; // null / user / admin
  pending: boolean;
  name: string;
  password: string;
  email: string;
  errors: string;
}

export interface Registration {
  pending: boolean;
  errors: string;
}

export interface AppState {
  user: User;
  registration: Registration;
  // projects: Project[];
}
