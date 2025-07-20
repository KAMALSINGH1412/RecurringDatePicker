import { create } from 'zustand';

interface RecurrenceState {
  recurrence: string;
  startDate: string;
  endDate: string;
  setRecurrence: (value: string) => void;
  setStartDate: (value: string) => void;
  setEndDate: (value: string) => void;
}

export const useRecurrenceStore = create<RecurrenceState>((set) => ({
  recurrence: 'daily',
  startDate: '',
  endDate: '',
  setRecurrence: (value) => set({ recurrence: value }),
  setStartDate: (value) => set({ startDate: value }),
  setEndDate: (value) => set({ endDate: value }),
}));