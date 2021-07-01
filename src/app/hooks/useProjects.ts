import { Projects } from '../../types';
import useFetch from './useFetch';

function useProjects(): {
  projects: Projects | null;
  isLoading: boolean;
  errorMessage: string | null;
} {
  const { data: projects, isLoading, errorMessage } = useFetch<Projects>(
    '/api/projects'
  );

  return { projects, isLoading, errorMessage };
}

export default useProjects;
