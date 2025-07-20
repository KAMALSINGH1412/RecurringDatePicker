'use client';
import { useRecurrenceStore } from '../store/recurrenceStore';

export default function DateRangePicker() {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurrenceStore();

  return (
    <div className="space-y-2">
      <label className="block">
        <span>Start Date:</span>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="border p-1 rounded ml-2" />
      </label>
      <label className="block">
        <span>End Date:</span>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="border p-1 rounded ml-2" />
      </label>
    </div>
  );
}