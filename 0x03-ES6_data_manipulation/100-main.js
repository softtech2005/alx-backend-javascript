import { queryAPI } from './100-weak.js';

const endpoint = { url: 'https://api.example.com' };

try {
	  queryAPI(endpoint);
	  queryAPI(endpoint);
	  queryAPI(endpoint);
	  queryAPI(endpoint);
	  queryAPI(endpoint);
	  queryAPI(endpoint); // This call should throw an error
} catch (err) {
	  console.log(err.message); // Should output 'Endpoint load is high'
}

