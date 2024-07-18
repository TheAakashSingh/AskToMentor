import axios from 'axios';

const API_URL = 'https://yourapi.com';

export const fetchUserData = async () => {
  const response = await axios.get(`${API_URL}/user`);
  return response.data;
};

export const fetchMentorshipRequests = async () => {
  const response = await axios.get(`${API_URL}/mentorship-requests`);
  return response.data;
};
