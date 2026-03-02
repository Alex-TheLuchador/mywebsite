import { Command } from '@/types/terminal';
import { aboutCommand } from './about';
import { servicesCommand } from './services';
import { certificationsCommand } from './certifications';
import { helpCommand } from './help';
import { resumeCommand } from './resume';
import { githubCommand } from './github';
import { linkedinCommand } from './linkedin';

export const commandRegistry: Record<string, Command> = {
  help: helpCommand,
  about: aboutCommand,
  services: servicesCommand,
  certifications: certificationsCommand,
  resume: resumeCommand,
  github: githubCommand,
  linkedin: linkedinCommand,
};
