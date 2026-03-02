import { Command } from '@/types/terminal';
import { content } from '@/lib/content';

export const certificationsCommand: Command = {
  name: 'certifications',
  description: 'Current certifications with verification link',
  execute: () => ({
    lines: [
      { id: crypto.randomUUID(), type: 'output', content: '[ Certifications ]' },
      { id: crypto.randomUUID(), type: 'output', content: '' },
      { id: crypto.randomUUID(), type: 'output', content: content.certifications.details },
      { id: crypto.randomUUID(), type: 'output', content: '' },
      {
        id: crypto.randomUUID(),
        type: 'system',
        content: content.certifications.verificationLabel,
        href: content.certifications.verificationUrl,
      },
    ],
  }),
};
