
import RecurringDatePicker from '../components/RecurringDatePicker';

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
            <div className="max-w-md w-full">
                <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6 drop-shadow-md">
                    🎯 Recurring Date Picker
                </h1>
                <RecurringDatePicker />
            </div>
        </main>
    );
}
