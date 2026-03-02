import { Command } from '@/types/terminal';
import { content } from '@/lib/content';

export const aboutCommand: Command = {
  name: 'about',
  description: 'Display background and contact info',
  execute: () => ({
    lines: [
      { id: crypto.randomUUID(), type: 'output', content: content.about.name },
      { id: crypto.randomUUID(), type: 'output', content: content.about.title },
      { id: crypto.randomUUID(), type: 'output', content: '' },
      { id: crypto.randomUUID(), type: 'output', content: content.about.bio },
    ],
  }),
};
