import { Project } from '../../types';
import useFetch from './useFetch';

function useProject(
  id: number
): {
  project: Project | null;
  isLoading: boolean;
  errorMessage: string | null;
} {
  const { data: project, isLoading, errorMessage } = useFetch<Project>(
    `/projects/${id}`
  );

  return { project, isLoading, errorMessage };
}

export default useProject;
