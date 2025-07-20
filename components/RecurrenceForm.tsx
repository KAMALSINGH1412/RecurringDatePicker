'use client';
import { useRecurrenceStore } from '../store/recurrenceStore';
import DateRangePicker from './DateRangePicker';

export default function RecurrenceForm() {
  const { recurrence, setRecurrence } = useRecurrenceStore();

  return (
    <div className="space-y-4">
      <label className="block">
        <span className="font-medium">Recurrence</span>
        <select
          value={recurrence}
          onChange={(e) => setRecurrence(e.target.value)}
          className="block mt-1 p-2 border rounded"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </label>
      <DateRangePicker />
    </div>
  );
}