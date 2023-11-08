export interface IJob {
  isOpen: boolean;
  id: number;
  title: string;
  company: string;
  url: string;
  description: string;
  skillList: string;
  skills: ISkill[];
  publicationDate: string;
}

export interface ISkill {
	id: number;
	idCode: string;
	name: string;
	url: string;
	description: string;
  isOpen: boolean;
}

