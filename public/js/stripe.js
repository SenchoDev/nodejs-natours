import axios from 'axios'
import { showAlert } from './alerts'
const stripe = Stripe('pk_test_51HPlWPCLpVwvnP0IAlI6vi8hcZszAG3ZnuLHOCbaBxemuSAVDROFDFbJh5BtweKLneH3G64FrOnmckhVFbXo1IYK00iaGvZCnx')

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
   console.log(session);

    // 2) Create checkout form + chanre credit card
    console.log(stripe)
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
