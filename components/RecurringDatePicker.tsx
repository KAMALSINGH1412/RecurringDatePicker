'use client';
import React, { useState } from 'react';

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function RecurringDatePicker() {
    const [selectedDays, setSelectedDays] = useState<number[]>([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const toggleDay = (dayIndex: number) => {
        setSelectedDays((prev) =>
            prev.includes(dayIndex)
                ? prev.filter((d) => d !== dayIndex)
                : [...prev, dayIndex]
        );
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-xl space-y-6 border border-gray-200 transition-all duration-300">
            {/* Start Date */}
            <div>
                <label className="block font-semibold mb-1 text-gray-700">Start Date:</label>
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="border border-gray-300 p-2 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
            </div>

            {/* End Date */}
            <div>
                <label className="block font-semibold mb-1 text-gray-700">End Date:</label>
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="border border-gray-300 p-2 rounded-lg w-full focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
            </div>

            {/* Weekdays */}
            <div>
                <label className="block font-semibold mb-1 text-gray-700">Repeat on:</label>
                <div className="grid grid-cols-4 gap-3">
                    {weekdays.map((day, index) => (
                        <button
                            key={index}
                            onClick={() => toggleDay(index)}
                            className={`py-2 rounded-lg transition-all duration-200 text-sm font-medium border shadow-sm ${
                                selectedDays.includes(index)
                                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-transparent scale-105'
                                    : 'bg-gray-100 hover:bg-blue-100 border-gray-300'
                            }`}
                        >
                            {day.slice(0, 3)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Preview */}
            <div className="text-sm text-gray-600 pt-4 border-t border-gray-200">
                <p><strong>Start Date:</strong> {startDate || 'Not selected'}</p>
                <p><strong>End Date:</strong> {endDate || 'Not selected'}</p>
                <p><strong>Repeats on:</strong> {selectedDays.length > 0 ? selectedDays.map((d) => weekdays[d]).join(', ') : 'None'}</p>
            </div>
        </div>
    );
}
