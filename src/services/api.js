import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
} from '../mocks/mockData';

import {
  UserModel,
  UserActivityModel,
  UserAverageSessionsModel,
  UserPerformanceModel
} from './Formatters';

// Basculer cette variable à "false" quand on voudra brancher la vraie API
const USE_MOCK_DATA = false;
const API_BASE_URL = 'http://localhost:3000';

export const getUserInfo = async (userId) => {
  if (USE_MOCK_DATA) {
    const data = USER_MAIN_DATA.find((user) => user.id === parseInt(userId));
    if (!data) throw new Error('User not found');
    return new UserModel(data);
  }
  const response = await fetch(`${API_BASE_URL}/user/${userId}`);
  if (!response.ok) throw new Error('Failed to fetch user info');
  const result = await response.json();
  return new UserModel(result.data);
};

export const getUserActivity = async (userId) => {
  if (USE_MOCK_DATA) {
    const data = USER_ACTIVITY.find((user) => user.userId === parseInt(userId));
    if (!data) throw new Error('User activity not found');
    return new UserActivityModel(data);
  }
  const response = await fetch(`${API_BASE_URL}/user/${userId}/activity`);
  if (!response.ok) throw new Error('Failed to fetch user activity');
  const result = await response.json();
  return new UserActivityModel(result.data);
};

export const getUserAverageSessions = async (userId) => {
  if (USE_MOCK_DATA) {
    const data = USER_AVERAGE_SESSIONS.find((user) => user.userId === parseInt(userId));
    if (!data) throw new Error('User average sessions not found');
    return new UserAverageSessionsModel(data);
  }
  const response = await fetch(`${API_BASE_URL}/user/${userId}/average-sessions`);
  if (!response.ok) throw new Error('Failed to fetch user average sessions');
  const result = await response.json();
  return new UserAverageSessionsModel(result.data);
};

export const getUserPerformance = async (userId) => {
  if (USE_MOCK_DATA) {
    const data = USER_PERFORMANCE.find((user) => user.userId === parseInt(userId));
    if (!data) throw new Error('User performance not found');
    return new UserPerformanceModel(data);
  }
  const response = await fetch(`${API_BASE_URL}/user/${userId}/performance`);
  if (!response.ok) throw new Error('Failed to fetch user performance');
  const result = await response.json();
  return new UserPerformanceModel(result.data);
};
