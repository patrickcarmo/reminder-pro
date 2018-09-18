import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

const reminder = (action) => {
    let { text, dueDate } = action;
    return {
        id: Math.random(),
        text,
        dueDate
    }
}

const removeById = (state = [], id) => {
    const reminders = state.filter(reminder => reminder.id !== id);
    console.log('new reduced reminders', reminders);
    return reminders;
}

const reminders = (state = [], action) => {
    let reminders = null;
    state = JSON.parse(localStorage.getItem('reminders')) || [];
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            localStorage.setItem('reminders', JSON.stringify(reminders));
            return reminders;
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);
            localStorage.setItem('reminders', JSON.stringify(reminders));
            return reminders;
        default:
            return state;
    }
}

export default reminders;