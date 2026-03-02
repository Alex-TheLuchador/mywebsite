import { TerminalState, OutputLine, ConfirmationContext } from '@/types/terminal';

type Action =
  | { type: 'SET_INPUT'; payload: string }
  | { type: 'APPEND_LINES'; payload: OutputLine[] }
  | { type: 'SET_CONFIRMATION'; payload: ConfirmationContext | null }
  | { type: 'SET_BOOTING'; payload: boolean }
  | { type: 'CLEAR_INPUT' };

export const initialState: TerminalState = {
  history: [],
  inputValue: '',
  pendingConfirmation: null,
  isBooting: true,
};

export function terminalReducer(state: TerminalState, action: Action): TerminalState {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...state, inputValue: action.payload };

    case 'APPEND_LINES':
      return { ...state, history: [...state.history, ...action.payload] };

    case 'SET_CONFIRMATION':
      return { ...state, pendingConfirmation: action.payload };

    case 'SET_BOOTING':
      return { ...state, isBooting: action.payload };

    case 'CLEAR_INPUT':
      return { ...state, inputValue: '' };

    default:
      return state;
  }
}
