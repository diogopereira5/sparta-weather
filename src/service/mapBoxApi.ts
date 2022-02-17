import axios from 'axios';

export const API_TOKEN = "pk.eyJ1IjoiZGlvZ29wZXJlaXJhYXMiLCJhIjoiY2t6cTFvdDdhNmZlaTJvbms3dzl3M2k3NCJ9.EC1kmdkwanFNPWUzqd5zIA";

const mapBoxApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
});

export default mapBoxApi;