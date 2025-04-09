import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      title: 'My Tasks',
      placeholder: 'Add a new task...',
      all: 'All',
      active: 'Active',
      completed: 'Completed',
      clear: 'Clear completed',
      empty: 'No tasks yet',
      remaining: 'Tasks left',
    },
  },
  ru: {
    translation: {
      title: 'Мои задачи',
      placeholder: 'Добавить новую задачу...',
      all: 'Все',
      active: 'Активные',
      completed: 'Завершённые',
      clear: 'Очистить завершённые',
      empty: 'Задач пока нет',
      remaining: 'Осталось задач',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
