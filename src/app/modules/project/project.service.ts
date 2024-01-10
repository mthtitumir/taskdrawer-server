import { TProject } from './project.interface';
import { Project } from './project.model';

const createProjectIntoDB = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};
const updateProjectIntoDB = async (id: string, payload: Partial<TProject>) => {
  const result = await Project.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const ProjectServices = {
  createProjectIntoDB,
  updateProjectIntoDB,
};
