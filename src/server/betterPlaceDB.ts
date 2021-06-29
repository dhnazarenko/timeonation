import fetch from 'node-fetch';
import { Project } from '../types';

const BASE_URL = 'https://api.betterplace.org/de/api_v4';

type ErrorResult = {
  status_message: string;
  status_code: number;
};
async function fetchBetterPlaceApi<T>(path: string, query = ''): Promise<T> {
  let url = `${BASE_URL}${path}?`;
  if (query) {
    url += `query=${query}&`;
  }

  const response = await fetch(url);
  if (!response.ok) {
    const errorResult: ErrorResult = await response.json();
    throw {
      message: errorResult.status_message,
      betterPlaceDBCode: errorResult.status_code,
      status: response.status,
    };
  }
  const result: T = await response.json();
  return result;
}

type ProjectResult = {
  id: number;
  city: null | string;
  country: null | string;
  title: string;
  description: string;
  open_amount_in_cents: number;
  progress_percentage: number;
  profile_picture: {
    links: { rel: string; href: string }[];
  };
};

export async function getProjectById(id: string): Promise<Project> {
  const [projectResult] = await Promise.all([
    fetchBetterPlaceApi<ProjectResult>(`/projects/${id}`),
  ]);

  const project: Project = {
    id: projectResult.id,
    city: projectResult.city,
    country: projectResult.country,
    title: projectResult.title,
    description: projectResult.description,
    open_amount_in_cents: projectResult.open_amount_in_cents,
    progress_percentage: projectResult.progress_percentage,
    profile_picture:
      projectResult.profile_picture.links.find(
        (link) => link.rel === 'original'
      )?.href || '',
  };
  return project;
}
