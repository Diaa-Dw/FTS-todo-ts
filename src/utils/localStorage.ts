export const getFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  const data = localStorage.getItem(key);

  if (!data) return defaultValue;

  try {
    return JSON.parse(data) as T;
  } catch (error) {
    console.error(`Error parsing localStorage key "${key}":`, error);
    return defaultValue;
  }
};

export const setToLocalStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
