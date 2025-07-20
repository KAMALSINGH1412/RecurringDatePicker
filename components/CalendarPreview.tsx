'use client';
import { useRecurrenceStore } from '../store/recurrenceStore';

export default function CalendarPreview() {
  const { startDate, endDate, recurrence } = useRecurrenceStore();

  return (
    <div className="mt-6 p-4 border rounded bg-gray-50">
      <h2 className="text-lg font-semibold mb-2">Calendar Preview</h2>
      <p><strong>Start:</strong> {startDate || 'N/A'}</p>
      <p><strong>End:</strong> {endDate || 'N/A'}</p>
      <p><strong>Recurrence:</strong> {recurrence}</p>
    </div>
  );
}