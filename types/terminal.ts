export interface OutputLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'system';
  content: string;
  href?: string; // if set, content renders as an <a> tag
  commandRow?: { name: string; description: string }; // if set, renders as two-column help row
}

export interface ConfirmationContext {
  commandName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export interface TerminalState {
  history: OutputLine[];
  inputValue: string;
  pendingConfirmation: ConfirmationContext | null;
  isBooting: boolean;
}

export interface CommandResult {
  lines: OutputLine[];
  confirmation?: Omit<ConfirmationContext, 'commandName'>;
}

export interface Command {
  name: string;
  description: string; // auto-used by the `help` command
  execute: (args: string[]) => CommandResult;
}
