/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

// type is either 'password' or 'data'
export const updateData = async (name, email) => {
  try {
    
      // type === 'password'
      //   ? 'http://127.0.0.1:3000/api/v1/users/updateMyPassword'
      //   : 'http://127.0.0.1:3000/api/v1/users/updateMe';

    const res = await axios({
      method: 'PATCH',
      url: '/api/v1/users/updateMe',
      data: {
        name,
        email
      }
    });


    if (res.data.status === 'success') {
      showAlert('success', ` data updated successfully!`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
