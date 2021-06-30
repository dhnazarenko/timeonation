import fetch from 'node-fetch';
import { Project, Projects } from '../types';

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

type ProjectsResult = {
  total_entries: number;
  total_pages: number;
  data: {
    id: number;
    city: null | string;
    country: null | string;
    title: string;
    open_amount_in_cents: number;
    carrier: {
      picture: {
        links: { rel: string; href: string }[];
      };
    };
    profile_picture: {
      links: { rel: string; href: string }[];
    };
  }[];
};

export async function getProjects(): Promise<Projects> {
  const result = await fetchBetterPlaceApi<ProjectsResult>('/projects');
  const projects: Projects = result.data.map((data) => ({
    id: data.id,
    city: data.city,
    country: data.country,
    title: data.title,
    open_amount_in_cents: data.open_amount_in_cents,
    carrier:
      data.carrier.picture.links.find((link) => link.rel === 'fill_100x100')
        ?.href || '',
    profile_picture:
      data.profile_picture.links.find((link) => link.rel === 'original')
        ?.href || '',
  }));
  return projects;
}

type ProjectResult = {
  id: number;
  city: null | string;
  country: null | string;
  title: string;
  description: string;
  open_amount_in_cents: number;
  progress_percentage: number;
  carrier: {
    picture: {
      links: { rel: string; href: string }[];
    };
  };
  profile_picture: {
    links: { rel: string; href: string }[];
  };
  links: { rel: string; href: string }[];
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
    carrier:
      projectResult.carrier.picture.links.find(
        (link) => link.rel === 'fill_100x100'
      )?.href || '',
    profile_picture:
      projectResult.profile_picture.links.find(
        (link) => link.rel === 'original'
      )?.href || '',
    links:
      projectResult.links.find((link) => link.rel === 'categories')?.href || '',
  };
  return project;
}
